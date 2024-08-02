import { View, Text, StyleSheet, TextInput, Image, Alert } from "react-native";
import { useState } from "react";
import Button from "@components/Button";
import { defaultPizzaImage } from "@components/ProductListItem";

import Colors from "@/constants/Colors";

import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();

  const isUpdating = !!id;

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setError("");

    if (!name) {
      setError("Name is required");
      return false;
    }

    if (!price) {
      setError("Price is required");
      return false;
    }

    if (isNaN(parseFloat(price))) {
      setError("Price must be a number");
      return false;
    }

    setError("");
    return true;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,

      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = () => {
    if (isUpdating) {
      onUpdateCreate();
    } else {
      onCreate();
    }
  };

  const onUpdateCreate = () => {
    if (validateInput()) {
      console.warn("Creating Product with", { name, price });
      resetFields();
    }
  };

  const onCreate = () => {
    if (validateInput()) {
      console.warn("Creating Product with", { name, price });
      resetFields();
    }
  };
 
const onDelete = ()=>{
  console.warn("Delete Product");
}

  const confirmDelete =()=>{
    Alert.alert("confirm", "Are you sure you want to delete this product?", [{
      text: "Cancel",
      style: "cancel"

    },
    {
      text:  "Delete",
      onPress: onDelete,
      style: "destructive"

    }
  ])
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? " Updating " : "Create Product" }}
      />

      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text onPress={pickImage} style={styles.imageButton}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="Price"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{error}</Text>

      <Button text={isUpdating ? "update" : "Create"} onPress={onSubmit} />
      {isUpdating && <Text onPress={confirmDelete} style={styles.imageButton}>Delete</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    width: "50%",
    borderRadius: 10,
    alignSelf: "center",
    aspectRatio: 1,
  },
  imageButton: {
    fontSize: 20,
    color: Colors.light.tint,
    alignSelf: "center",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#C0C0C0",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default CreateProductScreen;
