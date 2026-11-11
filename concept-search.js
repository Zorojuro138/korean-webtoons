(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.conceptSearch = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  const stopWords = new Set([
    "a", "about", "an", "and", "are", "as", "at", "be", "because", "by", "can",
    "for", "from", "get", "got", "have", "how", "i", "in", "into", "is", "it",
    "me", "of", "on", "or", "recommend", "story", "stories", "that", "the", "their",
    "them", "there", "they", "this", "to", "want", "was", "what", "when", "where",
    "which", "who", "with", "would", "you"
  ]);
  const phraseAliases = {
    "enemies to lovers": ["enemy turned friend", "sworn enemy", "romance"],
    "found family": ["loyal friends", "community", "neighbors"],
    "grief and loss": ["parents deaths", "devastation", "tragic death"],
    "post apocalyptic": ["apocalypse", "doomed world", "devastation"],
    "revenge story": ["revenge", "vengeance", "betrayal"],
    "sci fi": ["science fiction"],
    "second chance": ["regression", "reincarnation", "reset timeline", "return to the past"],
    "time loop": ["regression", "reset timeline", "return to the past"],
    "time travel": ["regression", "reincarnation", "reset timeline", "return to the past"],
    "another life": ["reincarnation", "return to the past"],
    "another world": ["fantasy novel", "game world", "foreign world", "isekai"],
    "grief": ["loss", "parents deaths", "tragic death", "devastation"],
    "level up": ["leveling", "grow stronger", "s rank", "quest"],
    "video game": ["role playing game", "virtual reality game", "rpg"],
    "virtual reality": ["video game", "virtual reality game"],
    "game world": ["role playing game", "virtual reality game"],
    "monster outbreak": ["monsters", "predators", "apocalypse"],
    "school life": ["high school", "academy", "student"],
    "martial arts": ["taekwondo", "swordsman", "fighter", "tournament"],
    "identity and appearance": ["different body", "social life", "loner"],
    "building a town": ["engineering", "farming", "build a better future"]
  };
  const wordAliases = {
    "betrayed": ["betrayal"],
    "builder": ["engineering", "build", "construction"],
    "building": ["engineering", "build", "construction"],
    "bully": ["bullying"],
    "comeback": ["return", "reclaim", "restore"],
    "creature": ["monster"],
    "enemies": ["enemy", "sworn enemy"],
    "farm": ["farmer", "farming", "crops"],
    "farming": ["farmer", "crops"],
    "friend": ["friends", "friendship"],
    "friendship": ["friends", "friend"],
    "ghost": ["horror", "monster"],
    "insect": ["mosquitoes", "predator"],
    "insects": ["mosquitoes", "predator"],
    "isekai": ["another world", "fantasy novel", "game world"],
    "leveling": ["level", "quest", "grow stronger"],
    "magic": ["fantasy"],
    "murim": ["martial arts", "fighter", "battlefield"],
    "monster": ["monsters", "creature", "predator"],
    "monsters": ["monster", "creature", "predator"],
    "reincarnated": ["reincarnation", "return to the past"],
    "reincarnation": ["regression", "return to the past"],
    "revenge": ["vengeance", "betrayal"],
    "romantic": ["romance"],
    "sport": ["sports", "boxing", "fighter"],
    "student": ["school", "academy"],
    "students": ["school", "academy"],
    "survives": ["survival", "fight", "survive"],
    "surviving": ["survival", "fight", "survive"],
    "ally": ["friend", "enemy"],
    "allies": ["friend", "enemy"],
    "underdog": ["loner", "debt", "struggle"],
    "zombie": ["monster", "outbreak", "apocalypse"]
  };

  function normalizeConcept(value) {
    return value.toLocaleLowerCase().normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function tokenForms(token) {
    const forms = new Set([token]);
    if (token.length > 4 && token.endsWith("ies")) forms.add(`${token.slice(0, -3)}y`);
    if (token.length > 5 && token.endsWith("ing")) {
      const base = token.slice(0, -3);
      forms.add(base);
      forms.add(`${base}e`);
      if (base.length > 2 && base.at(-1) === base.at(-2)) forms.add(base.slice(0, -1));
    } else if (token.length > 4 && token.endsWith("ed")) {
      forms.add(token.slice(0, -2));
      forms.add(`${token.slice(0, -2)}e`);
    } else if (token.length > 3 && token.endsWith("s")) {
      forms.add(token.slice(0, -1));
    }
    return [...forms];
  }

  function searchUnits(query) {
    const normalized = normalizeConcept(query);
    const phrases = Object.keys(phraseAliases)
      .filter((phrase) => normalized.includes(phrase))
      .sort((a, b) => b.length - a.length);
    const covered = new Set(phrases.flatMap((phrase) => phrase.split(" ")));
    const units = phrases.map((phrase) => ({
      label: phrase,
      variants: [phrase, ...phraseAliases[phrase]]
    }));

    for (const token of normalized.split(" ")) {
      if (token.length < 2 || stopWords.has(token) || covered.has(token)) continue;
      units.push({ label: token, variants: tokenForms(token) });
      for (const alias of wordAliases[token] || []) {
        units[units.length - 1].variants.push(alias);
      }
    }
    return units;
  }

  function fieldMatches(field, variant) {
    if (variant.includes(" ")) return field.includes(variant);
    return field.split(" ").some((token) => tokenForms(token).includes(variant));
  }

  function searchConcepts(query, catalog, limit = 12) {
    const units = searchUnits(query);
    if (!units.length || !Array.isArray(catalog)) return [];

    return catalog.map((entry, index) => {
      const fields = [
        { value: normalizeConcept(entry.title || ""), weight: 5 },
        { value: normalizeConcept(entry.genre || ""), weight: 2.5 },
        { value: normalizeConcept(entry.synopsis || ""), weight: 1.5 }
      ];
      let score = 0;
      const matchedTerms = [];

      for (const unit of units) {
        const variants = unit.variants.map(normalizeConcept).filter(Boolean);
        const exactHits = fields.filter(({ value }) => fieldMatches(value, variants[0]));
        const expandedHits = fields.filter(({ value }) => !fieldMatches(value, variants[0])
          && variants.slice(1).some((variant) => fieldMatches(value, variant)));
        if (exactHits.length || expandedHits.length) {
          score += exactHits.reduce((total, field) => total + field.weight, 0);
          score += expandedHits.reduce((total, field) => total + field.weight * 0.55, 0);
          if (fieldMatches(fields[0].value, variants[0])) score += 1.5;
          matchedTerms.push(unit.label);
        }
      }

      const normalizedQuery = normalizeConcept(query);
      if (fields[0].value.includes(normalizedQuery)) score += 8;
      return { entry, score, matchedTerms, index };
    }).filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .slice(0, Math.max(0, limit));
  }

  function officialSearchUrl(query) {
    return `https://www.webtoons.com/en/search?keyword=${encodeURIComponent(query.trim())}`;
  }

  return { normalizeConcept, searchConcepts, officialSearchUrl };
});
