console.log("content loaded HERE");
console.log("TEST TEST");
function addButtonToEmail(emailNode) {
  const button = document.createElement("button");
  button.textContent = "add";
  button.classList.add("my-extension-button");
  button.addEventListener("click", () => {
    console.log("Button clicked");
    // Add your logic here to send data to the popup
  });

  emailNode.parentNode.insertBefore(button, emailNode.nextSibling);
}

function addButtonsToEmails() {
  const emailNodes = document.querySelectorAll("span[email]");
  console.log("email nodes", emailNodes);
  emailNodes.forEach((emailNode) => addButtonToEmail(emailNode));
}
// Add buttons when the content script is executed
addButtonsToEmails();

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/Demo");
