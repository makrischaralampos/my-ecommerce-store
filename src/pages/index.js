import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Our E-commerce Store
      </Heading>
      <Text fontSize="xl" mb={6}>
        Browse our collection of amazing products.
      </Text>
      <Link href="/products" passHref>
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Link>
    </Box>
  );
}
