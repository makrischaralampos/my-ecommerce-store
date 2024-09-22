import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme"; // Optional: Use this if you want to customize the default theme

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* If not customizing theme, you can remove theme prop */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
