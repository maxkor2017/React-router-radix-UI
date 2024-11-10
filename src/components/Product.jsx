import { ArchiveIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({ item, addToCart }) {
  return (
    <Box width="240px">
      <Card size="2">
        <Link to={`/product/${item.id}`}>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={item.image}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "contain",
                width: "100%",
                height: 140,
                backgroundColor: "white",
              }}
            />
          </Inset>
        </Link>

        <Heading className="heading" size={"3"}>
          {item.title}
        </Heading>
        <Flex align={"center"} justify={"between"}>
          <Text>{item.price} $</Text>
          <Button onClick={() => addToCart(item)}>
            Add to cart <ArchiveIcon />
          </Button>
        </Flex>
      </Card>
    </Box>
  );
}
