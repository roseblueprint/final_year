import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const Welcome = ({}) => {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 300, height: 130 }}
        resizeMode="contain"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Welcome!
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Welcome to Our app, nearex. Here you can find all sort of drugs from
          nearex pharmacies
        </ThemedText>
      </ThemedView>

      <Link href="/(tabs)" asChild>
        <TouchableOpacity style={styles.button}>
          <ThemedText type="subtitle" style={styles.buttonText}>
            Get Started!
          </ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 50,
  },
  titleContainer: {
    backgroundColor: "transparent",
  },
  title: {
    textAlign: "center",
    fontSize: 70,
    paddingTop: 40,
  },
  subtitle: {
    textAlign: "center",
    marginTop: 25,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#0a7ea4",
  },
  buttonText: {
    color: "#fff",
  },
});

export default Welcome;
