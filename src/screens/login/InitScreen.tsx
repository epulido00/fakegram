import React from 'react';
import {Button, Text, VStack, Center, useColorMode} from 'native-base';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/Container';
import {images} from '../../assets/images';

const InitScreen = () => {

    const navigation = useNavigation();
    const { colorMode } = useColorMode();
    
    return (
        <Container
            centered
        >
            <VStack
                style={{ width: 300 }}
                space={ 3 }
            >
                <Center
                    style={{ marginVertical: 10 }}
                >
                    <Image source={ (colorMode === 'dark' ? images._dark_logo : images._light_logo) } />
                </Center>
                <Button
                    onPress={ () => navigation.navigate('RegisterScreen') }
                >
                    <Text fontSize='lg' fontWeight='bold'>Registrarse</Text>
                </Button>
                <Button
                    variant='ghost'
                    onPress={ () => navigation.navigate('LoginScreen') }
                >
                    <Text fontSize='lg' fontWeight='bold'>Iniciar Sesión</Text>
                </Button>
            </VStack>
        </Container>
    );
};

export default InitScreen;

