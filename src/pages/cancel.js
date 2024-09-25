import { Box, Heading, Text } from "@chakra-ui/react";

export default function Cancel() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Payment Canceled
      </Heading>
      <Text fontSize="lg" color="red.500">
        Your payment was not completed. Feel free to try again.
      </Text>
    </Box>
  );
}
