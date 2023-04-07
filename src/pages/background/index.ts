// import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

// reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
// reloadOnUpdate("pages/content/style.scss");

console.log("background loaded HI");

chrome.runtime.onInstalled.addListener(() => {
  console.log("HELLO??");
  chrome.contextMenus.create({
    id: "displayTextInPopup",
    title: "Display in popup",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("CLICK CLICK");
  if (info.menuItemId === "displayTextInPopup") {
    const selectedText = info.selectionText.trim();

    if (selectedText) {
      // Send the selected text to the popup
      console.log(selectedText, "HEYO");
      chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        console.log(response);
      });
    }
  }
});
