import React from 'react';
import GitHubAuthorize from '../components/GitHubAuthorize';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {

    return (
        <LinearGradient
            colors={['#1b569e', '#3b5998', '#096a73']}
            className='h-[100%]'
        >
            <GitHubAuthorize/>
        </LinearGradient>
    );
};

export default HomeScreen;