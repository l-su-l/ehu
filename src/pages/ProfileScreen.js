import React from 'react';
import { View } from 'react-native';
import GeneradorImgIA from '../components/GeneradorImgIA';

const ProfileScreen = () => {

    return (
        <View className='px-1 py-1 bg-blue-600 h-[100%]'>
            <GeneradorImgIA/>
        </View>
    );
};

export default ProfileScreen;
