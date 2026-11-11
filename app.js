const conceptCatalog = window.conceptCatalog;
const conceptSearch = window.conceptSearch;

const scenes = [
  {
    title: "A story that keeps going", speaker: 1, duration: 60, type: "hero",
    heading: "BETWEEN<br>THE <em>PANELS</em>",
    subtitle: "Korean manhwa<br><span>& the webtoon wave</span>",
    lede: "A long history of comics meets a screen-native format—and stories find new ways to travel.",
    note: "Introduce the central idea: Korean webtoons are part of a broader manhwa history, and their format, platforms, creators, and readers all shape how they are experienced.",
    visual: `<div class="hero-art"><div class="art-label">A FORMAT<br>IN MOTION ↘</div><svg viewBox="0 0 500 660" role="img" aria-label="Original illustration of a reader following a glowing story through three vertical panels"><defs><linearGradient id="sky" x2="1" y2="1"><stop stop-color="#ff6386"/><stop offset="1" stop-color="#6c49db"/></linearGradient><linearGradient id="sunset" x2="0" y2="1"><stop stop-color="#ffd36e"/><stop offset="1" stop-color="#ff785f"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="13"/></filter></defs><path d="M37 5h426v200H37z" fill="#222431" stroke="#fff4"/><path d="M37 224h426v186H37z" fill="url(#sky)" stroke="#fff4"/><path d="M37 429h426v223H37z" fill="#222431" stroke="#fff4"/><circle cx="386" cy="93" r="37" fill="#ffe17f"/><path d="m37 195 119-105 74 75 54-57 179 100z" fill="#8867d5"/><path d="m37 200 116-62 76 63 72-66 162 72v3H37z" fill="#352a70"/><circle cx="331" cy="311" r="55" fill="#ffc859" opacity=".6" filter="url(#glow)"/><path d="M37 381q89-115 168-49 90-121 163-11 60-72 95-32v121H37z" fill="#293558"/><path d="M37 397q98-91 187-30 85-91 239-6v49H37z" fill="#191e35"/><path d="M37 588q78-69 153-24 78-64 153-4 60-43 120-10v102H37z" fill="url(#sunset)"/><path d="M37 635q93-43 177-7 76-29 157 6 59-31 92-15v33H37z" fill="#e85772"/><g fill="#fff"><circle cx="110" cy="61" r="2"/><circle cx="145" cy="36" r="2"/><circle cx="283" cy="43" r="2"/><circle cx="420" cy="48" r="3"/><circle cx="150" cy="279" r="2"/></g><g transform="translate(222 504)"><circle cx="30" cy="19" r="20" fill="#272337"/><path d="M12 41q20-18 40 0l16 66H-1z" fill="#3c315e"/><path d="m5 56-30 31 8 9 39-22m27-18 26 35-10 8-31-28" fill="#252235"/></g><path d="M210 530q48-37 94 2l-13 29q-35-20-70 0z" fill="#121522" stroke="#f8d7a2" stroke-width="3"/><path d="M242 539q16-12 30 0" fill="none" stroke="#f8d7a2" stroke-width="2"/></svg><span class="art-credit">ORIGINAL VECTOR ART — NOT SERIES ARTWORK</span></div>`
  },
  {
    title: "Manhwa and webtoons", speaker: 1, duration: 60, type: "standard",
    eyebrow: "01 / THE WORDS", heading: "A medium has<br><em>many forms.</em>",
    lede: "Manhwa is the Korean word for comics. A webtoon is a digital comic format, often released in episodes and designed for scrolling.",
    facts: [["01","A tradition","Manhwa includes print and digital comics, across many genres and generations."],["02","A screen-native form","Webtoons are composed for online reading, commonly on phones."],["03","Not one genre","Romance, comedy, history, action, memoir, horror, and more share the medium."]],
    note: "Make the distinction clear: manhwa is the broader category; webtoon describes a screen-first format. Not every Korean comic is a webtoon, and not every webtoon tells the same kind of story.",
    visual: "format"
  },
  {
    title: "From print to platforms", speaker: 2, duration: 60, type: "standard",
    eyebrow: "02 / A SHORT HISTORY", heading: "From ink<br>to <em>infinite scroll.</em>",
    lede: "Korean comics have changed with the media around them. Webtoons are a newer chapter—not the beginning of the whole story.",
    facts: [["1909","An early milestone","Lee Do-yeong’s satirical newspaper cartoon is an important early example of Korean cartooning."],["Print culture","More than one page","Newspapers and printed books carried comics through changing eras and audiences."],["2000s","A digital turn","Growing internet access and web portals opened new routes for serialized comics."],["Today","A mobile-first culture","Vertical reading, platform distribution, translation, and adaptation connect stories with new audiences."]],
    caution: "The 1909 cartoon is one documented milestone, not a claim that one image alone began all Korean comics.",
    note: "Use the public-domain Lee Do-yeong cartoon as a visual anchor. Explain that print history and webtoons are connected, but not interchangeable; the digital platform era added a new way to publish and read.",
    visual: "phone"
  },
  {
    title: "The scroll is part of the story", speaker: 2, duration: 60, type: "standard",
    eyebrow: "03 / VISUAL GRAMMAR", heading: "The scroll is<br>part of the <em>story.</em>",
    lede: "A vertical canvas can choreograph a reveal: the reader scrolls, pauses, and discovers what comes next.",
    quote: "Space between panels is not empty. It is time the reader gets to feel.",
    quoteBy: "A WAY TO READ THE FORM",
    note: "Contrast a quick page turn with a long vertical pause. Readers control the scroll, so pacing can feel unusually personal. This design is a storytelling choice, not just a screen shape.",
    visual: "rhythm"
  },
  {
    title: "Platforms shape the reading culture", speaker: 3, duration: 60, type: "standard",
    eyebrow: "04 / THE ECOSYSTEM", heading: "A story meets<br>its <em>platform.</em>",
    lede: "Digital services connect creators and readers, organize serialized episodes, and help stories move between languages and media.",
    facts: [["CREATION","Artists, writers, editors, and production teams turn ideas into serial work."],["DISTRIBUTION","Platforms shape discovery, release rhythms, access, and localization."],["CIRCULATION","Readers recommend, discuss, and sometimes follow a story into another medium."]],
    caution: "A platform is not a neutral window: visibility, rights, and working conditions still matter.",
    note: "Describe the ecosystem as more than an app: creators make the work, platforms distribute and organize it, and readers help stories circulate. KOCCA's remit also illustrates how comics sit within a wider Korean content industry.",
    visual: "map"
  },
  {
    title: "Power and responsibility", speaker: 3, duration: 60, type: "stories",
    eyebrow: "05 / STORIES THAT STAY", heading: "Power is not<br>the whole <em>story.</em>",
    lede: "Two fantasy series use spectacular premises to ask intimate questions about responsibility and care.",
    stories: [
      { number: "01", name: "Solo Leveling", context: "ACTION · FANTASY", art: "blue", icon: "✦", flourish: "POWER / ITS COST", summary: "Sung Jinwoo begins as a hunter struggling to survive. His rise delivers thrilling transformation, but the story also asks what isolation and responsibility cost when others depend on the strongest person.", feeling: "becoming powerful without becoming alone", url: "https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling", linkLabel: "Official anime page" },
      { number: "02", name: "The Greatest Estate Developer", context: "FANTASY · COMEDY", art: "gold", icon: "⌂", flourish: "BUILD / FOR OTHERS", summary: "Civil-engineering student Suho Kim wakes as Lloyd Frontera and uses practical know-how to rescue a debt-ridden estate. Beneath the comedy is a warm idea: rebuilding a place can mean caring for its people.", feeling: "competence turned into community care", url: "https://www.webtoons.com/en/fantasy/the-greatest-estate-developer/list?title_no=3596" }
    ],
    note: "Compare the emotional stakes: Solo Leveling turns power into a burden of protection; The Greatest Estate Developer makes problem-solving and infrastructure unexpectedly funny—and communal. The official WEBTOON synopsis supports the Suho/Lloyd premise.",
  },
  {
    title: "Grief, memory, and choice", speaker: 4, duration: 60, type: "stories",
    eyebrow: "06 / STORIES THAT STAY", heading: "Grief can change<br>what we <em>believe.</em>",
    lede: "Fantasy settings can make history and memory feel close—especially when a character has been taught whom to hate.",
    stories: [
      { number: "03", name: "The Spark in Your Eyes", context: "FANTASY · WAR & REDEMPTION", art: "rose", icon: "☼", flourish: "GRIEF / RECONSIDERED", summary: "Erkin, a pharmacist orphaned by war, searches for the Witch of the Sun he blames for his parents’ deaths. Vengeance grows complicated as grief, hidden truth, and an unexpected bond challenge inherited hatred.", feeling: "learning to see an enemy as a person", url: "https://www.webtoons.com/en/fantasy/the-spark-in-your-eyes/list?title_no=3210" },
      { number: "04", name: "Omniscient Reader", context: "ACTION · APOCALYPTIC FANTASY", art: "orange", icon: "◉", flourish: "THE READER / ENTERS", summary: "Dokja’s favorite web novel becomes reality, and knowing its ending gives him agency—but not certainty. The reader who once watched from outside must now make choices for people he knew only as characters.", feeling: "knowledge becoming responsibility", url: "https://www.webtoons.com/en/action/omniscient-reader/list?title_no=2154" }
    ],
    tags: ["ALSO EXPLORE: RETURN OF THE BLOSSOMING BLADE"],
    note: "The Spark in Your Eyes makes an inherited enemy story emotionally difficult to maintain. Omniscient Reader turns reading itself into the premise: what changes when a spectator must act? For another genre example, Return of the Blossoming Blade follows a warrior trying to restore a diminished sect a century after his last battle.",
  },
  {
    title: "A story can travel across media", speaker: 4, duration: 60, type: "standard",
    eyebrow: "07 / BEYOND THE PAGE", heading: "A new medium<br>adds a <em>new voice.</em>",
    lede: "When a comic becomes animation or live action, it can reach new audiences—but the adaptation is a retelling, not a copy.",
    list: [["WEBTOON","ANIMATION","Solo Leveling"],["PAGE","SCREEN","A changed rhythm, performance, and sound"]],
    facts: [["WHAT CARRIES OVER?","Characters, conflicts, and a world readers recognize."],["WHAT CHANGES?","Timing, point of view, sound, and what the adaptation leaves out."]],
    caution: "The Solo Leveling link opens an official streaming-series page; check regional availability.",
    note: "Use Solo Leveling as a clear cross-media example. Ask the audience what animation can add—movement, voice, music—and what it can change about a reader's imagined version.",
    visual: "adapt"
  },
  {
    title: "Global circulation needs thoughtful translation", speaker: 5, duration: 60, type: "standard",
    eyebrow: "08 / ACROSS BORDERS", heading: "A story travels.<br>Meaning <em>travels, too.</em>",
    lede: "Translation opens doors, but humor, speech levels, names, and cultural references need thoughtful choices.",
    facts: [["LANGUAGE","Keep a character’s voice and the feeling of a line."],["CONTEXT","Explain only what helps; leave room for readers to discover."],["EXCHANGE","Readers bring their own experiences and interpretations."]],
    caution: "Global availability does not mean every reader experiences a work in the same way.",
    note: "Explain localization as interpretation, not word substitution. A successful translation lets a story travel while respecting its cultural context; readers may still take different meanings from it.",
    visual: "map"
  },
  {
    title: "Readers make a shared culture", speaker: 5, duration: 60, type: "standard",
    eyebrow: "09 / READING TOGETHER", heading: "Readers help<br>stories <em>circulate.</em>",
    lede: "Comments, recommendations, fan art, and conversations can make a solo phone-reading experience feel collective.",
    tags: ["READ","REACT","RECOMMEND","DISCUSS"],
    caution: "Appreciation is not permission: respect creators’ rights, platform rules, and credit when sharing or discussing art.",
    note: "Describe how readers recommend titles and talk through episodes. Make the ethical distinction clear: fan enthusiasm does not remove creators' copyright or grant permission to repost panels.",
    visual: "chat"
  },
  {
    title: "Influence has two sides", speaker: 6, duration: 60, type: "standard",
    eyebrow: "10 / A BALANCED VIEW", heading: "Influence has<br>two <em>sides.</em>",
    lede: "Digital comics create new routes to readers and new questions about who benefits from that reach.",
    balance: [["POSSIBILITIES","Screen-native storytelling; international discovery; new creative careers; movement into other media."],["QUESTIONS","Who gets visibility? How are creators supported? What gets lost in translation? Who controls reuse and rights?"]],
    caution: "These are questions for discussion, not claims that every creator or platform has the same experience.",
    note: "Keep the conclusion balanced: platforms and adaptations can increase access and attention, while creator support, visibility, translation, and rights remain important questions.",
    visual: "balance"
  },
  {
    title: "Manhwa keeps changing", speaker: 6, duration: 60, type: "finale",
    eyebrow: "11 / OUR TAKEAWAY", heading: "The format changes.<br>The <em>stories stay.</em>",
    lede: "From print cartoons to phone-first episodes, Korean comics keep changing how stories meet their readers.",
    closing: "Which matters most to you: a world you can enter, a character you understand, or a story you can share?",
    note: "Close with the question, take one or two quick responses, thank the class, and finish on time.",
    visual: "finale"
  }
];

