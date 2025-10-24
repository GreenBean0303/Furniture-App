import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const renderItem = ({ item }: { item: string }) => {
    return (
      <Image
        source={{ uri: item }}
        style={styles.carouselImage}
        resizeMode="cover"
      />
    );
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
