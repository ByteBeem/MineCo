import React from 'react';
import { View,SafeAreaView, Image, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SIZES, FONTS } from '../../constants'

const Home = ({ navigation }) => {
    
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
        { id: '6', title: 'Item 6' },
        { id: '7', title: 'Item 7' },
        { id: '8', title: 'Item 8' },
        { id: '9', title: 'Item 9' },
        { id: '10', title: 'Item 10' },
    ];

    
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{
                            width: SIZES.width * 0.13,
                            height: SIZES.width * 0.13,


                        }}
                    />
                </View>
                <Text style={styles.companyName}>MineCo</Text>
                <View style={styles.balanceHeader}>
                    <Text style={styles.balance}>R50.00</Text>
                </View>
            </View>


            <View style={styles.blackScreen}>

                <Text style={styles.content}>Content Area</Text>
            </View>
            <Text style={{
                ...(SIZES.width <= 360
                    ? { ...FONTS.h2 }
                    : { ...FONTS.h1 }),
                textAlign: 'center',
                marginHorizontal: SIZES.padding * 0.8,
            }}>Tasks</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContainer}
            />


            <View style={styles.navigation}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={24} color="#ccc" />
                    <Text style={styles.iconText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Wallet')}>
                    <Ionicons name="wallet" size={24} color="#ccc" />
                    <Text style={styles.iconText}>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('History')}>
                    <Ionicons name="time" size={24} color="#ccc" />
                    <Text style={styles.iconText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="log-out" size={24} color="#ccc" />
                    <Text style={styles.iconText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    header: {
        paddingTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.05,
    },
    logoContainer: {
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 10,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    companyName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    balance: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    balanceHeader: {
        justifyContent: 'flex-end',
    },
    blackScreen: {
        width: windowWidth * 0.9,
        height: 200,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    content: {
        fontSize: 20,
        color: '#fff',
    },
    flatListContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 18,
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 6,
        backgroundColor: '#222',
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconText: {
        fontSize: 12,
        marginTop: 5,
        color: '#ccc',
    },
});

export default Home;
