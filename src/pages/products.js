import { useState } from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  Select,
  Input,
  Stack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import dummyProducts from "@/data/dummyProducts"; // Import the dummy data

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);
  const [sortOption, setSortOption] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity });

  // Function to filter products by price
  const handlePriceFilter = () => {
    setFilteredProducts(
      dummyProducts.filter(
        (product) =>
          parseFloat(product.price.replace("$", "")) >= priceFilter.min &&
          parseFloat(product.price.replace("$", "")) <= priceFilter.max
      )
    );
  };

  // Function to sort products by name or price
  const handleSort = (e) => {
    const sort = e.target.value;
    setSortOption(sort);
    let sortedProducts = [...filteredProducts];

    if (sort === "priceAsc") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    } else if (sort === "priceDesc") {
      sortedProducts.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    } else if (sort === "nameAsc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <Box textAlign="center" py={10} px={[4, 6, 10]}>
      <Heading as="h2" size="xl" mb={6}>
        Our Products
      </Heading>

      {/* Price Filter Inputs */}
      <Stack
        direction={["column", "row"]}
        justify="center"
        mb={6}
        spacing={[2, 4]}
      >
        <Input
          placeholder="Min Price"
          type="number"
          value={priceFilter.min}
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, min: e.target.value })
          }
          width={["100%", "150px"]}
        />
        <Input
          placeholder="Max Price"
          type="number"
          value={priceFilter.max}
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, max: e.target.value })
          }
          width={["100%", "150px"]}
        />
        <Button
          onClick={handlePriceFilter}
          colorScheme="teal"
          width={["100%", "auto"]}
        >
          Filter by Price
        </Button>
      </Stack>

      {/* Sort Select */}
      <Select
        placeholder="Sort by"
        onChange={handleSort}
        value={sortOption}
        width={["100%", "200px"]}
        mx="auto"
        mb={6}
        colorScheme="teal"
      >
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="nameAsc">Name: A-Z</option>
      </Select>

      {/* Products Grid */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            p={5}
          >
            <Image
              src={product.image}
              alt={product.name}
              mb={4}
              borderRadius="md"
              objectFit="cover"
              width="100%"
              height={["200px", "250px", "300px"]}
            />
            <Heading fontSize="lg" mb={2}>
              {product.name}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" color="teal.500">
              {product.price}
            </Text>
            <Link href={`/products/${product.id}`} passHref>
              <Button mt={4} colorScheme="teal" width="100%">
                View Details
              </Button>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
