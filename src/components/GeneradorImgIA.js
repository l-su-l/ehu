import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import loaderinfinity from '../img/_cacheJs/_error/loadaerinfinity.gif';
import { Card } from 'react-native-paper';
import Grid from 'react-native-grid-component';

const data = [
    { id: '1', source: loaderinfinity },
    { id: '2', source: loaderinfinity },
    { id: '3', source: loaderinfinity },
    { id: '4', source: loaderinfinity },
];

const renderItem = ({ item }) => (
    <View className='bg-sky-600 ml-7 mb-2 rounded-md'>
        <Image source={item.source} style={{ 
            width: 120, 
            height: 100,
            resizeMode: 'stretch'
            }}/>
    </View>
);

function GeneradorImgIA() {
    const [saveImg, setsaveImg] = useState('');
    const [promt, setPromt] = useState('');

    async function hola() {
        try {
            const data = {
                mandando: promt,
            };

            const res_gen_ia = await axios.post('http://127.0.0.1:8000/imgGenerateAi', data);
            setsaveImg(res_gen_ia.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView className='border px-1 py-1 border-red-900'>
            <Text className='relative left-[5%] bottom-1 text-white' style={{ fontSize: 24, marginTop: 15 }}>Generador de imágenes IA</Text>

            {saveImg === '' ? (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    className='bg-green-900 py-1 px-1 rounded-md'
                />
            ) : (
                <View>
                    {saveImg['resultado'].map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                        />
                    ))}
                </View>
            )}

            <View>
                <TextInput
                    placeholder="Promt"
                    onChangeText={(text) => setPromt(text)}
                    className='border rounded-md px-1 py-1 bg-white my-1'
                />
                <Button
                    title="Run"
                    color="#4CAF50"
                    onPress={hola}
                />
            </View>
        </SafeAreaView>
    );
}

export default GeneradorImgIA;