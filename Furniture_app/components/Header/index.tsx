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
  style?: object;
  backButtonStyle?: object;
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
  style, 
  backButtonStyle, 
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
    <View style={[styles.container, style]}>
      {/* Left icon (search / back / logout) */}
      {showSearch ? (
        <Pressable
          hitSlop={20}
          onPress={handleSearch}
          style={backButtonStyle}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/images/search.png")}
          />
        </Pressable>
      ) : showBack ? (
        <Pressable
          hitSlop={20}
          onPress={onBackPress}
          style={backButtonStyle}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/images/back.png")}
          />
        </Pressable>
      ) : showLogout ? (
        <Pressable
          hitSlop={20}
          onPress={onLogout}
          style={backButtonStyle}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/images/logout.png")}
          />
        </Pressable>
      ) : (
        <View style={styles.space} />
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      <View style={styles.space} />

      {/* Optional search input */}
      {showSearchInput && (
        <TextInput
          style={styles.searchInput}
          placeholder="Type your keyword..."
          value={keyword || ""}
          onChangeText={(text) => {
            if (setKeyword) setKeyword(text);
          }}
          autoFocus
        />
      )}
    </View>
  );
};

export default React.memo(Header);
