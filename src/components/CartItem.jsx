import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Card, Flex, IconButton, Text } from "@radix-ui/themes";
import React from "react";

export default function CartItem({
  item,
  addToCart,
  minusCartProduct,
  deleteCartProduct,
}) {
  return (
    <Card>
      <Flex gap="3" align="center" justify={"between"}>
        <Flex gap={"3"} align={"center"}>
          <Avatar size="3" src={item.image} radius="small" fallback="T" />

          <Box>
            <Text as="div" size="2" weight="bold">
              {item.title}
            </Text>
            <Text as="div" size="2" color="gray">
              {item.category}
            </Text>
          </Box>
        </Flex>
        <Flex gap={"4"} align={"center"}>
          <Flex gap={"2"} align={"center"}>
            <IconButton
              onClick={() => minusCartProduct(item)}
              disabled={item.count == 1}
            >
              <MinusIcon />
            </IconButton>
            <Flex width={"17px"} justify={"center"}>
              <Text size="2" weight="bold" align={"center"}>
                {item.count}
              </Text>
            </Flex>

            <IconButton onClick={() => addToCart(item)}>
              <PlusIcon />
            </IconButton>
          </Flex>
          <Flex gap={"2"} align={"center"} width={"120px"} justify={"end"}>
            <Text size={"2"} weight={"bold"}>
              {item.price} $
            </Text>
            <IconButton
              color="red"
              variant="surface"
              onClick={() => deleteCartProduct(item)}
            >
              <TrashIcon />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
