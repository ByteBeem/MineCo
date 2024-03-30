import React from 'react';
import { View, SafeAreaView,Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Wallet = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity style={styles.goback} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={34} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.companyName}>Wallet</Text>
                <View style={styles.balanceHeader}>
                    <Text style={styles.balance}>R50.00</Text>
                </View>
            </View>

            <View style={styles.centerArea}>
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Withdraw')}>
                    <Text style={styles.actionButtonText}>Withdraw</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Deposit')}>
                    <Text style={styles.actionButtonText}>Deposit</Text>
                </TouchableOpacity>
            </View>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    header: {
        paddingTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 10,
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
    centerArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButton: {
        backgroundColor: '#222',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
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

export default Wallet;
