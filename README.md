# Between the Panels

An interactive, mobile-friendly classroom presentation about Korean manhwa history, webtoon culture, and the medium’s influence. The 12-scene presentation runs for 12 minutes and includes editable speaker placeholders, speaker notes, a timer, references, vocabulary, and a printable run sheet.

## Run the website

Open `index.html` in a modern browser, or serve this folder locally:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`. The presentation uses plain HTML, CSS, and JavaScript; no build step or external runtime dependencies are required. Internet access is needed for linked references and the web font.

## Deploy to Vercel

The site is static and its entry point is the root-level `index.html`. The included `vercel.json` explicitly selects Vercel's **Other** preset, disables a framework build command, and publishes the repository root as the output directory.

In the Vercel project settings, set **Root Directory** to the repository root (leave it blank or use `.`), with **Framework Preset** set to **Other**. Do not select `android`, `assets`, or a nonexistent `public` folder as the project root or output directory. Redeploy after connecting the repository or changing these settings.

## Presentation controls

- Arrow keys, Space, or the on-screen arrows advance/back up.
- Press **N** to show/hide the current speaker note.
- Press **F** to toggle fullscreen.
- Start the 12-minute timer from the bottom controls. Right-click the timer to reset it.
- The Handouts menu opens references, vocabulary, the editable speaker run sheet, or print-to-PDF.
- Speaker names are stored locally in the browser and can be reset.

The run sheet gives six presenters two 60-second scenes each. It also explains how five presenters can divide the same 12-minute total equally.

## Search by concept

Select **Concept Finder** in the top bar to look up themes and ideas rather than series titles. The finder compares a query with editorial tags for 11 examples in WEBTOON's English catalog and links each result to its official series page. The sample is curated, not exhaustive or live; no result means only that the current sample has no close match.

## Content and image notes

The presentation distinguishes manhwa (Korean comics broadly) from webtoons (a digital, often vertical-scroll format). It treats 1909 newspaper cartooning as an early documented milestone, not as the singular origin of all Korean comics, and discusses the later shift to digital platforms with cautious, sourced language.

Featured stories are *Solo Leveling*, *The Greatest Estate Developer*, *The Spark in Your Eyes*, and *Omniscient Reader*, with *Return of the Blossoming Blade* as an additional example. The in-app references page links official series pages and sources for history, culture, and the Korean content industry.

The historical newspaper cartoon by Lee Do-yeong, *Imitating Others* (1909), is identified as public domain by Wikimedia Commons and is visibly credited and linked in the presentation. All other illustrations are original CSS/SVG visuals; no copyrighted series covers or panels are reproduced. Series cards link to official pages instead.

The third supplied PDF was excluded from the content, design, and structure of this presentation. The assignment brief was used only for the topic and presentation requirements.
