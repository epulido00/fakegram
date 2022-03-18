import React from 'react';
import {Dimensions, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Divider, Menu, Text, useColorMode, View} from 'native-base';
import Container from '../../components/Container';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import StoryBox from '../../components/StoryBox';
import Icon from 'react-native-vector-icons/Ionicons';

const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { colorMode } = useColorMode();

    return (
        <Container>
            <View
                style={{
                    paddingTop: top,
                    paddingHorizontal: 5,
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image 
                        source={ (colorMode === 'dark' ? images._dark_logo : images._light_logo) }
                        style={{ width: 150, height: 60, }}
                        resizeMode='contain'
                    />
                    <View style={{ flex: 1 }} />
                    <Menu
                        placement='top right'
                        trigger={ triggerProps => {
                            return (
                                <TouchableOpacity { ...triggerProps }>
                                    <Icon 
                                        color={ (colorMode === 'dark') ? '#FFF' : '#000' }
                                        name='add-circle-outline' 
                                        size={ 35 } 
                                    />
                                </TouchableOpacity>
                            )
                        }}
                    >
                        <Menu.Item style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon 
                                color={ (colorMode === 'dark') ? '#FFF' : '#000' }
                                name='grid-outline' 
                                size={ 20 } 
                            />
                            <Text fontSize='md' ml={ 1 }>Publicación</Text>
                        </Menu.Item>
                        <Menu.Item style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon 
                                color={ (colorMode === 'dark') ? '#FFF' : '#000' }
                                name='aperture-outline' 
                                size={ 20 } 
                            />
                            <Text fontSize='md' ml={ 1 }>Historia</Text>
                        </Menu.Item>
                    </Menu>
                    <TouchableOpacity style={{ marginLeft: 5 }}>
                        <Icon 
                            color={ (colorMode === 'dark') ? '#FFF' : '#000' }
                            name='camera-outline'
                            size={ 35 }
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={ false }
            >
                {/* Historias */}
                <View>
                    <ScrollView
                        horizontal={ true }
                        showsHorizontalScrollIndicator={ false }
                        contentContainerStyle={{
                            paddingHorizontal: 2
                        }}
                    >
                        <StoryBox />
                        <StoryBox />
                        <StoryBox />
                        <StoryBox />
                    </ScrollView>
                </View>
                <Divider mt={ 3 } mb={ 1 } />
                <View>
                    <View>
                        <View my={ 2 } style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <StoryBox size='post' />
                            <Text ml={ 1 } fontWeight='bold' fontSize='md' style={{ flex: 1 }}>Nombre usuario</Text>
                            <TouchableOpacity
                                style={{ marginHorizontal: 10 }}
                            >
                                <Icon 
                                    color={ (colorMode === 'dark') ? '#FFF' : '#000' }
                                    name='ellipsis-vertical-sharp'
                                    size={ 20 }
                                />
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={{ uri: 'https://miro.medium.com/max/1400/1*rOrTgNQABn0P7dy3IrNDjg.jpeg' }}
                            style={{ width: '100%', height: windowHeight * 0.60 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};

export default HomeScreen;

