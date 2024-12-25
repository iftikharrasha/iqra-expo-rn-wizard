import { ayat } from "@/types/type";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type RandomProps = {
    random: ayat & {
        surahNo: number;
        surahName_bn: string;
    };
};


const RandomAyat: React.FC<RandomProps> = ({ random }) => {
    return (
        <View className="bg-dark-green rounded-b-3xl p-6 text-white pt-32">
            <Text className="text-2xl font-AnekBanglaSemiBold mb-8 text-right text-white">{random.ar}</Text>
            <Text className="text-md font-AnekBanglaSemiBold mb-1 text-left text-white">{random.bn}</Text>
            <View className="flex flex-row justify-between">
                <Text className="text-sm text-gray-300 text-left font-AnekBangla">- {random.surahName_bn} {random.surahNo}/{random.no}</Text>
                <TouchableOpacity onPress={() => {router.replace("/(root)/(tabs)/search")}}>
                    <Text className="text-black text-md font-AnekBanglaBold">👉</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RandomAyat;