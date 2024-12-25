import { router } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

const Mood = () => {
  return (
    <View className="w-full px-4 pb-8">
        <Text className="text-lg font-AnekBanglaSemiBold text-gray-700 mt-5 mb-4">
            Moods
        </Text>
        <View
            className="flex flex-row flex-wrap justify-between items-center mb-16"
        >
                <TouchableOpacity
                    onPress={() => {
                        router.replace("/(root)/(tabs)/search");
                    }}
                    className={`rounded-lg p-4 justify-between items-center w-[30%] h-48 border bg-primary-200`}
                >
                    <Text className="text-xl font-AnekBanglaBold text-center">
                        🌞
                    </Text>
                    <Text className="text-black text-md pt-2 font-AnekBanglaSemiBold text-center">
                        Surah
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        router.replace("/(root)/(tabs)/search");
                    }}
                    className={`rounded-lg p-4 justify-between items-center w-[30%] h-48 border bg-secondary-200`}
                >
                    <Text className="text-xl font-AnekBanglaBold text-center">
                        🌙
                    </Text>
                    <Text className="text-black text-md pt-2 font-AnekBanglaSemiBold text-center">
                        Sadness
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        router.replace("/(root)/(tabs)/search");
                    }}
                    className={`rounded-lg p-4 justify-between items-center w-[30%] h-48 border bg-general-100`}
                >
                    <Text className="text-xl font-AnekBanglaBold text-center">
                        🔥
                    </Text>
                    <Text className="text-black text-md pt-2 font-AnekBanglaSemiBold text-center">
                        Anger
                    </Text>
                </TouchableOpacity>
        </View>
    </View>
  );
};

export default Mood;
