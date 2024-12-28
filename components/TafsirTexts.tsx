import { Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback } from "react";

const TafsirTexts = React.memo(({ tafsir }: { tafsir: string[] }) => {
  const renderItem=useCallback(({item}: { item: string })=>{
    return(
      <Text className="text-sm text-white mb-2 font-AnekBangla">{item}</Text>
    )
  },[])

  const splitTextByBangla = (text: string, wordLimit: number) => {
      const sentences = text.split('।'); // Split by Bangla punctuation
      const chunks = [];
      let currentChunk = '';
      let wordCount = 0;
  
      for (const sentence of sentences) {
          const wordsInSentence = sentence.trim().split(/\s+/).length;
  
          if (wordCount + wordsInSentence > wordLimit) {
              // Push the current chunk to the result if adding this sentence exceeds the limit
              chunks.push(currentChunk.trim() + '।'); // Add the punctuation back
              currentChunk = sentence.trim();
              wordCount = wordsInSentence;
          } else {
              // Otherwise, add the sentence to the current chunk
              currentChunk += (currentChunk ? ' ' : '') + sentence.trim();
              wordCount += wordsInSentence;
          }
      }
  
      // Push the remaining chunk if any
      if (currentChunk) {
          chunks.push(currentChunk.trim() + '।');
      }
  
      return chunks;
  };

  const processedTafsir = tafsir.map((item) => splitTextByBangla(item, 50)).flat();
  return (
    <FlashList
      data={processedTafsir}
      estimatedItemSize={150}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      nestedScrollEnabled={true}
      scrollEnabled={true}
    />
  );
});

export default TafsirTexts;
