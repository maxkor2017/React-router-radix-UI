import { Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const ContactForm = () => (
  <Flex direction="column" gap="3">
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        Name
      </Text>
      <TextField.Root placeholder="Enter your full name" />
    </label>
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        Email
      </Text>
      <TextField.Root placeholder="Enter your email" />
    </label>
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        Your question
      </Text>
      <TextArea placeholder="Write your question" />
    </label>
    <Flex>
      <Button>Post question</Button>
    </Flex>
  </Flex>
);

export default ContactForm;
