import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useRouter } from "expo-router";

//home

const Index = () => {
          const router = useRouter();
          return (
                    <>
                              <StatusBar
                                        barStyle="dark-content" 
                                        backgroundColor="#ffffff"
                                        translucent={false} 
                              />
                              <SafeAreaView style={styles.safeArea}>
                                        <TouchableOpacity style={styles.container} onPress={() => router.push('/history')}>
                                                  <Text>Index</Text>
                                        </TouchableOpacity>
                                        <View >

                                        </View>
                              </SafeAreaView>
                    </>
          );
};

export default Index;

const styles = StyleSheet.create({
          safeArea: {
                    flex: 1,
                    backgroundColor: "#ffffff", // Set a light background color
          },
          container: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "blue"
          },
});
