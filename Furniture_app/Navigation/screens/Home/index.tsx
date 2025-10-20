import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { styles } from "./styles";
import CategoryBox from "@/components/CategoryBox";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductHomeItem from "@/components/ProductHomeItem";

interface Category {
  id?: string | number;
  title: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  image: string;
  category: number;
  price: string;
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [keyword, setKeyword] = useState<string>("");

  console.log("Home - Current keyword:", keyword);
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== null && selectedCategory?.title !== "Popular") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory?.id
      );
    }

    if (keyword) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({ item }: { item: Category }) => {
    return (
      <CategoryBox
        title={item.title}
        imageUrl={item.image}
        isSelected={item.id === selectedCategory?.id}
        onPress={() => {
          setSelectedCategory(item);
          console.log(`Category ${item.title} selected`);
        }}
      />
    );
  };

  const renderProductItem = ({ item }: { item: Product }) => {
    return (
      <ProductHomeItem
        title={item.title}
        price={item.price}
        imageUrl={item.image}
        onPress={() => {
          console.log(`Product ${item.title} pressed`);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        showSearch={true}
        title="Find All You Need"
        keyword={keyword}
        setKeyword={setKeyword}
      />

      <FlatList
        data={categories as Category[]}
        renderItem={renderCategoryItem}
        keyExtractor={(item) =>
          item.id != null ? String(item.id) : item.title
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesList}
        keyboardShouldPersistTaps="handled"
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 100 }} />}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
