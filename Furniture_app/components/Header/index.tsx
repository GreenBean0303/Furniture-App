import React, { useState } from "react";
import { Pressable, Image, Text, View, TextInput } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  onSearch?: () => void;
  onLogout?: () => void;
  showBack?: boolean;
  showSearch?: boolean;
  showLogout?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  onSearch,
  onLogout,
  showBack,
  showSearch,
  showLogout,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearch = () => {
    setShowSearchInput(!showSearchInput);
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <View>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/back.png")}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        {showSearch ? (
          <Pressable hitSlop={20} onPress={handleSearch}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/search.png")}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/logout.png")}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput && (
        <TextInput
          style={styles.searchInput}
          placeholder="Type your keyword..."
        />
      )}
    </View>
  );
};

export default React.memo(Header);