const citations = [
  { group: "FEATURED SERIES & ADAPTATION", links: [
    ["Solo Leveling anime adaptation","CRUNCHYROLL · OFFICIAL SERIES PAGE","https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling"],
    ["The Greatest Estate Developer","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/fantasy/the-greatest-estate-developer/list?title_no=3596"],
    ["The Spark in Your Eyes","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/fantasy/the-spark-in-your-eyes/list?title_no=3210"],
    ["Omniscient Reader","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/action/omniscient-reader/list?title_no=2154"],
    ["Return of the Blossoming Blade","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/action/return-of-the-blossoming-blade/list?title_no=2849"],
    ["Marry My Husband","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/romance/marry-my-husband/list?title_no=4572"],
    ["Yumi's Cells","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/slice-of-life/yumi-cell/list?title_no=478"],
    ["Sweet Home","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/thriller/sweethome/list?title_no=1285"],
    ["The Sound of Your Heart","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/comedy/the-sound-of-your-heart/list?title_no=269"],
    ["The Boxer","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/sports/the-boxer/list?title_no=2027"],
    ["Mosquito Wars","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/sf/mosquito-wars/list?title_no=2404"],
    ["The Horizon","WEBTOON · OFFICIAL SERIES PAGE","https://www.webtoons.com/en/drama/the-horizon/list?title_no=3141"]
  ]},
  { group: "CULTURE, HISTORY & INDUSTRY", links: [
    ["Understanding Korean Webtoon Culture: Transmedia Storytelling, Digital Platforms, and Genres","DAL YONG JIN · 2022 · BRILL","https://doi.org/10.1163/9781684176724"],
    ["Research Trends in Korean Comics and Webtoons Utilizing Text Mining","HONG & PARK · 2025 · DOI","https://doi.org/10.48033/jss.10.1.7"],
    ["Korea Creative Content Agency","KOCCA · OFFICIAL","https://www.kocca.kr/en/main.do"],
    ["WEBTOON company information","OFFICIAL","https://about.webtoon.com/"],
    ["Lee Do-yeong, “Imitating Others” (1909)","PUBLIC DOMAIN · WIKIMEDIA COMMONS","https://commons.wikimedia.org/wiki/File:Lee-do-yeong%27s_manhwa_Imitating_Others.jpg"]
  ]},
  { group: "PRESENTATION BRIEF", links: [
    ["Topic and presentation requirements","PBL brief · 2026–27",""]
  ]}
];

