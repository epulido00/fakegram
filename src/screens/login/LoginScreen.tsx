import React from 'react';
import {Box, Button, Center, Input, Stack, Text, useColorMode} from 'native-base';
import Container from '../../components/Container';
import {Image} from 'react-native';
import {images} from '../../assets/images';

const LoginScreen = () => {

    const { colorMode } = useColorMode();

    return (
        <Container
            centered
        >
            <Box style={{ width: 300 }}>
                <Stack
                    space={ 3 }
                >
                    <Center>
                        <Image source={ (colorMode === 'dark' ? images._dark_logo : images._light_logo) } />
                    </Center>
                    <Input type='email' variant='outline' placeholder='Correo electrónico' size='lg' />
                    <Input type='password' variant='outline' placeholder='Contraseña' size='lg' />
                    <Button>
                        <Text fontSize='md' fontWeight='bold'>Iniciar Sesión</Text>
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default LoginScreen;

