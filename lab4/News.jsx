import React, {useState, useEffect} from 'react';
import {View, Button, Text, ScrollView, Image, StyleSheet, FlatList, Alert, TextInput} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {setString} from "../store/action/stringActions";


function News({navigation}) {
    const newsFromStore = useSelector(state => state.news.articles);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('');
    const [flag, setFlag] = useState(true);
    const dispatch = useDispatch();
    const savedString = useSelector(state => state.string.savedString);
    const renderItem = ({ item, index }) => (
        <View key={index} style={styles.post}>
            {item.urlToImage && (
                <Image
                    source={{uri: item.urlToImage}}
                    style={styles.image}
                />
            )}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title || 'No title'}</Text>
                <Text style={styles.date}>{item.publishedAt || 'No date'}</Text>
                <Text style={styles.description}>
                    {item.description && item.description.length > 100
                        ? item.description.substring(0, 100) + '...'
                        : item.description || 'No description'}
                </Text>
            </View>
        </View>
    );

    useEffect(() => {
        if (newsFromStore && flag == true) {
            setNews(newsFromStore);
            setLoading(false);
            setFlag(false);
            //Alert.alert('Fetching news with query:', savedString);
        } else {
            fetch(`https://newsapi.org/v2/everything?q=${savedString}&from=2023-12-13&sortBy=popularity&apiKey=2b0596db872146079cc7b451155e11a5`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setNews(data.articles);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Get news error!!!!!!!', error);
                    setLoading(false);
                });
        }

    }, [savedString]);

    if (loading) {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <Text>Loading...</Text>
        </View>
    }

    return (
        <View>
            <View style={{
                padding: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: 'rgb(224, 224, 224)',
                borderBottomWidth:1,
            }}>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        width: 350,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 50,
                        borderColor: 'rgb(224, 224, 224)',
                        backgroundColor: 'rgb(255,255,255)',
                    }}
                    placeholder="Enter the news topic here"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <Button title="Change the topic" onPress={() => dispatch(setString(text))}/>
            </View>
            <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    post: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(224, 224, 224)',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        color: 'grey',
        marginBottom: 5,
    },
    description: {
        color: 'black',
    },
})
export default News;