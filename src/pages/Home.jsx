import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {
  Container,
  Flex,
  Heading,
  IconButton,
  Skeleton,
} from "@radix-ui/themes";
import Product from "../components/Product";
import { ArchiveIcon } from "@radix-ui/react-icons";
import CartModal from "../components/CartModal";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const skeletons = [...new Array(10)].map(() => (
    <Skeleton width={"240px"} height={"248px"}></Skeleton>
  ));

  function addToCart(product) {
    const cartProduct = cartProducts.find((item) => item.id === product.id);
    if (cartProduct) {
      setCartProducts((prev) =>
        prev.map((item) => {
          if (item.id === cartProduct.id) {
            item.count++;
          }
          return item;
        })
      );
    } else {
      setCartProducts((prev) => [...prev, { ...product, count: 1 }]);
    }
  }

  function minusCartProduct(product) {
    setCartProducts((prev) =>
      prev.map((item) => {
        if (item.id === product.id) {
          item.count--;
        }
        return item;
      })
    );
  }

  function deleteCartProduct(product) {
    setCartProducts((prev) => prev.filter((item) => item.id !== product.id));
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const productsCount = cartProducts.length;
  const fullPrice = cartProducts.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  console.log(cartProducts);
  return (
    <>
      <NavBar />
      <Container size="3">
        <Flex justify={"between"}>
          <Heading>Products</Heading>
          <CartModal
            cartProducts={cartProducts}
            addToCart={addToCart}
            fullPrice={fullPrice}
            productsCount={productsCount}
            minusCartProduct={minusCartProduct}
            deleteCartProduct={deleteCartProduct}
          />
        </Flex>
        <Flex justify={"between"} gap={"20px"} wrap={"wrap"} mt={"6"}>
          {loading
            ? skeletons
            : products.map((item) => (
                <Product item={item} addToCart={addToCart} />
              ))}
        </Flex>
      </Container>
    </>
  );
}
