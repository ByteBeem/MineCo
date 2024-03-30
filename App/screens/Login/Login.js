import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [emailError, setEmailError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [passwordStrengthError, setPasswordStrengthError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        setIsButtonDisabled(
            emailError ||
            passwordStrengthError ||
            !form.email ||
            !form.password
        );
    }, [emailError, form.email, passwordStrengthError, form.password]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            // Reset the form fields when navigating away
            setForm({ email: '', password: '' });
            setEmailError('');
            setPasswordStrengthError('');
        });

        return unsubscribe;
    }, [navigation]);

    const handlePasswordChange = useCallback((password) => {
        setForm(prevForm => ({ ...prevForm, password }));
        if (!validatePasswordStrength(password)) {
            setPasswordStrengthError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        } else {
            setPasswordStrengthError('');
        }
    }, [validatePasswordStrength]);

    const handleEmailChange = useCallback((email) => {
        setForm(prevForm => ({ ...prevForm, email }));
        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    }, []);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const validatePasswordStrength = useCallback((password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        return regex.test(password);
    }, []);

    const validateEmail = useCallback((email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }, []);

    const handleSubmit = useCallback(() => {
        // handle signup logic
    }, [form.email]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../../assets/logo.png")}
                            alt="logo"
                            style={styles.logo}
                        />
                    </View>
                    <Text style={styles.title}>Sign in to MineCo</Text>
                    <Text style={styles.subtitle}>Get access to your MineCo account</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email address</Text>
                        <TextInput
                            autoCapitalize='none'
                            keyboardType='email-address'
                            importantForAutofill="noExcludeDescendants"
                            autoCorrect={false}
                            style={[styles.inputControl, emailError && styles.inputError]}
                            placeholder='Email'
                            placeholderTextColor="#6b7280"
                            value={form.email}
                            onChangeText={handleEmailChange}
                        />
                    </View>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <View style={[styles.passwordInputContainer, passwordStrengthError && styles.inputError]}>
                            <TextInput
                                importantForAutofill="noExcludeDescendants"
                                secureTextEntry={!isPasswordVisible}
                                style={[styles.inputControl, styles.passwordInput]}
                                placeholder='**********'
                                placeholderTextColor="#6b7280"
                                value={form.password}
                                onChangeText={handlePasswordChange}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                                <MaterialCommunityIcons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#6b7280" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {passwordStrengthError ? <Text style={styles.errorText}>{passwordStrengthError}</Text> : null}

                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            disabled={isButtonDisabled}
                        >
                            <View style={[styles.btn, isButtonDisabled && styles.disabledBtn]}>
                                <Text style={styles.btnText}>Log in</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Signup');
                    }}>
                        <Text style={styles.formFooter}>Don't have an account? {' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Reset');
                    }}>
                        <Text style={styles.formFooter}>Forgot password? {' '}
                            <Text style={{ textDecorationLine: 'underline' }}>Reset</Text>
                        </Text>
                    </TouchableOpacity>
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
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: "#222",
        marginBottom: 8,
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 12,
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
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
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
    formAction: {
        marginVertical: 24,
        alignItems: 'center',
    },
    formFooter: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
        padding:10,
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
