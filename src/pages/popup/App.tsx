import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Messages from "./Messages";
import WritingSample from "./WritingSample";

const EmailComponent = () => {
  const [writingSample, setWritingSample] = useState("");
  useEffect(() => {
    const handleMessage = (request, sender, sendResponse) => {
      // if (request.action === "displayInPopup") {
      console.log("Selected text:", request);
      // Add your logic here to display the text in the popup
      // }
    };

    chrome.runtime.onMessage.addListener(handleMessage);
    console.log("JUST ADDED LISTENER");
    return () => chrome.runtime.onMessage.removeListener(handleMessage);
  }, []);

  const handleClick = () => {
    // Call OpenAI completion endpoint
  };
  useEffect(() => {
    console.log("hey", document.querySelector("div"));
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>Generate Email</Tab>
        <Tab>Writing Sample</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Messages
            messages={[
              { from: "me", text: "Hi there!" },
              { from: "computer", text: "Hello!" },
            ]}
          />
        </TabPanel>
        <TabPanel>
          <WritingSample
            writingSample={writingSample}
            setWritingSample={setWritingSample}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default EmailComponent;
