# 101 jest-puppeteer RACC(Report A Cyper Crime)

This is an example of the very begining testing with jest-puppeteer

<!-- [START usecases] -->

###### What can I do with it in RACC App?

Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples:

- Report any accessibility issue with Axe-core API integrations(coming soon)
- Automate form submission, UI testing, keyboard input, etc.
- Create an up-to-date, automated testing environment.
- Capture a [timeline trace](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference) of your site to help diagnose performance issues.
- Generate screenshots and PDFs of pages.
- and more ...
  <!-- [END usecases] -->

```
npm install
```

Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac) that is guaranteed to work with the API.

```
npm run test:integration
```

## Configs

This test can run in a headleass mode set to a bolean value located inside

```
/frontend/jest-puppeteer.config.js
```
