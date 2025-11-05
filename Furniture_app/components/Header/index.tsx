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
  keyword?: string;
  setKeyword?: (keyword: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  onSearch,
  onLogout,
  showBack,
  showSearch,
  showLogout,
  keyword,
  setKeyword,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearch = () => {
    const newState = !showSearchInput;
    setShowSearchInput(newState);

    if (!newState && setKeyword) {
      setKeyword("");
    }

    if (onSearch) {
      onSearch();
    }
  };

  return (
    <View>
      <View style={styles.container}>
        {showSearch ? (
          <Pressable hitSlop={20} onPress={handleSearch}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/search.png")}
            />
          </Pressable>
        ) : showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/back.png")}
            />
          </Pressable>
        ) : showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/logout.png")}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.space} />
      </View>
      {showSearchInput && (
        <TextInput
          style={styles.searchInput}
          placeholder="Type your keyword..."
          value={keyword || ""}
          onChangeText={(text) => {
            console.log("Typing:", text);
            if (setKeyword) {
              setKeyword(text);
            }
          }}
          autoFocus
        />
      )}
    </View>
  );
};

export default React.memo(Header);
