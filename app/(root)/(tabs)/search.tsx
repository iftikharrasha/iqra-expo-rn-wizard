import { ActivityIndicator, ImageBackground, ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import bg from "@/assets/images/pattern.png";
import { useEffect, useState } from "react";
import { surah } from "@/types/type";
import axios from "axios";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [surahData, setSurahData] = useState<surah[] | null>(null);

    const filteredSurahs = !surahData ? [] : surahData.filter((surah: surah) =>
      surah.name_bn.includes(searchQuery) || surah.name_en.includes(searchQuery) || surah.name_en.toUpperCase().includes(searchQuery) || surah.name_en.toLowerCase().includes(searchQuery) || surah.name_ar.includes(searchQuery)
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://iqra-backend-git-master-iftikharrashas-projects.vercel.app/api/iqra/expo/surahs`);
                setSurahData(response.data.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <SafeAreaView>
            <ScrollView>
                {/* <ImageBackground source={bg} resizeMode="repeat" className="min-h-screen flex justify-center bg-light-olive"> */}
                    {
                        !surahData ? 
                        <ActivityIndicator size="large" color="#00ff00"/> :
                        <View className="w-full px-2">
                            <Text className="text-center text-xl font-AnekBanglaSemiBold mt-24">সূরা তালিকা</Text>
                            <TextInput
                                placeholder="এখানে লিখুন"
                                placeholderTextColor="#7B7B8B"
                                value={searchQuery}
                                onChangeText={(text) => setSearchQuery(text)}
                                className="w-full px-4 py-2 border rounded-md text-gray-700 my-4 bg-white"
                            />
                            {filteredSurahs.map((surah) => (
                                <View
                                    key={surah._id}
                                    className="w-full bg-dark-green rounded-lg p-4 flex flex-col justify-between mb-4"
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 4 },
                                        shadowOpacity: 0.1,
                                        shadowRadius: 8,
                                        elevation: 3,
                                    }}
                                >
                                    <Text className="text-base text-white font-AnekBanglaBold mb-1">
                                        {surah.name_bn}
                                    </Text>
                                    <Text className="text-sm text-gray-300 mb-4">
                                        আয়াত সংখ্যা {surah.totalAyat}
                                    </Text>
                                    <View className="flex flex-row items-center justify-between">
                                        <CustomButton
                                        title="এখন পড়ুন"
                                        onPress={() => router.push(`/(root)/(tabs)/surah/${surah._id}`)}
                                        />
                                        <View className="flex items-center justify-center border border-gray-50 px-3 py-1 rounded-md">
                                        <Text className="text-md text-white font-AnekBanglaSemiBold">
                                            {surah.no}
                                        </Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    }
                {/* </ImageBackground> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;