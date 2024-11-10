import {
  ArchiveIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  IconButton,
  Inset,
  ScrollArea,
  Table,
  Text,
} from "@radix-ui/themes";
import React from "react";
import CartItem from "./CartItem";

export default function CartModal({
  cartProducts,
  addToCart,
  fullPrice,
  productsCount,
  minusCartProduct,
  deleteCartProduct,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton>
          <ArchiveIcon />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content maxWidth={"800px"}>
        <Dialog.Title>Cart</Dialog.Title>
        <Dialog.Description>Products count: {productsCount}</Dialog.Description>

        <Inset side="x" my="5">
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 300 }}
          >
            <Flex direction={"column"} gap={"2"} mx={"3"}>
              {cartProducts.map((item) => {
                return (
                  <CartItem
                    item={item}
                    addToCart={addToCart}
                    minusCartProduct={minusCartProduct}
                    deleteCartProduct={deleteCartProduct}
                  />
                );
              })}
            </Flex>
          </ScrollArea>
        </Inset>

        <Flex gap="3" justify="between">
          <Text size={"3"} weight={"bold"}>
            Full price: {fullPrice.toFixed(2)} $
          </Text>
          <Flex gap={"3"}>
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Dialog.Close>
            <Button variant="classic">Purchase</Button>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