function renderConceptFinder() {
  const suggestions = [
    "a clever underdog rebuilds a fantasy estate",
    "a hunter gets a second chance after a dungeon goes wrong",
    "friends face monsters together",
    "betrayal, revenge, and a new beginning",
    "a martial arts tournament at school",
    "survive inside a video game",
    "war, grief, and enemies who become allies",
    "awkward friendships and growing up"
  ];
  return `<section class="slide appendix concept-finder" id="concept-finder" aria-labelledby="concept-title" aria-hidden="true"><div class="appendix-copy"><p class="eyebrow">EXPLORE / SEARCH BY IDEA <span>NOT BY TITLE</span></p><h2 id="concept-title">What if a story<br><em>started with…</em></h2><p class="lede">Describe a premise, feeling, setting, or “what if.” Search title, genre, and synopsis summaries locally, then open the same query in WEBTOON's live English catalog.</p><form class="concept-form" id="concept-search-form" role="search"><label for="concept-query">YOUR CONCEPT OR PREMISE</label><div class="concept-search-row"><input id="concept-query" type="search" placeholder="e.g. “a builder rebuilds a fantasy kingdom”" autocomplete="off" aria-controls="concept-results"><button type="submit">SEARCH STORIES <span>↗</span></button></div></form><div class="concept-suggestions" aria-label="Example searches">${suggestions.map((term)=>`<button type="button" data-concept="${esc(term)}">${esc(term)}</button>`).join("")}</div><div class="concept-results" id="concept-results" aria-live="polite" aria-atomic="true"><p class="concept-prompt">Search a whole idea or select a prompt to get started.</p></div><p class="concept-coverage"><b>ABOUT COVERAGE</b> The local index holds ${conceptCatalog.length} English-edition titles, with short paraphrases of their official WEBTOON synopses and genre labels. It is a maintained sample, not the complete or live catalog. For broader and current coverage, use the official search link shown with every query; WEBTOON's public search can change independently of this site.</p></div></section>`;
}

