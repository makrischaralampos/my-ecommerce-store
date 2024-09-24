import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { useCart } from "@/context/cartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

export default function Cart() {
  const { cart, dispatch } = useCart(); // Access the cart and dispatcher

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
  };

  const handleDecreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
  };

  return (
    <Box textAlign="center" py={10} px={[4, 6, 10]}>
      <Heading as="h2" size="xl" mb={6}>
        Your Cart
      </Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <Grid templateColumns={["1fr", "1fr 2fr"]} gap={6}>
          {cart.map((item) => (
            <Box key={item.id} p={5} shadow="md" borderWidth="1px">
              <Image
                src={item.image}
                alt={item.name}
                boxSize="100px"
                objectFit="cover"
                mb={4}
              />
              <Heading as="h4" size="md">
                {item.name}
              </Heading>
              <Text fontSize="lg" fontWeight="bold" color="teal.500">
                {item.price}
              </Text>
              <Stack direction="row" justify="center" align="center" mt={4}>
                <IconButton
                  icon={<FaMinus />}
                  onClick={() => handleDecreaseQuantity(item.id)}
                  aria-label="Decrease Quantity"
                />
                <Text>{item.quantity}</Text>
                <IconButton
                  icon={<FaPlus />}
                  onClick={() => handleIncreaseQuantity(item.id)}
                  aria-label="Increase Quantity"
                />
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => handleRemoveFromCart(item.id)}
                  aria-label="Remove"
                />
              </Stack>
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  );
}
