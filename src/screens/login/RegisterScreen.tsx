import React from 'react';
import {Box, Button, Center, Input, Stack, Text, useColorMode} from 'native-base';
import Container from '../../components/Container';
import {Image} from 'react-native';
import {images} from '../../assets/images';
import {Formik} from 'formik';

const RegisterScreen = () => {

    const { colorMode } = useColorMode();

    return (
        <Container centered>
            <Box style={{ width: 300 }}>
                <Center my={ 2 }>
                    <Image source={ (colorMode === 'dark' ? images._dark_logo : images._light_logo) } />
                </Center>
                <Formik
                    initialValues={{ email: '', password: '', repassword: '' }}
                    onSubmit={ (values) => console.log(values) }
                >
                    {({ handleChange, handleSubmit, values }) => (
                    <Stack space={ 3 }>
                        <Input type='email' onChangeText={ handleChange('email') } value={ values.email } placeholder='Correo electrónico' size='lg'/>
                        <Input type='password' onChangeText={ handleChange('password') } value={ values.password } placeholder='Contraseña' size='lg'/>
                        <Input type='password' onChangeText={ handleChange('repassword') } value={ values.repassword } placeholder='Confirmar contraseña' size='lg'/>
                        <Button
                            onPress={ handleSubmit }
                        >
                            <Text fontSize='md' fontWeight='bold'>Registrarme</Text>
                        </Button>
                    </Stack>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default RegisterScreen;