function renderConceptResults(query) {
  const results = document.getElementById("concept-results");
  if (!results) return;
  const cleanQuery = query.trim();
  const normalized = conceptSearch.normalizeConcept(cleanQuery);
  if (!normalized) {
    results.innerHTML = `<p class="concept-prompt">Choose an example above or enter an idea to see what turns up.</p>`;
    return;
  }
  const matches = conceptSearch.searchConcepts(cleanQuery, conceptCatalog);
  const officialUrl = conceptSearch.officialSearchUrl(cleanQuery);
  const officialLink = `<a class="concept-live-link" href="${esc(officialUrl)}" target="_blank" rel="noopener noreferrer">Open official WEBTOON search for “${esc(cleanQuery)}” ↗</a>`;
  if (!matches.length) {
    results.innerHTML = `<p class="concept-prompt">No local titles matched <b>${esc(cleanQuery)}</b>. That's a gap in this small index, not proof the catalog has no match.</p>${officialLink}`;
    return;
  }
  results.innerHTML = `<p class="concept-count"><b>TOP ${matches.length} LOCAL ${matches.length===1?"MATCH":"MATCHES"}</b> in ${conceptCatalog.length} indexed titles for “${esc(cleanQuery)}”</p>${officialLink}<div class="concept-grid">${matches.map(({entry,matchedTerms})=>`<article class="concept-card"><div class="concept-card-heading"><h3>${esc(entry.title)}</h3><span>${esc(entry.genre)}</span></div><p>${esc(entry.synopsis)}</p><p class="concept-rationale">Why it matched: related to ${esc(matchedTerms.join(", "))} in the title, genre, or synopsis.</p><a href="${esc(entry.url)}" target="_blank" rel="noopener noreferrer">Official WEBTOON series page ↗</a></article>`).join("")}</div>`;
}

const vocabulary = [
  ["01","Manhwa","The Korean term for comics; it includes print and digital works."],
  ["02","Webtoon","A digital comic commonly published in episodes and designed for online reading."],
  ["03","Vertical scroll","A reading layout in which a reader moves down the screen instead of turning pages."],
  ["04","Serialization","Publishing a longer story in installments over time."],
  ["05","Localization","Adapting a work for a new language and audience, considering tone and cultural references."],
  ["06","Adaptation","Reworking a story for another medium, such as animation or live-action television."],
  ["07","Intellectual property","Creative work and related rights that belong to creators or other rightsholders."]
];

const app = document.getElementById("deck");
const nav = document.getElementById("dots");
const namesKey = "between-panels-speaker-names-v2";
let activeIndex = 0;
let elapsed = 0;
let ticker = null;
let toastHandle = null;
let touchX = null;

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[char]));
}

