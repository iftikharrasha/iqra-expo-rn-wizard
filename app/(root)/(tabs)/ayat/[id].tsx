import { router, useLocalSearchParams } from "expo-router";
import { Text, ActivityIndicator, ScrollView, ImageBackground, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import bg from "@/assets/images/pattern.png";
import { ayat, surah } from "@/types/type";
import axios from "axios";

const Ayat = () => {
    const { id } = useLocalSearchParams();
    const [surahData, setSurahData] = useState<surah | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAyats = !surahData ? [] : surahData.ayat.filter((ayat: ayat) =>
        ayat.bn.includes(searchQuery) || ayat.ar.includes(searchQuery)
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://iqra-backend-git-master-iftikharrashas-projects.vercel.app/api/iqra/expo/ayat/${id}`);
                setSurahData(response.data.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <SafeAreaView>
            <View>
                {/* <ImageBackground source={bg} resizeMode="repeat" className="min-h-screen flex justify-center bg-light-olive"> */}
                    <View className="w-full px-2 mt-24 mb-20">
                        {
                            !surahData ? 
                            <ActivityIndicator size="large" color="#00ff00"/> :
                            <View className="mb-6">
                                <View>
                                    <Text className="text-center text-3xl text-green-950 mb-2">
                                        سورة {surahData?.name_ar}
                                    </Text>
                                    <Text className="text-center text-lg font-AnekBanglaMedium text-green-950 mb-1">
                                        সূরা {surahData?.name_bn}
                                    </Text>
                                    <Text className="text-center text-sm text-gray-600">
                                        আয়াত সংখ্যা {surahData?.totalAyat}
                                    </Text>
                                </View>
                                <TextInput
                                    placeholder="এখানে লিখুন"
                                    placeholderTextColor="#7B7B8B"
                                    value={searchQuery}
                                    onChangeText={(text) => setSearchQuery(text)}
                                    className="w-full px-4 py-2 border rounded-md text-gray-700 my-4 bg-white"
                                />

                                <ScrollView className="mt-2 px-4 pt-6 text-white bg-pattern-aotd bg-dark-green rounded-3xl">
                                    <View className="text-center mb-8">
                                        <Text className="text-2xl font-AnekBanglaSemiBold text-yellow-400 mb-4 text-center">
                                            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                                        </Text>
                                        <Text className="text-sm text-gray-100 mb-4 text-center">
                                            পরম করুণাময় অসীম দয়ালু আল্লাহতায়ালার নামে
                                        </Text>
                                    </View>

                                    {filteredAyats.map((ayat: ayat, index: number) => (
                                    <View key={index}>
                                        <View className="mb-4">
                                            <View className="flex flex-row justify-between mb-4">
                                                <Text className="text-lg font-AnekBanglaSemiBold text-yellow-400 mb-2">
                                                    {ayat?.no}
                                                </Text>
                                                <View className="flex flex-row justify-between gap-2">
                                                    <TouchableOpacity onPress={() => {router.push(`/tafsir/${surahData?._id}/${ayat?._id}`)}} >
                                                        <Text className="text-lg font-AnekBangla">🌐</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Text className="text-lg font-AnekBangla">🔖</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Text className="text-lg font-AnekBangla">⚙️</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Text className="text-lg font-AnekBangla">🔽</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View className="border-b-2 border-yellow-400 pb-4">
                                                <Text className="text-2xl text-white mb-6 text-right">
                                                    {ayat?.ar}
                                                </Text>
                                                <Text className="text-sm text-white mb-2 font-AnekBangla">
                                                    {ayat?.bn}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    ))}
                                </ScrollView>
                            </View>
                        }
                    </View>
                {/* </ImageBackground> */}
            </View>
        </SafeAreaView>
    );
};

export default Ayat;