import React from 'react';
import { View, Text, Animated, Image, StyleSheet, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

const imagenes = [
    "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2425&q=80",
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
    "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
    "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
];

const Backdrop = ({ scrollX }) => (
    <View style={styles.backdrop}>
        {imagenes.map((imagen, index) => {
            const inputRange = [
                (index - 1) * ANCHO_CONTENEDOR,
                index * ANCHO_CONTENEDOR,
                (index + 1) * ANCHO_CONTENEDOR,
            ];

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
            });

            return (
                <Animated.Image
                    key={index}
                    source={{ uri: imagen }}
                    style={[styles.backdropImage, { opacity }]}
                />
            );
        })}
        <LinearGradient
            colors={['transparent', 'white']}
            style={styles.gradient}
        />
    </View>
);

const Carru = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX} />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                snapToAlignment="start"
                contentContainerStyle={styles.flatListContainer}
                snapToInterval={ANCHO_CONTENEDOR}
                decelerationRate="fast"
                scrollEventThrottle={16}
                data={imagenes}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];

                    const scrollY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, -50, 0],
                    });

                    return (
                        <View style={{ width: ANCHO_CONTENEDOR }}>
                            <Animated.View style={[styles.card, { transform: [{ translateY: scrollY }] }]}>
                                <Image source={{ uri: item }} style={styles.posterImage} />
                                <Text style={styles.title}>Título</Text>
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backdrop: {
        position: 'absolute',
        width,
        height: ALTURA_BACKDROP,
    },
    backdropImage: {
        width,
        height: ALTURA_BACKDROP,
        ...StyleSheet.absoluteFillObject,
    },
    gradient: {
        width,
        height: ALTURA_BACKDROP,
        position: 'absolute',
        bottom: 0,
    },
    flatListContainer: {
        paddingTop: 200,
        paddingHorizontal: ESPACIO_CONTENEDOR,
    },
    card: {
        marginHorizontal: ESPACIO,
        padding: ESPACIO,
        borderRadius: 34,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    posterImage: {
        width: '100%',
        height: ANCHO_CONTENEDOR * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
    },
});

export default Carru;
