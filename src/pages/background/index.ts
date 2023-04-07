let storedText = "";

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
      // Store the selected text
      storedText = selectedText;
      console.log(selectedText, "HEYO");
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getStoredText") {
    sendResponse({ storedText: storedText });
  }
});
