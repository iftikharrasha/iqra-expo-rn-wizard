import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Image, Text, View, ImageBackground, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "@/assets/images/icon.png";
import bg from "@/assets/images/pattern.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/utils/store/store";
import { useEffect } from "react";
import { fetchHomeData } from "@/utils/store/slices/homeSlice";

const Splash = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading } = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch])

    return (
        <SafeAreaView className="min-h-screen flex justify-center bg-light-olive">
            {/* <ImageBackground source={bg} resizeMode="repeat" className="min-h-screen flex justify-center bg-light-olive"> */}
                <View className="flex h-4/6 items-center justify-between p-5">
                    <Image
                        source={logo}
                        className="h-[200px]"
                        resizeMode="contain"
                    />
                    {
                        loading ?
                        <ActivityIndicator size="large" color="#00ff00"/> :
                        <View className="flex items-center justify-between">
                            <Text className="text-black text-lg font-AnekBanglaSemiBold text-center">
                                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                            </Text>
                            <Text className="text-sm font-AnekBangla text-center text-gray-500 mt-3">
                                পরম করুণাময় অসীম দয়ালু আল্লাহতায়ালার নামে
                            </Text>
                            <CustomButton
                                title="শুরু করছি"
                                onPress={() => router.replace("/(root)/(tabs)/home")}
                                className="mt-8"
                            />
                        </View>
                    }
                </View>
            {/* </ImageBackground> */}
        </SafeAreaView>
    );
};

export default Splash;