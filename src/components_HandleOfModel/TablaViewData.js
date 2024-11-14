import { View, Text, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loaderJeje from '../img/_cacheJs/descarga.png';

function TablaViewData() {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function mSettings() {
        setMSetting(true);
    }

    function quieroUpdate(eo) {
        setWea(eo);
        setMostrarFormulario(true);
    }

    async function subiendo(event) {
        event.preventDefault();

        const data = {
            id: wea,
            nombre_del_producto: pilloNewName,
            precio: pilloNewPrecio,
        };

        setRevision(true);

        setTimeout(async () => {
            await axios.put('http://127.0.0.1:8000/api/ReturnProduct/', data);
            setRevision(false);
        }, 5000);
    }

    function cerw() {
        setMostrarFormulario(false);
    }



    useEffect(() => {

        async function ProductDefault() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
                setPokemonData(response.data.results);
            } catch (error) {
                setError(err);
            }
        }

        ProductDefault();

    }, []);

    const renderItem = ({ item }) => (
        <View style={{ backgroundColor: 'skyblue', margin: 10, borderRadius: 10, padding: 10 }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={pokemonData}
                keyExtractor={(item) => item.url}
                renderItem={renderItem}
                numColumns={2}

            />
        </SafeAreaView>
    );
};

export default TablaViewData;