import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import AuthHeader from '@/components/AuthHeader';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword || !fullName) {
      Alert.alert('Viga', 'Palun täida kõik väljad');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Viga', 'Paroolid ei kattu');
      return;
    }

    // Siin tuleb hiljem tegelik registreerimise loogika
    console.log('Registreerimine:', { email, fullName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Loo konto</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Täisnimi"
          value={fullName}
          onChangeText={setFullName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Parool"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TextInput
          style={styles.input}
          placeholder="Korda parooli"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Registreeru</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>Tagasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;