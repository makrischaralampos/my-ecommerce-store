import { Box, Flex, Link as NewLink, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link href="/" passHref>
          <NewLink fontSize="xl" color="white">
            Home
          </NewLink>
        </Link>
        <Link href="/products" passHref>
          <NewLink fontSize="xl" color="white">
            Products
          </NewLink>
        </Link>
        <Link href="/cart" passHref>
          <Button colorScheme="teal">Cart</Button>
        </Link>
      </Flex>
    </Box>
  );
}