function makePhone(includeArchive = false) {
  const archive = includeArchive ? `<figure class="archive-card"><img src="assets/lee-do-yeong-1909.jpg" alt="Lee Do-yeong's 1909 Korean newspaper cartoon, Imitating Others"><figcaption>LEE DO-YEONG · 1909<br>NEWSPAPER CARTOON<br><a href="https://commons.wikimedia.org/wiki/File:Lee-do-yeong%27s_manhwa_Imitating_Others.jpg" target="_blank" rel="noopener noreferrer">PUBLIC DOMAIN · SOURCE ↗</a></figcaption></figure>` : "";
  return `<div class="format-visual">${archive}<div class="phone-demo" role="img" aria-label="Original illustration showing how a vertical-scroll comic uses pauses and reveals"><div class="phone-screen"><div class="phone-head"><span>STORY / 01</span><span>•••</span></div><div class="phone-panel one"><span class="mini-label">A QUIET BEGINNING</span><i class="moon"></i><i class="hill"></i></div><div class="reading-gap"><span>THE PAUSE IS PART OF THE PANEL</span><b>↓</b></div><div class="phone-panel two"><i class="sun"></i><i class="person"></i><span class="bubble">“What comes next?”</span></div><div class="reading-gap short"><span>SWIPE TO CONTINUE</span><b>↓</b></div><div class="phone-panel three"><span class="mini-label">TO BE CONTINUED…</span></div><div class="episode-cta">NEXT EPISODE　→</div></div></div></div>`;
}

function makeRhythm() {
  return `<div class="rhythm-art" role="img" aria-label="Original visual diagram: reveal, pause, impact"><div class="rhythm-head"><span>READING RHYTHM</span><span>↓ SCROLL</span></div><div class="rhythm-panel"><span class="visual-caption">01 / REVEAL</span><i class="door"></i><b class="look">LOOK</b></div><div class="pause"><span>↓</span><small>PAUSE</small><span>↓</span></div><div class="impact"><span class="visual-caption">02 / IMPACT</span><b>!</b></div><div class="art-foot"><span>THE READER SETS THE PACE</span><span>✦ ✦ ✦</span></div></div>`;
}

function makeMap() {
  return `<div class="map-art" role="img" aria-label="Original abstract map connecting a story’s origin with readers around the world"><div class="map-grid"></div><i class="orbit"></i><i class="orbit second"></i><span class="map-point seoul"><i></i>SEOUL</span><span class="map-point a"><i></i>READER</span><span class="map-point b"><i></i>READER</span><span class="map-point c"><i></i>READER</span><div class="map-caption">ONE STORY<br><em>MANY READINGS</em></div><div class="art-foot"><span>CONNECTION IS TWO-WAY</span><span>✦</span></div></div>`;
}

function makeAdapt() {
  return `<div class="adapt-art" role="img" aria-label="Original diagram showing one story moving between page, screen, and sound"><i class="adapt-ring"></i><div class="adapt-center">ONE<br>STORY</div><div class="adapt-node node-page"><i>▤</i><b>PAGE</b><small>reader’s pace</small></div><div class="adapt-node node-film"><i>▣</i><b>SCREEN</b><small>shared moment</small></div><div class="adapt-node node-sound"><i>♫</i><b>SOUND</b><small>mood & motion</small></div><div class="adapt-footer"><span>EVERY MEDIUM ADDS A VOICE</span><span>↗</span></div></div>`;
}

function makeChat() {
  const chats = [
    ["left c1","✳","Did that ending just—?"],
    ["right c2","✦","I had to scroll back up."],
    ["left c3","◉","Sending this to my friend ♡"],
    ["right c4","✿","What do you think happens next?"]
  ];
  return `<div class="chat-art" role="img" aria-label="Original conversation bubbles illustrating shared webtoon reading"><div class="chat-stamp">A MILLION<br>PRIVATE READS.<br><em>ONE PUBLIC CHAT.</em></div>${chats.map(([className,avatar,text])=>`<div class="chat ${className}"><span class="avatar">${avatar}</span><span class="chat-text">${esc(text)}</span></div>`).join("")}</div>`;
}

function makeBalance() {
  return `<div class="balance-art" role="img" aria-label="Original balance scale representing access and responsibility"><i class="balance-sun"></i><i class="balance-pole"></i><i class="balance-beam"></i><div class="balance-pan pan-left"><b class="pan-label">ACCESS<br>+ VOICE</b></div><div class="balance-pan pan-right"><b class="pan-label">CARE<br>+ CREDIT</b></div><i class="balance-base"></i><div class="balance-caption">MORE DOORS OPEN · MORE QUESTIONS MATTER</div></div>`;
}

function renderStory(story) {
  return `<article class="story-card"><div class="art-card art-${esc(story.art)}" role="img" aria-label="Original abstract illustration inspired by the themes of ${esc(story.name)}, not official series artwork"><span class="number">${esc(story.number)}</span><i class="motif">${esc(story.icon)}</i><small class="accent">${esc(story.flourish)}</small><span class="poster">STORY / ${esc(story.number)}</span></div><div class="story-body"><div class="story-title"><h3>${esc(story.name)}</h3><span class="story-meta">${esc(story.context)}</span></div><p>${esc(story.summary)}</p><div class="feeling"><span class="feeling-label">FEELING</span><b>${esc(story.feeling)}</b></div><a class="story-source" href="${esc(story.url)}" target="_blank" rel="noopener noreferrer">${esc(story.linkLabel || "Official series page")} ↗</a></div></article>`;
}

