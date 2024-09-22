import { Box, Grid, Heading, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import dummyProducts from "@/data/dummyProducts"; // Import the dummy data

export default function Products() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={6}>
        Our Products
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {dummyProducts.map((product) => (
          <Box
            key={product.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
          >
            <Image src={product.image} alt={product.name} mb={4} />
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
