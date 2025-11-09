// app/_layout.jsx
import React from "react";
import { Stack, Redirect } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";

function RootInner() {
    const { islog, loading } = useAuth();

    // Wait for Firebase to finish checking
    if (loading) return null;

    // ✅ Redirect based on login status
    if (islog) {
        return <Redirect href="/chat" />;
    } else {
        return <Redirect href="/login" />;
    }
}

export default function RootLayout() {
    return (
        <AuthProvider>
            <RootInner />
            {/* 👇 Define all screens statically */}
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" />
                <Stack.Screen name="chat" />
            </Stack>
        </AuthProvider>
    );
}
