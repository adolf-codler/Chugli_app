import React from "react";
import { Tabs, Redirect } from "expo-router";
import { useAuth } from "../../context/AuthContext";

export default function TabsLayout() {
    const { islog, loading } = useAuth();

    if (loading) return null;

    if (!islog) return <Redirect href="/LoginScreen" />;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#007AFF",
            }}
        >
            <Tabs.Screen name="wdu" options={{ title: "WDU" }} />
            <Tabs.Screen name="friends" options={{ title: "Friends" }} />
            <Tabs.Screen name="setting" options={{ title: "Profile" }} />
        </Tabs>
    );
}
