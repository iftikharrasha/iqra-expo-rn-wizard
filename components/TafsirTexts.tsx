import { FlatList, Text } from "react-native";

const TafsirTexts = ({ tafsir }: { tafsir: string[] }) => {
    return (
        <FlatList
            data={tafsir}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Text className="text-sm text-white mb-2 font-AnekBangla">
                    {item}
                </Text>
            )}
        />
    );
};

export default TafsirTexts;