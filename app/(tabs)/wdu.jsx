import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stats from '../../components/card';

//style this

const Wdu = () => {
    const [doing, setDoing] = useState("(Nigger do something)");
    const [eat, setEat] = useState("(Nigger eat something)");

    return (
        <SafeAreaView style={styles.View}>
            <Text style={styles.Text}>{doing}</Text>
            <View style={styles.List}>
                <Stats doing="Studying" function={setDoing} />
                <Stats doing="Extra Curricular" function={setDoing} />
                <Stats doing="Playing" function={setDoing} />
                <Stats doing="Time Pass" function={setDoing} />
                <Stats doing="sleeping" function={setDoing} />
            </View>
            <Text style={styles.Text}>Had {eat}</Text>
            <View style={styles.List}>
                <Stats doing="Breakfast" function={setEat} />
                <Stats doing="Lunch" function={setEat} />
                <Stats doing="Snacks" function={setEat} />
                <Stats doing="Dinner" function={setEat} />
            </View>
        </SafeAreaView>
    );
};

export default Wdu;

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "black",
    },
    Text: {
        fontSize: 24,
        color: "white"
    },
    List: {
        flex: 1,
        flexDirection: "row",
    }
});
