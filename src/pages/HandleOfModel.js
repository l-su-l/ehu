import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Busqueda from '../components_HandleOfModel/Busqueda';
import TablaViewData from '../components_HandleOfModel/TablaViewData';


const HandleOfModel = () => {

    return (
        <LinearGradient
            colors={['#1b569e', '#3b5998', '#096a73']}
            className='h-[100%]'
        >
            <Busqueda/>
            <TablaViewData/>
        </LinearGradient>
    );
};

export default HandleOfModel;