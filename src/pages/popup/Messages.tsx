import { Flex } from "@chakra-ui/react";
import React from "react";

interface Message {
  from: string;
  text: string;
}

interface MessagesProps {
  messages: Message[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => {
        return <div key={index}>{item.text}</div>;
      })}
    </Flex>
  );
};

export default Messages;
