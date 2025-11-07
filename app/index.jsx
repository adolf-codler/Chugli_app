import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { Link } from "expo-router";
import Button from "../components/Button";

export default function Index() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {user ? `Welcome ${user.email}` : "Welcome to Polo Chat!"}
            </Text> {user ?

                <Link href={"/chat"} asChild>
                    <TouchableOpacity style={styles.btn}
                    >
                        <Text style={styles.btnText}>
                            Go to Chat
                        </Text>
                    </TouchableOpacity>
                </Link>
                :
                <Link href={"/login"} asChild>
                    <TouchableOpacity style={styles.btn}
                    >
                        <Text style={styles.btnText}>
                            Login or SignUp
                        </Text>
                    </TouchableOpacity>
                </Link>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 20, marginBottom: 20 },
    btn: { backgroundColor: "#007AFF", padding: 10, borderRadius: 8 },
    btnText: { color: "white", fontSize: 16 },
});
