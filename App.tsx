/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { ChatClient, ChatOptions, ChatMessageChatType, ChatMessage } from 'react-native-chat-sdk';


function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';



  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let options = new ChatOptions({ appKey: '611042841#1218438' });
        ChatClient.getInstance().init(options);
        await ChatClient.getInstance().login("Shivam12", "12345678", true);
        // let msg = ChatMessage.createTextMessage('Shivam', "hello world", ChatMessageChatType.PeerChat);
        // await ChatClient.getInstance().chatManager.sendMessage(msg, null);
        // await ChatClient.getInstance().logout();
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMyAPI();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1
          }}>
          <Text>Hi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
});

export default App;
