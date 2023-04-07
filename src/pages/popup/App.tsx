import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import WritingSample from "./ WritingSample;";

type Email = {
  sender: string;
  timestamp: string;
  content: string;
};

function parseEmails(emails: string): any {
  const emailRegex = /On\s.*?wrote:/gs;
  const emailMessages = emails.split(emailRegex);

  // const parsedEmails = [];
  // let i = 0;
  // while (i < emailMessages.length - 1) {
  //   parsedEmails.push(`${emailMessages[i]} --- ${emailMessages[i + 1]}}`);
  //   i += 2;
  // }

  return emailMessages;
}

const EmailComponent = () => {
  const [writingSample, setWritingSample] = useState("");
  const [storedText, setStoredText] = useState("");

  useEffect(() => {
    chrome.runtime.sendMessage({ action: "getStoredText" }, (response) => {
      setStoredText(response.storedText);
      console.log("GOTIT", parseEmails(response.storedText));
    });
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
          <Textarea value={storedText} />
        </TabPanel>
        <TabPanel>
          {/* <WritingSample
            writingSample={writingSample}
            setWritingSample={setWritingSample}
          /> */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default EmailComponent;
