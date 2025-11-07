// app/login.jsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isSignup, setIsSignup] = useState(false);

    async function handleAuth() {
        if (!email || !pass) return Alert.alert("Please fill all fields");

        try {
            if (isSignup) {
                await createUserWithEmailAndPassword(auth, email, pass);
                Alert.alert("Account created!");
            } else {
                await signInWithEmailAndPassword(auth, email, pass);
                Alert.alert("Logged in!");
            }
        } catch (err) {
            console.log(err);
            Alert.alert("Auth error", err.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isSignup ? "Sign Up" : "Log In"}</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={pass}
                onChangeText={setPass}
            />

            <TouchableOpacity style={styles.btn} onPress={handleAuth}>
                <Text style={styles.btnText}>{isSignup ? "Sign Up" : "Log In"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
                <Text style={styles.link}>
                    {isSignup ? "Already have an account? Log in" : "Create an account"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 10,
    },
    btn: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 10,
    },
    btnText: { color: "white", fontSize: 16 },
    link: { color: "#007AFF", marginTop: 10 },
});
