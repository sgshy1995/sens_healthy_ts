import React from 'react';
import { Linking, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header as HeaderRNE } from "@rneui/themed";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

type HeaderComponentProps = {
  title: string;
  view?: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  heading: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
});

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {

  const isDarkMode = useColorScheme() === 'dark';

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
      leftComponent={{ text: 'Left', style: styles.heading }}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={docsNavigate}>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={playgroundNavigate}
          >
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: 'Header', style: styles.heading }}
    />
  );
};

export default Header;
