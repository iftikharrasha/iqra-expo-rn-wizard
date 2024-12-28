import { Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useCallback } from "react";
const TafsirTexts = ({ tafsir }: { tafsir: string[] }) => {
  const renderItem=useCallback(({item})=>{
    return(
      <Text className="text-sm text-white mb-2 font-AnekBangla">{item}</Text>
    )
  },[])
  return (
    <FlashList
      data={tafsir}
      estimatedItemSize={150}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default TafsirTexts;
