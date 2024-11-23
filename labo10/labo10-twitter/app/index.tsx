import { Text, View } from "react-native";
import Tweets from "./api";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Tweets></Tweets>
    </View>
  );
}

export default Index;