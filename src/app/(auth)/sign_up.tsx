import Button from "@/components/Button"; // Ensure this component exists
import Colors from "@/constants/Colors"; // Ensure this file exists and contains color constants
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// Define the navigation prop type
interface SignupProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        Alert.alert("Error", "Please fill out all fields.");
        return;
      }
      // Simulate a sign-up request
      // Replace with your actual sign-up logic
      // await signUpUser(email, password);
      Alert.alert("Success", "You have signed up!");
      navigation.navigate("SignIn"); // Navigate to Sign-In screen
    } catch (error) {
      Alert.alert("Error", "Sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
      />

      {loading ? (
        <ActivityIndicator size="large" color={Colors.light.tint} />
      ) : (
        <Button text="Sign Up" onPress={handleSignUp} />
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Link href="/sign_in" asChild>
          <Text style={styles.imageButton}>Login in</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageButton: {
    fontSize: 15,
    color: Colors.light.tint,
    alignSelf: "center",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    width: "100%",
    maxWidth: 400,
    borderRadius: 5,
  },
  inputLabel: {
    alignSelf: "flex-start",
    fontSize: 18,
    marginBottom: 5,
    color: "#333",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
  signInButton: {
    backgroundColor: "#6C757D",
  },
});

export default Signup;
