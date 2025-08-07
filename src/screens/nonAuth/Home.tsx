import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SolidView from "../components/SolidView";
import AppUtils from "../../utils/appUtils";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/Reducers/userData";

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.parent}>
      <Text style={styles.titleText} onPress={() => dispatch(setAuth(false))}>Click Me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  },
  titleText: {
    fontSize: 37,
    alignSelf: "center",
    textAlign: "center",
    marginTop:20
  },
});

export default Home;