function renderVisual(name) {
  switch (name) {
    case "phone": return makePhone(true);
    case "format": return makePhone();
    case "rhythm": return makeRhythm();
    case "map": return makeMap();
    case "adapt": return makeAdapt();
    case "chat": return makeChat();
    case "balance": return makeBalance();
    case "finale": return `<div class="finale-art" role="img" aria-label="Original three-panel artwork representing a story, a scroll, and a connection"><div class="finale-panel"><span>✦</span><small>A STORY</small></div><div class="finale-panel"><span>↓</span><small>A SCROLL</small></div><div class="finale-panel"><span>♡</span><small>A CONNECTION</small></div></div>`;
    default: return "";
  }
}

function renderScene(scene, index) {
  const classes = ["slide", scene.type === "stories" ? "story-scene" : "", scene.type === "hero" ? "hero" : "", scene.type === "finale" ? "finale" : ""].filter(Boolean).join(" ");
  const eyebrow = scene.eyebrow || "WELCOME / THE BIG IDEA";
  const heading = scene.type === "hero" ? `<h1 id="slide-title-${index}">${scene.heading}</h1><p class="hero-subtitle">${scene.subtitle}</p>` : `<h2 id="slide-title-${index}">${scene.heading}</h2>`;
  let details = "";
  if (scene.facts) details += `<div class="definition-list">${scene.facts.map(([title,body],i)=>`<div class="definition"><span class="fact-number">${String(i+1).padStart(2,"0")}</span><div><b>${esc(title)}</b><p>${esc(body)}</p></div></div>`).join("")}</div>`;
  if (scene.quote) details += `<blockquote class="quote"><p>“${esc(scene.quote)}”</p><span class="quote-by">${esc(scene.quoteBy)}</span></blockquote>`;
  if (scene.stories) details += `<div class="story-grid">${scene.stories.map(renderStory).join("")}</div><p class="visual-credit">Original illustrations — not official series artwork</p>`;
  if (scene.list) details += `<div class="adapt-list">${scene.list.map(([from,to,examples])=>`<div class="adapt-row"><span class="adapt-tag">${esc(from)}</span><i>↔</i><span class="adapt-tag animated">${esc(to)}</span><small>${esc(examples)}</small></div>`).join("")}</div>`;
  if (scene.tags) details += `<div class="tag-row">${scene.tags.map((tag)=>`<span>${esc(tag)}</span>`).join("")}</div>`;
  if (scene.balance) details += `<div class="balance-pair">${scene.balance.map(([title,body])=>`<div class="balance-side"><span class="balance-label">${esc(title)}</span><p>${esc(body)}</p></div>`).join('<span class="balance-middle">↔</span>')}</div>`;
  if (scene.closing) details += `<div class="closing"><span class="closing-tag">DISCUSS</span><p>${esc(scene.closing)}</p></div>`;
  if (scene.caution) details += `<p class="caution">${esc(scene.caution)}</p>`;
  if (scene.type === "hero") details += `<p class="hero-meta">12 SCENES<i>/</i>6 VOICES<i>/</i>12 MINUTES</p>`;
  if (scene.type === "finale") details += `<p class="finale-credit">12 SCENES · 6 SPEAKERS · ONE SHARED STORY</p>`;
  const visual = scene.type === "hero" ? scene.visual : renderVisual(scene.visual);
  const speaker = scene.speaker ? `<div class="speaker-chip"><b>${String(scene.speaker).padStart(2,"0")}</b><strong data-speaker-display="${scene.speaker}">Speaker ${scene.speaker}</strong><small>${timeLabel((scene.speaker-1)*120)}–${timeLabel(scene.speaker*120)}</small></div>` : "";
  return `<section class="${classes}" id="slide-${index+1}" aria-labelledby="slide-title-${index}" aria-hidden="true"><div class="copy${scene.type === "stories" ? " story-copy" : ""}${scene.type === "finale" ? " finale-copy" : ""}"><p class="eyebrow">${esc(eyebrow)}</p>${heading}<p class="lede">${esc(scene.lede)}</p>${details}</div>${visual}${speaker}<aside class="talk-track"><span class="note-title">SAY THIS</span><p>${esc(scene.note || "")}</p></aside></section>`;
}

function timeLabel(seconds) {
  return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,"0")}`;
}

function renderReferences() {
  return `<section class="slide appendix" id="references" aria-labelledby="ref-title" aria-hidden="true"><div class="appendix-copy"><p class="eyebrow">APPENDIX / 01 <span>REFERENCES</span></p><h2 id="ref-title">Read <em>further.</em></h2><p class="lede">Official series pages support story summaries. Research and institutional sources support the historical, cultural, and industry context.</p><div class="reference-grid">${citations.map((group)=>`<div class="reference-list"><span class="reference-kind">${esc(group.group)}</span>${group.links.map(([title,kind,url])=>url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}<small>${esc(kind)} ↗</small></a>`:`<div class="reference-list a">${esc(title)}<small>${esc(kind)}</small></div>`).join("")}</div>`).join("")}</div><p class="caution">Hong, Y. & Park, D. (2025), “Research Trends in Korean Comics and Webtoons Utilizing Text Mining,” Social Science Review, 10(1), 153–175, DOI: 10.48033/jss.10.1.7. Its analysis reviews Korean publications from 2000–2024 and notes its domestic scope; it is not a measure of global readers or revenue.</p><p class="caution">Jin, Dal Yong (2022), Understanding Korean Webtoon Culture: Transmedia Storytelling, Digital Platforms, and Genres. Brill. DOI: 10.1163/9781684176724.</p><p class="caution">The 1909 newspaper cartoon is identified as public domain by Wikimedia Commons; its source and credit are shown beside the image. All other visuals are original CSS/SVG illustrations, not official covers or panels. No copyrighted series art is reproduced.</p><p class="caution">The third supplied PDF was excluded from the content, design, and structure of this presentation. The assignment brief was used only for the topic and presentation requirements.</p></div></section>`;
}

