import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";
import { surah } from "@/types/type";

const { width } = Dimensions.get("window");

type FeaturedProps = {
  featured: surah[];
};

const Featured: React.FC<FeaturedProps> = ({ featured }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <GestureHandlerRootView>
      <View className="w-full px-4">
        <Text className="text-lg font-AnekBanglaSemiBold text-gray-700 mt-5 mb-4">
          Featured
        </Text>
        <Carousel
          width={width * 0.9} 
          height={160}
          data={featured}
          loop={true}
          autoPlay={false}
          scrollAnimationDuration={800}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item: surah }) => (
            <TouchableOpacity 
                key={surah._id} onPress={() => {router.push(`/(root)/(tabs)/surah/${surah._id}`)}} 
                className="w-full bg-dark-green rounded-lg p-4 flex flex-col justify-center"
                style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 3,
                }}
            >
                <Text className="text-base text-white font-AnekBanglaBold mb-16 text-center">
                  সূরা {surah.name_bn}
                </Text>
                <Text className="text-sm text-gray-300 text-center">
                    সূরা নং {surah.no} | আয়াত সংখ্যা {surah.totalAyat}
                </Text>
            </TouchableOpacity>
          )}
        />
        {/* Pagination Dots */}
        {/* <View className="flex-row justify-center">
          {data.slice(0, 5).map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === activeIndex ? "bg-dark-green" : "bg-yellow-400"
              }`}
            />
          ))}
        </View> */}
      </View>
    </GestureHandlerRootView>
  );
};

export default Featured;
