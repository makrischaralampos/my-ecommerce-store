import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Cart() {
  // Placeholder for now; cart functionality will be added later
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={6}>
        Your Cart
      </Heading>
      <Text fontSize="lg" mb={6}>
        Your cart is empty.
      </Text>
      <Link href="/products" passHref>
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Link>
    </Box>
  );
}
