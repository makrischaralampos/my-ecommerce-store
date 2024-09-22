import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to My E-commerce Store!
      </Heading>
      <Button colorScheme="teal" size="lg">
        Get Started
      </Button>
    </Box>
  );
}
