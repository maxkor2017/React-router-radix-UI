import React from "react";
import NavBar from "../components/NavBar";
import { Container } from "@radix-ui/themes";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <NavBar />
      <Container size="3">
        <ContactForm />
      </Container>
    </>
  );
}
