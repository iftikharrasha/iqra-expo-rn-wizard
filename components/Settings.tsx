import { router } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

const Settings = () => {
  return (
    <View className="w-full px-4">
        <View
            className="flex flex-row flex-wrap mt-4  justify-between items-center"
        >
            <TouchableOpacity
                onPress={() => {
                    router.replace("/(root)/(tabs)/search");
                }}
                className={`rounded-lg p-4 justify-between items-center w-[30%] h-[130px] border bg-primary-200`}
            >
                <Text className={`text-sm font-AnekBanglaBold text-center text-yellow-700`}>
                    Surah
                </Text>
                <Text className="text-gray-500 text-xs pt-2 font-AnekBangla text-center">
                    Saved Items
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    router.replace("/(root)/(tabs)/search");
                }}
                className={`rounded-lg p-4 justify-between items-center w-[30%] h-[130px] border bg-secondary-200`}
            >
                <Text className={`text-sm font-AnekBanglaBold text-center text-red-700`}>
                    Ayat
                </Text>
                <Text className="text-gray-500 text-xs pt-2 font-AnekBangla text-center">
                    Saved Items
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    router.replace("/(root)/(tabs)/search");
                }}
                className={`rounded-lg p-4 justify-between items-center w-[30%] h-[130px] border bg-general-100`}
            >
                <Text className={`text-sm font-AnekBanglaBold text-center text-pink-700`}>
                    Tafsir
                </Text>
                <Text className="text-gray-500 text-xs pt-2 font-AnekBangla text-center">
                    Saved Items
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Settings;
