const test = require("node:test");
const assert = require("node:assert/strict");
const catalog = require("../concept-catalog.js");
const { searchConcepts, officialSearchUrl } = require("../concept-search.js");

test("the local index is broad, distinct, and linked to official WEBTOON series pages", () => {
  assert.equal(catalog.length, 23);
  assert.equal(new Set(catalog.map((entry) => entry.title)).size, catalog.length);
  for (const entry of catalog) {
    assert.ok(entry.title && entry.genre && entry.synopsis);
    assert.match(entry.url, /^https:\/\/www\.webtoons\.com\/en\/[^/]+\/[^/]+\/list\?title_no=\d+$/);
  }
});

test("natural-language concepts rank the story whose synopsis describes them", () => {
  const matches = searchConcepts("a clever underdog rebuilds a fantasy estate using engineering", catalog);
  assert.equal(matches[0].entry.title, "The Greatest Estate Developer");
  assert.ok(matches[0].matchedTerms.includes("engineering"));
});

test("concept expansion finds timeline resets and leveling stories", () => {
  const matches = searchConcepts("a hunter gets a second chance after a dungeon goes wrong", catalog);
  assert.ok(matches.some(({ entry }) => entry.title === "My S-Class Hunters"));
});

test("common genre phrasing and themes expand into synopsis language", () => {
  const scienceFiction = searchConcepts("sci-fi insect apocalypse", catalog);
  assert.ok(scienceFiction.some(({ entry }) => entry.title === "Mosquito Wars"));

  const grief = searchConcepts("grief and loss", catalog);
  assert.ok(grief.some(({ entry }) => entry.title === "The Spark in Your Eyes"));
});

test("genre and synopsis terms find tournament and school stories", () => {
  const matches = searchConcepts("students compete in a martial arts tournament", catalog);
  assert.equal(matches[0].entry.title, "The God of High School");
});

test("title searches rank exact title matches first", () => {
  const matches = searchConcepts("Hardcore Leveling Warrior", catalog);
  assert.equal(matches[0].entry.title, "Hardcore Leveling Warrior");
});

test("unmatched concepts produce no fabricated local result", () => {
  assert.deepEqual(searchConcepts("underwater detective cooking a moon", catalog), []);
  assert.deepEqual(searchConcepts("", catalog), []);
});

test("official search links preserve arbitrary UTF-8 search text", () => {
  assert.equal(
    officialSearchUrl("grief & second chance"),
    "https://www.webtoons.com/en/search?keyword=grief%20%26%20second%20chance"
  );
});