function renderVocabulary() {
  return `<section class="slide appendix" id="vocabulary" aria-labelledby="vocab-title" aria-hidden="true"><div class="appendix-copy"><p class="eyebrow">APPENDIX / 02 <span>VOCABULARY</span></p><h2 id="vocab-title">Words to take<br><em>with you.</em></h2><div class="vocab-grid">${vocabulary.map(([n,word,definition])=>`<article><span class="fact-number">${n}</span><h3>${esc(word)}</h3><p>${esc(definition)}</p></article>`).join("")}</div></div></section>`;
}

function renderSpeakers() {
  const sections = [
    "01–02 · Welcome + terms","03–04 · History + format","05–06 · Platforms + power",
    "07–08 · Stories + adaptation","09–10 · Translation + readers","11–12 · Balance + close"
  ];
  const rows = sections.map((section,i)=>`<div class="speaker-row"><span>${timeLabel(i*120)}–${timeLabel((i+1)*120)}</span><label><input data-speaker-name="${i+1}" value="Speaker ${i+1}" maxlength="24" aria-label="Name for speaker ${i+1}"></label><span>${section}</span></div>`).join("");
  return `<section class="slide appendix speaker-guide" id="speakers" aria-labelledby="speaker-title" aria-hidden="true"><div class="appendix-copy"><p class="eyebrow">APPENDIX / 03 <span>12-MINUTE RUN OF SHOW</span></p><h2 id="speaker-title">Six voices.<br><em>Equal time.</em></h2><p class="lede">Six editable placeholders, two 60-second scenes each. Replace the labels with names; they are saved on this device only.</p><div class="speaker-table"><div class="speaker-row head"><span>TIME</span><span>NAME (EDITABLE)</span><span>SCENES</span></div>${rows}</div><div class="speaker-tools"><button class="reset" id="reset-speakers">RESET NAMES</button><span>Print this page with HANDOUTS → Print / save as PDF.</span></div><p class="caution">The assignment brief allows 10–15 minutes and 5–6 group members with equal English speaking time. Six presenters get 2 minutes each here. For five presenters, target 2 minutes 24 seconds each: assign two scenes apiece, then divide the remaining 2 minutes into five equal 24-second segments.</p></div></section>`;
}

app.innerHTML = scenes.map(renderScene).join("") + renderConceptFinder() + renderReferences() + renderVocabulary() + renderSpeakers();
const allSlides = [...document.querySelectorAll(".slide")];
const sceneSlides = allSlides.slice(0, scenes.length);
document.getElementById("total").textContent = String(scenes.length).padStart(2,"0");

sceneSlides.forEach((slide,index)=>{
  const button = document.createElement("button");
  button.type = "button";
  button.title = scenes[index].title;
  button.setAttribute("aria-label",`Go to scene ${index+1}: ${scenes[index].title}`);
  button.addEventListener("click",()=>show(index));
  nav.append(button);
});

function toast(message) {
  const element=document.getElementById("toast");
  element.textContent=message;
  element.classList.add("visible");
  clearTimeout(toastHandle);
  toastHandle=setTimeout(()=>element.classList.remove("visible"),2100);
}

function closeHandouts() {
  const menu=document.getElementById("handouts-menu");
  menu.hidden=true;
  document.getElementById("handouts").setAttribute("aria-expanded","false");
}

function show(index,scroll=true) {
  if(index<0||index>=allSlides.length)return;
  activeIndex=index;
  allSlides.forEach((slide,i)=>{slide.classList.toggle("active",i===index);slide.setAttribute("aria-hidden",String(i!==index));});
  document.querySelectorAll(".talk-track").forEach((note)=>note.classList.remove("visible"));
  const slide=allSlides[index];
  if(scroll)slide.scrollTop=0;
  if(index<scenes.length){
    document.getElementById("current").textContent=String(index+1).padStart(2,"0");
    document.getElementById("progress-fill").style.width=`${((index+1)/scenes.length)*100}%`;
    [...nav.children].forEach((dot,i)=>dot.setAttribute("aria-current",String(i===index?"step":"false")));
  }
  closeHandouts();
}

function step(direction) {
  if(activeIndex>=scenes.length) { show(direction>0?0:scenes.length-1); return; }
  show(Math.max(0,Math.min(scenes.length-1,activeIndex+direction)));
}

function setName(number,value) {
  const name=value.trim()||`Speaker ${number}`;
  document.querySelectorAll(`[data-speaker-name="${number}"]`).forEach((input)=>{if(input.value!==value)input.value=value;});
  document.querySelectorAll(`[data-speaker-display="${number}"]`).forEach((label)=>label.textContent=name);
}

