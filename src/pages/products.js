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
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={6}>
        Our Products
      </Heading>

      {/* Price Filter Inputs */}
      <Box mb={6}>
        <Input
          placeholder="Min Price"
          type="number"
          value={priceFilter.min}
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, min: e.target.value })
          }
          width="150px"
          marginRight="10px"
        />
        <Input
          placeholder="Max Price"
          type="number"
          value={priceFilter.max}
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, max: e.target.value })
          }
          width="150px"
          marginRight="10px"
        />
        <Button onClick={handlePriceFilter} colorScheme="teal">
          Filter by Price
        </Button>
      </Box>

      {/* Sort Select */}
      <Box mb={6}>
        <Select
          placeholder="Sort by"
          onChange={handleSort}
          value={sortOption}
          width="200px"
          mx="auto"
        >
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="nameAsc">Name: A-Z</option>
        </Select>
      </Box>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {filteredProducts.map((product) => (
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
