// PDF.js emits this event immediately before initializing the reader.
const eventDocument = window.parent.document;
eventDocument.addEventListener("webviewerloaded", function configure(event) {
  if (event.detail.source !== window) return;
  eventDocument.removeEventListener("webviewerloaded", configure);

  window.PDFViewerApplicationOptions.setAll({
    defaultUrl: "",
    disablePreferences: true,
    localeProperties: { lang: "en-US" },
    annotationEditorMode: -1,
    enableScripting: false,
    sidebarViewOnLoad: 0,
  });
});
