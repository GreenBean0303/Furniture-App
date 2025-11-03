import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

interface EditableBoxProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  editable: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const EditableBox: React.FC<EditableBoxProps> = ({
  label,
  value,
  onChangeText,
  editable,
  keyboardType = "default",
  autoCapitalize = "sentences",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, !editable && styles.inputDisabled]}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

export default EditableBox;
