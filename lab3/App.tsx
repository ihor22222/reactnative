/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    Alert,
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as url from "url";

function HomeScreen({navigation}) {
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:50, fontWeight:400}}>Welcome home!</Text>

            <View style={{flex: 1, justifyContent: 'flex-end',width:400}}>
                <Text style={{textAlign: 'center', marginBottom: 10}}>Abou Us</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgb(206,206,208)',
                    height: 60,
                    flexDirection: "row",
                    justifyContent: 'space-around',
                    backgroundColor: 'rgb(231,234,236)'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Image
                            style={styles.homeLogo}
                            source={{
                                uri: 'https://img.icons8.com/wired/64/list--v1.png',
                            }}
                        />
                        <Text style={{color: 'black', textAlign: 'center'}}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={{
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Image
                            style={styles.userLogo}
                            source={{
                                uri: 'https://img.icons8.com/dotty/80/user.png',
                            }}
                        />
                        <Text style={{color: 'black', textAlign: 'center'}}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>


    );
}

function DetailsScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{
                    borderRadius: 50,
                    width: 200,
                    height: 200,
                    marginTop:30
                }}
                source={{ uri: 'https://avatars.githubusercontent.com/u/102901421?v=4' }}
            />
            <Text style={{fontSize:50, fontWeight:400}}>Ihor Dudnyk</Text>
            <View style={{flex: 1, justifyContent: 'flex-end',width:400}}>
                <Text style={{textAlign: 'center', marginBottom: 10}}>Webc-2211</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgb(206,206,208)',
                    height: 60,
                    flexDirection: "row",
                    justifyContent: 'space-around',
                    backgroundColor: 'rgb(231,234,236)'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Image
                            style={styles.homeLogo}
                            source={{
                                uri: 'https://img.icons8.com/wired/64/list--v1.png',
                            }}
                        />
                        <Text style={{color: 'black', textAlign: 'center'}}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={{
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Image
                            style={styles.userLogo}
                            source={{
                                uri: 'https://img.icons8.com/dotty/80/user.png',
                            }}
                        />
                        <Text style={{color: 'black', textAlign: 'center'}}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="Profile" component={DetailsScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="Main" component={StackNavigator} />
                <Drawer.Screen name="Test" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    header: {
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
    myResendMessages: {
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
        right: 55,
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
    homeLogo: {
        width: 25,
        height: 25,
    },
    userLogo: {
        width: 30,
        height: 30,
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
