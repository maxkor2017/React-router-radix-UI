import { ArrowLeftIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Button,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const stars = [...new Array(5)];
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  if (!product) {
    return (
      <Container size="3">
        <Heading>Loading...</Heading>
      </Container>
    );
  }
  return (
    <Container size="3">
      <div className="container">
        <Link to={"/"}>
          <Button>
            <ArrowLeftIcon />
            Home page
          </Button>
        </Link>
        <Flex
          direction={"column"}
          gap={"20px"}
          width={"600px"}
          align={"center"}
        >
          <Heading align={"center"}>{product.title}</Heading>
          <div className="Container">
            <AspectRatio ratio={16 / 9}>
              <img
                className="Image"
                src={product.image}
                alt="Landscape photograph by Tobias Tullius"
              />
            </AspectRatio>
          </div>
          <Text align={"center"}>{product.description}</Text>
          <Flex gap={"5px"}>
            {stars.map((_, i) =>
              Math.round(product.rating.rate) <= i + 1 ? (
                <StarIcon />
              ) : (
                <StarFilledIcon />
              )
            )}
          </Flex>
        </Flex>
      </div>
    </Container>
  );
}
