import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Stats = (props) => {
    return (


        <TouchableOpacity style={styles.To} onPress={() => props.function(props.doing)}>
            <Text style={styles.Text}>{props.doing}</Text>
        </TouchableOpacity>

    );
};

export default Stats
const styles = StyleSheet.create({
    To: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: "white",
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,

    },
    Text: {
        fontSize: 24,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
    },
})