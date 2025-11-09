// app/chat.jsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthProvider, useAuth } from "../context/AuthContext";

export default function Chat() {
    const { islog, user, logout } = useAuth();


    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome, {user?.email}</Text>
            <Text style={{ marginVertical: 20 }}>💬 Chat screen here soon</Text>
            <TouchableOpacity onPress={logout}>
                <Text style={{ color: "red" }}>Logout</Text>
            </TouchableOpacity>
        </View>

    );
}