const defaultNames=Object.fromEntries([...document.querySelectorAll("[data-speaker-name]")].map((input)=>[input.dataset.speakerName,input.defaultValue]));
try {
  const saved=JSON.parse(localStorage.getItem(namesKey)||"null");
  if(saved&&typeof saved==="object")for(const [number,name] of Object.entries(saved)){if(Object.hasOwn(defaultNames,number)&&typeof name==="string")setName(number,name);}
} catch { localStorage.removeItem(namesKey); }
document.querySelectorAll("[data-speaker-name]").forEach((input)=>input.addEventListener("input",()=>{
  setName(input.dataset.speakerName,input.value);
  try { localStorage.setItem(namesKey,JSON.stringify(Object.fromEntries([...document.querySelectorAll("[data-speaker-name]")].map((field)=>[field.dataset.speakerName,field.value.trim()])))); }
  catch { toast("Names stay only while this page is open."); }
}));
document.getElementById("reset-speakers").addEventListener("click",()=>{
  for(const [number,name] of Object.entries(defaultNames))setName(number,name);
  try { localStorage.removeItem(namesKey); } catch { toast("Could not clear saved names."); return; }
  toast("Speaker names reset.");
});

document.getElementById("prev").addEventListener("click",()=>step(-1));
document.getElementById("next").addEventListener("click",()=>step(1));
document.getElementById("concept-finder-open").addEventListener("click",()=>show(allSlides.findIndex((slide)=>slide.id==="concept-finder")));
document.getElementById("concept-search-form").addEventListener("submit",(event)=>{
  event.preventDefault();
  renderConceptResults(document.getElementById("concept-query").value);
});
document.querySelectorAll("[data-concept]").forEach((button)=>button.addEventListener("click",()=>{
  const input=document.getElementById("concept-query");
  input.value=button.dataset.concept;
  renderConceptResults(input.value);
  input.focus();
}));
document.getElementById("notes").addEventListener("click",()=>{
  const note=allSlides[activeIndex].querySelector(".talk-track");
  if(note)note.classList.toggle("visible");
});
document.getElementById("fullscreen").addEventListener("click",async()=>{
  try { if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen(); }
  catch { toast("Fullscreen is unavailable in this browser."); }
});

function showTime() {
  return `${String(Math.floor(elapsed/60)).padStart(2,"0")}:${String(elapsed%60).padStart(2,"0")}`;
}
const timer=document.getElementById("timer");
timer.addEventListener("click",()=>{
  if(ticker){clearInterval(ticker);ticker=null;timer.innerHTML=`PAUSED ${showTime()} <span>Ⅱ</span>`;toast("Timer paused.");}
  else {
    ticker=setInterval(()=>{elapsed++;if(elapsed%10===0)timer.innerHTML=`${showTime()} <span>Ⅱ</span>`;if(elapsed===720)toast("Twelve minutes — wrap up your final point.");},1000);
    timer.innerHTML=`${showTime()} <span>Ⅱ</span>`;
    toast(elapsed?"Timer resumed.":"Timer started — you’ve got this.");
  }
});
timer.addEventListener("contextmenu",(event)=>{event.preventDefault();clearInterval(ticker);ticker=null;elapsed=0;timer.innerHTML='START TIMER <span>▶</span>';toast("Timer reset.");});
timer.title="Click to start or pause; right-click to reset.";

document.getElementById("handouts").addEventListener("click",()=>{
  const menu=document.getElementById("handouts-menu");
  menu.hidden=!menu.hidden;
  document.getElementById("handouts").setAttribute("aria-expanded",String(!menu.hidden));
});
document.getElementById("handouts-menu").addEventListener("click",(event)=>{
  const button=event.target.closest("button");if(!button)return;
  if(button.dataset.go)show(allSlides.findIndex((slide)=>slide.id===button.dataset.go));
  if(button.id==="print"){closeHandouts();window.print();}
});
document.addEventListener("click",(event)=>{
  const menu=document.getElementById("handouts-menu");
  if(!menu.hidden&&!menu.contains(event.target)&&!document.getElementById("handouts").contains(event.target))closeHandouts();
});
document.addEventListener("keydown",(event)=>{
  if(event.target instanceof HTMLInputElement||event.target instanceof HTMLTextAreaElement)return;
  if(["ArrowRight"," ","PageDown"].includes(event.key)){event.preventDefault();step(1);}
  else if(["ArrowLeft","PageUp"].includes(event.key)){event.preventDefault();step(-1);}
  else if(event.key.toLowerCase()==="n"){const note=allSlides[activeIndex].querySelector(".talk-track");if(note)note.classList.toggle("visible");}
  else if(event.key.toLowerCase()==="f")document.getElementById("fullscreen").click();
  else if(event.key==="Escape")closeHandouts();
});
document.getElementById("deck").addEventListener("touchstart",(event)=>{touchX=event.changedTouches[0].screenX;},{passive:true});
document.getElementById("deck").addEventListener("touchend",(event)=>{
  if(touchX===null)return;
  const distance=event.changedTouches[0].screenX-touchX;
  if(Math.abs(distance)>60)step(distance<0?1:-1);
  touchX=null;
},{passive:true});
show(0);
