import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Header from "@/components/Header";
import { styles } from "./styles";
import CategoryBox from "@/components/CategoryBox";
import ProductHomeItem from "@/components/ProductHomeItem";
import { getAllProducts, getCategories, Product } from "@/services/api";
import colors from "@/utils/colors";

interface Category {
  id?: string;
  title: string;
  image: string;
}

const Home = () => {
  const navigation = useNavigation<any>();
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch products and categories from API
      const [productsData, categoriesData] = await Promise.all([
        getAllProducts(),
        getCategories(),
      ]);

      setProducts(productsData);
      setFilteredProducts(productsData);

      // Create category objects
      const categoryObjects = [
        {
          title: "Popular",
          image:
            "https://static8.depositphotos.com/1338574/831/i/600/depositphotos_8318731-stock-photo-gold-star.jpg",
        },
        ...categoriesData.map((cat: string, index: number) => ({
          id: index + 1,
          title: cat.charAt(0).toUpperCase() + cat.slice(1),
          image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
        })),
      ];

      setCategories(categoryObjects);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  // Filter products when category or keyword changes
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== null && selectedCategory?.title !== "Popular") {
      const categoryName = selectedCategory.title.toLowerCase();
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === categoryName
      );
    }

    if (keyword) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, keyword, products]);

  // Render category item
  const renderCategoryItem = ({ item }: { item: any }) => {
    return (
      <CategoryBox
        title={item.title}
        imageUrl={item.image}
        isSelected={
          selectedCategory === null
            ? item.title === "Popular"
            : item.id === selectedCategory?.id
        }
        onPress={() => {
          if (item.title === "Popular") {
            setSelectedCategory(null);
          } else {
            setSelectedCategory(item);
          }
        }}
      />
    );
  };

  // Render product item
  const renderProductItem = ({ item }: { item: Product }) => {
    return (
      <ProductHomeItem
        title={item.title}
        price={`$ ${item.price.toFixed(2)}`}
        imageUrl={item.image}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            product: {
              ...item,
              price: `$ ${item.price.toFixed(2)}`,
            },
          });
        }}
      />
    );
  };

  // Show loading indicator
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header showSearch={false} title="Find All You Need" />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={{ marginTop: 16, color: colors.grey }}>
            Loading products...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        showSearch={true}
        title="Find All You Need"
        keyword={keyword}
        setKeyword={setKeyword}
      />

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) =>
          item.id != null ? String(item.id) : `category-${index}`
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
