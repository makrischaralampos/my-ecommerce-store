import { useRouter } from "next/router";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const dummyProductDetails = {
  1: {
    name: "Product 1",
    price: "$10.00",
    description: "Description of product 1",
  },
  2: {
    name: "Product 2",
    price: "$20.00",
    description: "Description of product 2",
  },
  3: {
    name: "Product 3",
    price: "$30.00",
    description: "Description of product 3",
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = dummyProductDetails[id];

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={6}>
        {product.name}
      </Heading>
      <Text fontSize="lg" mb={4}>
        {product.price}
      </Text>
      <Text mb={6}>{product.description}</Text>
      <Button colorScheme="teal">Add to Cart</Button>
      <Link href="/products" passHref>
        <Button mt={4}>Back to Products</Button>
      </Link>
    </Box>
  );
}
