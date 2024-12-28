import { router, useLocalSearchParams } from "expo-router";
import {
  Text,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import bg from "@/assets/images/pattern.png";
import CustomButton from "@/components/CustomButton";
import { ayat, surah } from "@/types/type";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import TafsirTexts from "@/components/TafsirTexts";
import { FlashList } from "@shopify/flash-list";

const Tafsir = () => {
  const { id, aid } = useLocalSearchParams();
  const [surahData, setSurahData] = useState<surah | null>(null);
  const [ayatData, setAyatData] = useState<ayat | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://iqra-backend-git-master-iftikharrashas-projects.vercel.app/api/iqra/expo/tafsir/${id}/${aid}`
        );
        setSurahData(response.data.data);
        setAyatData(response.data.data.ayat[0]);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id, aid]);

  return (
    <SafeAreaView>
      {!surahData ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
         <FlatList nestedScrollEnabled={true} data={[1]} renderItem={ ()=> (
          <View className="w-full px-2 mt-24 mb-20">
            <View>
              <Text className="text-center text-3xl text-green-950 mb-2">
                سورة {surahData?.name_ar}
              </Text>
              <Text className="text-center text-lg font-AnekBanglaMedium text-green-950 mb-1">
                সূরা {surahData?.name_bn}
              </Text>
              <Text className="text-center text-sm text-gray-600">
                তাফসীর ইবনে কাসীর
              </Text>
            </View>

            <View className="mt-6 px-4 pt-6 text-white bg-pattern-aotd bg-dark-green rounded-3xl">
              <View className="mb-4">
                <View className="flex flex-row justify-between mb-4">
                  <Text className="text-lg font-AnekBanglaSemiBold text-yellow-400 mb-2">
                    {ayatData?.no}
                  </Text>
                  <View className="flex flex-row justify-between gap-2">
                    <TouchableOpacity>
                      <Text className="text-lg font-AnekBangla">🔖</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text className="text-lg font-AnekBangla">⚙️</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="border-b-2 border-yellow-400 pb-4">
                  <Text className="text-2xl text-white mb-6 text-right">
                    {ayatData?.ar}
                  </Text>
                  <Text className="text-sm text-white mb-2 font-AnekBangla">
                    {ayatData?.bn}
                  </Text>
                  <Text className="mt-6">
                    <Text className="text-sm font-AnekBanglaSemiBold text-yellow-400">
                      তাফসির:{" "}
                    </Text>
                    {/* {ayatData?.tafsir.map((item: string, index: number) => (
                                              <Text key={index} className="text-sm text-white mb-2 font-AnekBangla">তাফসির:  {item}</Text> 
                                          ))} */}
                  </Text>
                  <TafsirTexts tafsir={ayatData?.tafsir || []} />
                  <View className="flex flex-row justify-between mt-4">
                    <CustomButton
                      title="পূর্ববর্তী"
                      onPress={() => {
                        router.push(
                          `/tafsir/${surahData?._id}/${ayatData?._id}`
                        );
                      }}
                      className="bg-yellow-500 text-dark-green px-6 py-3 rounded-lg font-AnekBanglaSemiBold text-sm"
                    />
                    <CustomButton
                      title="পরবর্তী"
                      onPress={() => {
                        router.push(
                          `/tafsir/${surahData?._id}/${ayatData?._id}`
                        );
                      }}
                      className="bg-yellow-500 text-dark-green px-6 py-3 rounded-lg font-AnekBanglaSemiBold text-sm"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )} />
      )}
    </SafeAreaView>
  );
};

export default Tafsir;
