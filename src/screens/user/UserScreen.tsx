import React, {useState} from 'react';
import {Center, Switch, useColorMode, useColorModeValue} from 'native-base';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/Ionicons';

const UserScreen = () => {
    const { toggleColorMode } = useColorMode()
    const [lightOn, setLightOn] = useState(true);

    const changeTheme = () => {
        toggleColorMode();
        setLightOn(!lightOn);;
    }

    return (
        <Container
            centered
        >
            <Center>
                <Icon 
                    name={ useColorModeValue('sunny-sharp', 'moon-sharp') }
                    color={ useColorModeValue('#FFE700', '#FFF') }
                    size={ 50 }
                />
                <Switch mt={ 5 } size='lg' onToggle={ changeTheme } isChecked={ lightOn }/>
            </Center>
        </Container>
    );
};

export default UserScreen;

