import React, { useState, useCallback, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Verify() {
    const route = useRoute();
    const { email } = route.params;
    const navigation = useNavigation();
    const [form, setForm] = useState({
        code: '',
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const inputs = useRef([]);

    useEffect(() => {
        setIsButtonDisabled(
            form.code.length !== 5
        );
    }, [form.code]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setForm({ code: '' });
        });

        return unsubscribe;
    }, [navigation]);

    const handleSubmit = useCallback(() => {
        // Implement server-side verification logic here
        if (form.code === '12345') { // Replace '12345' with actual expected OTP
            console.log("Verification successful. Proceed with further actions.");
        } else {
            Alert.alert("Invalid OTP", "Please enter a valid OTP code.");
        }
    }, [form.code]);

    const handleTextInputChange = (text, index) => {
        if (/^[0-9]$/.test(text) && index < 5) {
            setForm(prevForm => {
                const updatedCode = prevForm.code.substring(0, index) + text + prevForm.code.substring(index + 1);

                if (text.length === 1 && index < inputs.current.length - 1) {
                    inputs.current[index + 1].focus();
                }
                return { ...prevForm, code: updatedCode };
            });
        }
    };

    const handleBackspacePress = (currentIndex) => {
        setForm(prevForm => {
            if (currentIndex >= 0 && currentIndex < prevForm.code.length) {
                const updatedCode = prevForm.code.slice(0, currentIndex) + prevForm.code.slice(currentIndex + 1);
                if (currentIndex > 0) {
                    inputs.current[currentIndex - 1].focus();
                }
                return { ...prevForm, code: updatedCode };
            } else {
                return prevForm;
            }
        });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
            <View style={styles.container}>
            <TouchableOpacity style={styles.goback} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={34} color="black" />
                </TouchableOpacity>
                <View style={styles.header}>
               
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../../assets/logo.png")}
                            alt="logo"
                            style={styles.logo}
                        />
                    </View>
                    <Text style={styles.title}>Verify your Email</Text>
                    <Text style={styles.subtitle}>Enter the code sent to {email}</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.horizontalBoxes}>
                        {[0, 1, 2, 3, 4].map(index => (
                            <TextInput
                                key={index}
                                ref={ref => (inputs.current[index] = ref)}
                                style={[styles.box, styles.boxText]}
                                placeholder=""
                                keyboardType="numeric"
                                maxLength={1}
                                onChangeText={text => handleTextInputChange(text, index)}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    if (key === 'Backspace' && index > 0) {
                                        handleBackspacePress(index);
                                    }
                                }}
                            />
                        ))}
                    </View>

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            disabled={isButtonDisabled}
                        >
                            <View style={[styles.btn, isButtonDisabled && styles.disabledBtn]}>
                                <Text style={styles.btnText}>Verify</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    header: {
        
        padding:24,
        marginVertical: 36,
        alignItems: 'center',
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 12,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#1e1e1e',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        textAlign: 'center',
    },
    horizontalBoxes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    goback: {
        paddingTop:44,
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 16,
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 8,
    },
    formAction: {
        marginVertical: 24,
        alignItems: 'center',
    },
    boxText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
    btn: {
        backgroundColor: '#075eec',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    form: {
        marginBottom: 24,
        flex: 1,
    },
    disabledBtn: {
        backgroundColor: '#ccc',
    },
});
