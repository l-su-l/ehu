import React from 'react';
import { Text, Image, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import im from '../img/dwad.png';

const GitHubAuthorize = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Carru');
    };

    function handlePass2() {
        navigation.navigate('ProfileScreen');
    };

    function handlePass3() {
        navigation.navigate('HandleOfModel');
    };

    const handleLogin = () => {
        Linking.openURL('https://github.com/login/oauth/authorize?client_id=Ov23lizKSrh4mPLxgdvT&scope=user');
    };

    return (
        <>

            <Image
                source={im}
                style={{
                    width: '35%',
                    height: 300,
                    aspectRatio: 1,
                    resizeMode: 'stretch',
                    position: 'absolute',
                    zIndex: 2
                }}
            />

            <LinearGradient
                colors={['#174152', '#2d3030', '#1b1c30']}
                style={{
                    position: 'relative',
                    top: '8%',
                    left: '22%',
                    borderWidth: 1,
                    borderColor: 'white',
                    width: '75%',
                    height: 200,
                    paddingVertical: 2,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    alignItems: 'center'
                }}
            >
                <Text style={{ color: 'white', fontSize: 24, marginBottom: 10 }}>Solicitud Acceso</Text>

                <TouchableOpacity
                    onPress={handleLogin}
                    style={{ backgroundColor: '#f59e0b', borderRadius: 8, paddingVertical: 2, paddingHorizontal: 5, marginBottom: 10, width: 110 }}
                >
                    <Text style={{ color: '#1f2937', fontSize: 12 }}>  Solicitar Acceso {"\n"}     With GitHub</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handlePress}
                    style={{ backgroundColor: '#0ea5e9', borderRadius: 8, paddingVertical: 2, paddingHorizontal: 5 }}
                >
                    <Text style={{ color: '#1f2937', fontSize: 12 }}>Almacen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handlePass2}
                    className='bg-amber-700 my-1 px-1 py-1 rounded-md'>
                    <Text className='text-white' style={{ fontSize: 12 }}>ImgAi</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handlePass3}
                    className='my-1 px-1 py-1'>
                    <Text className='text-white' style={{ 
                        fontSize: 12, 
                        backgroundColor: '#7b0a85',
                        paddingVertical: 2,
                        paddingHorizontal: 10,
                        borderRadius: 10
                        }}>HandleOfModel</Text>
                </TouchableOpacity>
            </LinearGradient>
        </>
    );
};

export default GitHubAuthorize;
