import React, { useState,useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Withdraw = ({ navigation }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [amount, setAmount] = useState('');
    const [bank, setBank] = useState('Absa');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const banks = ['Absa', 'Capitec', 'Standardbank', 'FNB', 'Tymebank'];

    const handleWithdraw = () => {

    };


    useEffect(() => {
        setIsButtonDisabled(
            name ||
            surname ||
            amount ||
            bank ||
            password
        );
    }, [name, amount, password,surname, bank]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={34} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.companyName}>Withdraw</Text>
                    <View style={styles.balanceHeader}>
                        <Text style={styles.balance}>R50.00</Text>
                    </View>
                </View>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            style={styles.inputControl}
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Surname</Text>
                        <TextInput
                            style={styles.inputControl}
                            placeholder="Surname"
                            value={surname}
                            onChangeText={setSurname}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Amount</Text>
                        <TextInput
                            style={styles.inputControl}
                            placeholder="R"
                            keyboardType="phone-pad"
                            value={amount}
                            onChangeText={setAmount}
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Bank</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={bank}
                            onValueChange={(itemValue) => setBank(itemValue)}
                        >
                            {banks.map((bank, index) => (
                                <Picker.Item key={index} label={bank} value={bank} />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.inputControl}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity style={[styles.withdrawButton , isButtonDisabled && styles.disabledBtn]} onPress={handleWithdraw}
                    
                    disabled={isButtonDisabled}
                    >
                        <Text style={styles.withdrawButtonText}>Withdraw</Text>
                    </TouchableOpacity>
                  
                </View>
            </ScrollView>
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
        justifyContent: 'space-between',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100,
    },
    header: {
        paddingTop: 65,
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
    form: {
        paddingTop: 28,
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: "#222",
        marginBottom: 8,
    },
    inputControl: {
        backgroundColor: '#fff',
        height: 44,
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222'
    },
    picker: {
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        color: '#222'
    },
    withdrawButton: {
        backgroundColor: '#222',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    withdrawButtonText: {
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
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 8,
    },
    disabledBtn: {
        backgroundColor: '#ccc',
    },
});

export default Withdraw;
