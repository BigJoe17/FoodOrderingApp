import { BackHandler, Pressable, Text, View, StyleSheet, text } from 'react-native';
import Colors from "@/constants/Colors";
import { forwardRef } from "react";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...PressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...PressableProps} style={Styles.container}>
        <Text style={Styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

export default Button;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    margin:20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
    height: 50,
  },

  text: {
    color: "white",
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
