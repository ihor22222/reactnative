import React from 'react';
import type {PropsWithChildren} from 'react';
import { Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{    title: string;
}>;
function App(): JSX.Element { const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, onChangeText] = React.useState('');

  return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
          {/*<Header />*/}
          <View
              style={{
                backgroundColor: 'rgb(255,255,255)',
              }}>

            <View style={styles.header}>
              <Text style={styles.headerNavigation}>‹ Chat</Text>
              <Text style={styles.headerTitle}>Telegram White</Text>
              <Image
                  style={styles.settingLogo}
                  source={{
                    uri: 'https://img.icons8.com/ios-glyphs/30/000000/settings--v1.png',
                  }}
              />
            </View>
            <View style={styles.chat}>
              <View style={styles.messagesSection}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Avi_Arad%2C_June_2012.jpg',
                    }}
                />
                <View style={styles.message}>
                  <Text style={styles.messageText}>Привіт! Як у вас справи?</Text>
                  <View style={styles.nosik}/>
                </View>
              </View>

              <View style={styles.messagesSection}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://i.pinimg.com/736x/20/73/46/2073469eaf0bdd1c2c26915981311497.jpg',
                    }}
                />
                <View style={styles.message}>
                  <Text style={styles.messageText}>Привіт! Все чудово, дякую. А у вас?😎</Text>
                  <View style={styles.nosik}/>
                </View>
              </View>

              <View style={styles.myMessagesSection}>
                <View style={styles.myMessage}>
                  <Text style={styles.myMessageText}> Як ваш день?</Text>
                  <View style={styles.myNosik}/>
                </View>
                <Image
                    style={styles.myTinyLogo}
                    source={{
                      uri: 'https://i.pinimg.com/736x/13/42/46/1342461150610241546e035329b425da.jpg',
                    }}
                />
              </View>

              <View style={{marginTop: 35, height: 10, width: 10}}></View>
              <View style={styles.myMessagesSection}>
                <View style={styles.myResendMessages}>
                  <Text style={{fontSize:12}}>↳ Ви відповіли Андрію</Text>
                  <Text>Привіт! Як у вас справи?</Text>
                </View>
                <View style={styles.myMessage}>
                  <Text style={styles.myMessageText}>Все добре, дякую. 👌</Text>
                  <View style={styles.myNosik}/>
                </View>
                <Image
                    style={styles.myTinyLogo}
                    source={{
                      uri: 'https://i.pinimg.com/736x/13/42/46/1342461150610241546e035329b425da.jpg',
                    }}
                />
              </View>

              <View style={styles.messagesSection}>
              </View>

              <View style={{marginTop: 30, height: 10, width: 10}}></View>
              <View style={styles.messagesSection}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Avi_Arad%2C_June_2012.jpg',
                    }}
                />
                <View style={styles.resendMessages}>
                  <Text style={{fontSize:12}}>↳ Андрій відповів Ігорю</Text>
                  <Text>Як ваш день?</Text>
                </View>

                <View style={styles.message}>
                  <Text style={styles.messageText}>Добре 👌</Text>
                  <View style={styles.nosik}/>
                </View>
              </View>


              <View style={{marginTop: 145, height: 10, width: 10}}></View>



            </View>

            <View style={styles.inputSection}>

              <Image
                  style={styles.cameraLogo}
                  source={{
                    uri: 'https://img.icons8.com/ios-filled/50/camera--v3.png',
                  }}
              />
              <Image
                  style={styles.micropfoneLogo}
                  source={{
                    uri: 'https://img.icons8.com/material-sharp/24/microphone--v1.png',
                  }}
              />
              <TextInput
                  style={styles.input}
                  placeholder="         Start typing.."
                  onChangeText={onChangeText}
                  value={text}
              />
              <Image
                  style={styles.sendLogo}
                  source={{
                    uri: 'https://img.icons8.com/android/24/000000/paper-plane.png',
                  }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({ header: {
    height: 60,
    borderBlockEndColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  chat: {
    height: "auto",
    borderBlockEndColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  headerNavigation: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: 'rgb(2,2,2)',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'rgb(2,2,2)',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  myResendMessages:{
    backgroundColor: 'rgb(238,238,248)',
    height: "auto",
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 400,
    position: "absolute",
    right:55,
    top: -50,
  },
  resendMessages: {
    backgroundColor: 'rgb(238,238,248)',
    height: "auto",
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 400,
    position: "absolute",
    left: 55,
    top: -50,
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  settingLogo: {
    width: 40,
    height: 40,
    justifyContent: "flex-end",
  },
  messageText: {
    position: "relative",
    zIndex: 10,
    color: 'rgb(0,0,0)',
  },
  myMessageText: {
    position: "relative",
    zIndex: 10,
    color: 'rgb(255,255,255)',
  },
  messagesSection: {
    marginLeft: 10,
    flexDirection: "row",
    marginTop: 20,
    alignContent: "center",
    flex: 1,

    zIndex: 5,
  },
  message: {

    backgroundColor: 'rgb(224, 224, 224)',
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 400,
  },
  nosik: {
    position: 'absolute',
    left: 5,
    top: '120%',
    backgroundColor: 'rgb(224, 224, 224)',
    width: 15,
    height: 15,
    transform: [
      {translateX: -10},
      {translateY: -10},
      {rotate: '45deg'},
    ],
  },
  myMessagesSection: {
    marginRight: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 20,
    alignContent: "center",
    flex: 1,
  },
  myTinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  myMessage: {
    backgroundColor: 'rgb(55, 116, 232)',
    textAlign: "center",
    alignContent: "center",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 400,
  },
  myNosik: {
    position: 'absolute',
    right: -15,
    top: '120%',
    backgroundColor: 'rgb(55, 116, 232)',
    width: 15,
    height: 15,
    transform: [
      {translateX: -10},
      {translateY: -10},
      {rotate: '45deg'},
    ],
  },
  inputSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: 'rgb(224, 224, 224)',
  },
  sendLogo: {
    width: 25,
    height: 25,
    position: "relative",
    right: 10,
  },
  cameraLogo: {
    width: 25,
    height: 25,
    position: "relative",
    left: 10
  },
  micropfoneLogo: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 50,
    zIndex: 10,
  },

});

export default App;
