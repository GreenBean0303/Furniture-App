import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  const handlePress = () => {
    console.log(`${title} button pressed`);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, variant === 'secondary' && styles.secondaryButton]}
      onPress={handlePress}
      activeOpacity={0.6}
    >
      <Text style={[styles.buttonText, variant === 'secondary' && styles.secondaryButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}