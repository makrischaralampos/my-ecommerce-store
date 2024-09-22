import { Box, Grid, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const dummyProducts = [
  { id: 1, name: "Product 1", price: "$10.00" },
  { id: 2, name: "Product 2", price: "$20.00" },
  { id: 3, name: "Product 3", price: "$30.00" },
];

export default function Products() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={6}>
        Our Products
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {dummyProducts.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{product.name}</Heading>
            <Text mt={4}>{product.price}</Text>
            <Link href={`/products/${product.id}`} passHref>
              <Button mt={4} colorScheme="teal">
                View Details
              </Button>
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
