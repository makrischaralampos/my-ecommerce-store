import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bg="gray.700" color="white" py={4} mt={10}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Text fontSize="lg">
          &copy; {new Date().getFullYear()} My E-Commerce Store
        </Text>

        <Flex>
          <Link href="/" passHref>
            <Button mr={4}>Home</Button>
          </Link>
          <Link href="/products" passHref>
            <Button mr={4}>Products</Button>
          </Link>
          <Link href="/cart" passHref>
            <Button>Cart</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
