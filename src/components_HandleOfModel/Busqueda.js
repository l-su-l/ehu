import { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';


function Busqueda() {

    const [promt, setPromt] = useState('');

    return (
        <View className='flex flex-row border items-center px-2'>

            <Feather name="search" style={{
                fontSize: 24,
                marginTop: 0,
                backgroundColor: '#17685c',
                borderRadius: 5,
                paddingHorizontal: 2,
                paddingVertical: 2
            }}
            />
            <TextInput
                placeholder="Search"
                onChangeText={(text) => setPromt(text)}
                className='border rounded-md px-1 py-1 ml-1 my-1 bg-white w-[80%]'
            />

        </View>
    );
};

export default Busqueda;