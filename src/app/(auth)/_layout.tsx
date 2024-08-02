import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        title: "SignIn",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="sign_up"
        options={{
          title: "Sign up",
          headerRight: () => (
            <Link href="/(auth)/sign_up" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
