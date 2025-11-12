import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const friends = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <TextInput style={styles.input} placeholder='nigga'>
                </TextInput>
            </ScrollView>
        </SafeAreaView>


    )
}

export default friends

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        margin: 10,
    }
})