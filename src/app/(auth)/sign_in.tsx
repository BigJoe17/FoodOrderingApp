import Button from "@/components/Button"; // Ensure this component exists
import Colors from "@/constants/Colors"; // Ensure this file exists and contains color constants
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const SignInScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        Alert.alert("Error", "Please fill out all fields.");
        return;
      }
      // Simulate a sign-in request
      // Replace with actual sign-in logic
      // await signInUser(email, password);
      Alert.alert("Success", "You have signed in!");
      router.push("/home"); // Navigate to the home screen or another screen
    } catch (error) {
      Alert.alert("Error", "Sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" color={Colors.light.tint} />
      ) : (
        <Button text="Sign In" onPress={handleSignIn} />
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link href="/sign_up" asChild>
          <Text style={styles.imageButton}> Sign Up </Text>
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
  imageButton: {
    fontSize: 15,
    color: Colors.light.tint,
    fontWeight: "light",
    alignSelf: "center",
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
  signUpButton: {
    backgroundColor: "#6C757D",
  },
});

export default SignInScreen;
