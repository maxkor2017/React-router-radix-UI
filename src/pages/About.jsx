import React from "react";
import NavBar from "../components/NavBar";
import {
  AspectRatio,
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { FileTextIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <>
      <NavBar />
      <Container size="3">
        <Flex justify={"between"} align={"center"} gap={"6"}>
          <Flex direction={"column"} gap={"3"} maxWidth={"400px"}>
            <Heading>Fake Store API</Heading>
            <Text>
              Fake store rest API for your e-commerce or shopping website
              prototype
            </Text>
            <Button variant="classic">
              View on Github <GitHubLogoIcon />
            </Button>
            <Button variant="outline">
              Read docs <FileTextIcon />
            </Button>
          </Flex>
          <AspectRatio ratio={18 / 8}>
            <img
              src="https://fakestoreapi.com/icons/intro.svg"
              alt="A house in a forest"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
              }}
            />
          </AspectRatio>
        </Flex>
      </Container>
    </>
  );
}
