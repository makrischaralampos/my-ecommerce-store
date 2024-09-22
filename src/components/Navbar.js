import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook

export default function Navbar() {
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  return (
    <Box bg="teal.500" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        {/* Home Link */}
        <Link href="/" passHref>
          <Button colorScheme={isActive("/") ? "yellow" : "teal"}>Home</Button>
        </Link>

        {/* Products Link */}
        <Link href="/products" passHref>
          <Button colorScheme={isActive("/products") ? "yellow" : "teal"}>
            Products
          </Button>
        </Link>

        {/* Cart Button */}
        <Link href="/cart" passHref>
          <Button colorScheme={isActive("/cart") ? "yellow" : "teal"}>
            Cart
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
