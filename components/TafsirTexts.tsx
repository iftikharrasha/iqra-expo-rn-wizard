import { Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
const TafsirTexts = ({ tafsir }: { tafsir: string[] }) => {
  return (
    <FlashList
      data={tafsir}
      estimatedItemSize={120}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Text className="text-sm text-white mb-2 font-AnekBangla">{item}</Text>
      )}
    />
  );
};

export default TafsirTexts;
