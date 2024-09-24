import { Box, Flex, Button, Text, IconButton, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useCart } from "@/context/cartContext";

export default function Navbar() {
  const router = useRouter();
  const { cart } = useCart(); // Access the cart

  const isActive = (href) => router.pathname === href;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="teal.500"
      p={4}
      color="white"
    >
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
      <Box>
        <Link href="/cart" passHref>
          <IconButton
            colorScheme={isActive("/cart") ? "yellow" : "teal"}
            aria-label="Cart"
            position="relative"
            icon={<FaShoppingCart />}
          />
          {cart && cart.length > 0 && (
            <Badge
              position="absolute"
              top="3"
              right="2"
              bg="teal.400"
              color="white"
              borderRadius="full"
              px={2}
            >
              {cart.length}
            </Badge>
          )}
        </Link>
      </Box>
    </Box>
  );
}
