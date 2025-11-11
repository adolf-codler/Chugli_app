import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'


const chatui = () => {
    const Data = [
        { id: "1", con: "n" },
        { id: "2", con: "ni" },
        { id: "3", con: "nig" },
        { id: "4", con: "nigg" },
        { id: "5", con: "nigge" },
        { id: "6", con: "nigger" },
    ]
    return (
        <SafeAreaView >

            <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <View style={sty.v}>
                    <TouchableOpacity activeOpacity={0.5} style={sty.to}>

                        <Text style={sty.txt}>{item.con}</Text>
                    </TouchableOpacity>
                </View>}
            />


        </SafeAreaView>
    )
}

export default chatui
const sty = StyleSheet.create({
    sv: {
        backgroundColor: "green"
    },
    v: {
        height: 400
    },
    txt: {
        fontSize: 125,
    },
    to: {
        borderColor: "black",
        borderWidth: 12,
        borderCurve: "circular",
        borderEndColor: "green",
        borderStartColor: "blue",

    }
})