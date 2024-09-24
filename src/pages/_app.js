import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "@/context/cartContext"; // Import the CartProvider
import theme from "../../theme"; // Optional: Use this if you want to customize the default theme
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* If not customizing theme, you can remove theme prop */}
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </ChakraProvider>
  );
}

export default MyApp;
