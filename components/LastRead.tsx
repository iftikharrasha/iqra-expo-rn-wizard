import { router } from "expo-router";
import { Text, View, Dimensions } from "react-native";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { surah } from "@/types/type";

//check: https://www.youtube.com/watch?v=qnI8m5Pk1ro
//https://github.com/chitraket/animation/tree/main/src/animation-toast

const { width } = Dimensions.get("window");

type LastReadProps = {
  featured: surah[];
};

const LastRead: React.FC<LastReadProps> = ({ featured }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <GestureHandlerRootView>
      <View className="w-full px-4">
        <Text className="text-lg font-AnekBanglaSemiBold text-gray-700 mt-5 mb-4">
          Last Read
        </Text>
        <Carousel
          width={width * 0.9} 
          height={160}
          data={featured.slice(0, 5)}
          loop={true}
          autoPlay={false}
          scrollAnimationDuration={800}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item: surah }) => (
            <View
              key={surah._id}
              className="w-full bg-dark-green rounded-lg p-4 flex flex-col justify-between"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 3,
              }}
            >
              <Text className="text-base text-white font-AnekBanglaBold mb-1">
                সূরা {surah.name_bn}
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
          )}
        />
        {/* Pagination Dots */}
        <View className="flex-row justify-center">
          {featured.slice(0, 5).map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === activeIndex ? "bg-dark-green" : "bg-yellow-400"
              }`}
            />
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default LastRead;
