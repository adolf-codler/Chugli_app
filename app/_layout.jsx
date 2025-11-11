import React from "react";
import { Slot } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
    return (
        <AuthProvider>
            <Slot /> {/* This renders child routes */}
        </AuthProvider>
    );
}
