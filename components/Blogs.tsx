import { router } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { blogs } from "@/constants";
import CustomButton from "./CustomButton";

const Blogs = () => {
  return (
    <View className="w-full px-4">
        <Text className="text-lg font-AnekBanglaSemiBold text-gray-700 mt-5 mb-4">
            Blogs
        </Text>
        {blogs.map((blog) => (
            <TouchableOpacity 
                key={blog._id} onPress={() => {router.replace("/(root)/(tabs)/search")}} 
                className="py-3 px-5 bg-dark-green rounded-lg mb-3"
            >
                <View className="w-full">
                    <Text className="text-white font-AnekBanglaSemiBold">
                        {blog.title}
                    </Text>
                </View>
                <Text className="text-yellow-400 text-xs pt-2 font-AnekBanglaBold">এখন পড়ুন</Text>
            </TouchableOpacity>
        ))}
        <CustomButton
          title="আরো দেখুন"
          onPress={() => router.replace("/(root)/(tabs)/search")}
        />
    </View>
  );
};

export default Blogs;
