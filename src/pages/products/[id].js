import { Box, Heading, Text, Image, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import dummyProducts from "@/data/dummyProducts"; // Use real data source here if available
import { useCart } from "@/context/cartContext"; // Import the cart context

export default function ProductPage({ product }) {
  const { dispatch } = useCart(); // Access the cart dispatcher

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Box textAlign="center" py={10} px={[4, 6, 10]}>
      <VStack spacing={6}>
        <Image
          src={product.image}
          alt={product.name}
          borderRadius="lg"
          boxShadow="lg"
          width={["100%", "75%", "50%"]}
          height={["250px", "400px", "500px"]}
          objectFit="cover"
        />
        <Heading as="h1" size="xl">
          {product.name}
        </Heading>
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          {product.price}
        </Text>
        <Text fontSize="md" color="gray.600" maxWidth="600px" mx="auto">
          {product.description}
        </Text>
        <Button
          mt={4}
          colorScheme="teal"
          size="lg"
          width={["100%", "auto"]}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Link href="/products" passHref>
          <Button mt={4} colorScheme="teal" size="lg" width={["100%", "auto"]}>
            Back to Products
          </Button>
        </Link>
      </VStack>
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
