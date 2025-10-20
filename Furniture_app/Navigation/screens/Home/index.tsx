import React from "react";
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
  const renderCategoryItem = ({ item }: { item: Category }) => {
    return (
      <CategoryBox
        title={item.title}
        imageUrl={item.image}
        onPress={() => {
          console.log(`Category ${item.title} pressed`);
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
      <Header showSearch={true} title="Find All You Need" />

      <FlatList
        data={categories as Category[]}
        renderItem={renderCategoryItem}
        keyExtractor={(item) =>
          item.id != null ? String(item.id) : item.title
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesList}
      />

      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
