// import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  // Image,
  Platform,
  ScrollView,
  StyleSheet,
  // Text,
  // TouchableOpacity,
  KeyboardAvoidingView,
  View
} from "react-native";
import { Header, Item, Input, Icon, Button, Text } from "native-base";

import CategoryCard from "../components/CategoryCard";
import { MonoText } from "../components/StyledText";
import i18n from "../translations";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Input
          placeholder={i18n.t("Search")}
          style={{
            borderStyle: "solid",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 3,
            marginHorizontal: 10
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <CategoryCard
            icon={Platform.OS === "ios" ? "ios-flower" : "md-flower"}
            value={i18n.t("HomeScreen/CategoryCard/Flower")}
          />
          <CategoryCard
            icon={Platform.OS === "ios" ? "ios-pricetag" : "md-pricetag"}
            value={i18n.t("HomeScreen/CategoryCard/Price")}
          />
          <CategoryCard
            icon="new"
            type="Entypo"
            value={i18n.t("HomeScreen/CategoryCard/New")}
          />
          <CategoryCard
            icon="food-apple"
            type="MaterialCommunityIcons"
            value={i18n.t("HomeScreen/CategoryCard/Fruit")}
          />
          <CategoryCard
            icon="heart-multiple"
            type="MaterialCommunityIcons"
            value={i18n.t("HomeScreen/CategoryCard/Combo")}
          />
          <CategoryCard
            icon="account-multiple"
            type="MaterialCommunityIcons"
            value={i18n.t("HomeScreen/CategoryCard/Share")}
          />
          <CategoryCard
            icon="cookie"
            type="FontAwesome5"
            value={i18n.t("HomeScreen/CategoryCard/DryFruit")}
          />
          <CategoryCard
            icon={Platform.OS === "ios" ? "ios-gift" : "md-gift"}
            value={i18n.t("HomeScreen/CategoryCard/Gift")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
