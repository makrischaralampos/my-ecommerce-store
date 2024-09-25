import { Box, Heading, Text } from "@chakra-ui/react";

export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Payment Successful!
      </Heading>
      <Text fontSize="lg" color="green.500">
        Thank you for your purchase. Your payment was processed successfully.
      </Text>
    </Box>
  );
}
