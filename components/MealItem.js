import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";
import DefaultText from '../components/DefaultText';

const MealItem = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <TouchableComponent onPress={props.onSelectMeal}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <DefaultText style={styles.title} numberOfLines={1}>{props.title}</DefaultText>
              </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{props.duration}m</DefaultText>
          <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{props.affordability}</DefaultText>
        </View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10, // Add border radius
    marginVertical: 10,
  },
  bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end'
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      color: 'white',
      textAlign: 'center'
  }
});

export default MealItem;
