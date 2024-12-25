import { router, Stack } from "expo-router";
import { View, Image, TouchableOpacity } from "react-native";
import { images } from "@/constants";

const GlobalHeader = () => {
  return (
    <View className="absolute z-10 top-0 left-0 flex flex-row items-center justify-between w-full h-24 py-4 px-6 bg-transparent">
      <TouchableOpacity onPress={() => router.push("/home")} >
        <Image source={images.logo} className="w-16" resizeMode="contain" />
      </TouchableOpacity>
      <View className="flex flex-row items-center space-x-4">
        <Image source={images.avatar} className="w-8" resizeMode="contain" />
        <TouchableOpacity onPress={() => console.log("Menu Pressed")}>
          <Image source={images.ham} className="w-8" resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <GlobalHeader />

      <View style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </View>
    </View>
  );
};

export default Layout;
