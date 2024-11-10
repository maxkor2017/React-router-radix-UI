import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button, Container, Heading } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container size="3">
      <div className="container">
        <Heading>Not Found</Heading>
        <Link to={"/"}>
          <Button>
            <ArrowLeftIcon />
            Home page
          </Button>
        </Link>
      </div>
    </Container>
  );
}
