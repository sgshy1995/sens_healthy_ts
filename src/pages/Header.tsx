import React from "react";
import { Linking, StyleSheet, useColorScheme, View, Image, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header as HeaderRNE, Tab, TabView } from "@rneui/themed";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

type HeaderComponentProps = {
  title: string;
  view?: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const HeaderCenter = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <Tab
      containerStyle={styles.tabContainer}
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={styles.tabIndicator}
      variant="primary"
    >
      <Tab.Item
        title="伤痛问答"
        titleStyle={active => active ? { fontSize: 15, color: "#333", fontWeight: "bold" } : {
          fontSize: 15,
          color: "#706f6f",
          fontWeight: "bold",
        }}
        containerStyle={{ backgroundColor: "#fff" }}
        buttonStyle={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingTop: 0,
          height: 36,
          backgroundColor: "#fff",
        }}
      />
      <Tab.Item
        title="康复资讯"
        titleStyle={active => active ? { fontSize: 15, color: "#333", fontWeight: "bold" } : {
          fontSize: 15,
          color: "#706f6f",
          fontWeight: "bold",
        }}
        containerStyle={{ backgroundColor: "#fff" }}
        buttonStyle={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingTop: 0,
          height: 36,
          backgroundColor: "#fff",
        }}
      />
    </Tab>
  );
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {

  const isDarkMode = useColorScheme() === "dark";

  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };

  const playgroundNavigate = () => {
    Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
  };

  return (
    <HeaderRNE
      containerStyle={styles.headerContainer}
      backgroundColor={isDarkMode ? Colors.darker : Colors.white}
      leftComponent={<TouchableOpacity
        containerStyle={{ height: 42, display: "flex", justifyContent: "center", alignItems: "center" }}><Ionicons
        name="camera-outline" size={24} color="#333" /></TouchableOpacity>}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 16, height: 16, marginBottom: 2 }}
                   source={require("../assets/images/home/message.png")}></Image>
            <Text style={{ fontSize: 11 }}>消息</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Image style={{ width: 16, height: 16, marginBottom: 2 }}
                   source={require("../assets/images/home/issue.png")}></Image>
            <Text style={{ fontSize: 11 }}>发布</Text>
          </TouchableOpacity>
        </View>
      }
      centerComponent={<HeaderCenter />}
    />
  );
};

export default Header;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  heading: {
    color: "#333",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  tabContainer: {
    height: 42,
    width: 184,
  },
  tabIndicator: {
    backgroundColor: "#4F68B0",
    color: "#4F68B0",
    width: "14%",
    left: "18%",
    height: 4,
    bottom: 6,
    borderRadius: 4,
  },
});
