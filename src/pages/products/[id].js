import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import dummyProducts from "@/data/dummyProducts"; // Use real data source here if available

export default function ProductPage({ product }) {
  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box textAlign="center" py={10} px={6}>
      <Image src={product.image} alt={product.name} mb={4} />
      <Heading as="h1" size="xl">
        {product.name}
      </Heading>
      <Text mt={4}>{product.price}</Text>
      <Text mt={4}>{product.description}</Text>
      <Link href="/products" passHref>
        <Button mt={4} colorScheme="teal">
          Back to Products
        </Button>
      </Link>
    </Box>
  );
}

// Fetch product data at build time
export async function getStaticProps({ params }) {
  // Convert params.id to a number if product.id is a number
  const product = dummyProducts.find((p) => p.id.toString() === params.id);

  return {
    props: {
      product: product || null, // Pass product data as props
    },
    revalidate: 10, // Rebuild the page every 10 seconds (optional)
  };
}

// Define dynamic paths for product pages
export async function getStaticPaths() {
  const paths = dummyProducts.map((product) => ({
    params: { id: product.id.toString() }, // Use product ID as the path
  }));

  return {
    paths,
    fallback: false, // Show 404 if page is not found
  };
}
