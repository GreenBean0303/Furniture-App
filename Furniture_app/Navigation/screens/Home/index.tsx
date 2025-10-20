import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import CategoryBox from "../../../components/CategoryBox";
import { categories } from "../../../data/categories";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../../data/products";
import ProductHomeItem from "@/components/ProductHomeItem";

interface Category {
  id?: string | number;
  title: string;
  image: string;
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
  const renderProductItem = ({ item }: { item: any }) => {
    return (
      <ProductHomeItem
        imageUrl={item.image}
        onPress={() => {
          console.log(`Product ${item.name} pressed`);
        }}
        title={""}
        price={0}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
          numColumns={2}
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => String(item.id)}
        />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
