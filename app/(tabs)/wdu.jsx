import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stats from '../../components/card';

//style this

const Wdu = () => {
    const [doing, setDoing] = useState("(Nigger do something)");
    const [eat, setEat] = useState("(Nigger eat something)");
    const [place, setPlace] = useState("Nigger where you at")

    return (
        <SafeAreaView style={styles.View}>
            <Text style={styles.Text}>{doing}</Text>
            <ScrollView style={styles.List} horizontal={true}>
                <Stats doing="Studying" function={setDoing} />
                <Stats doing="Extra Curricular" function={setDoing} />
                <Stats doing="Playing" function={setDoing} />
                <Stats doing="Eating" function={setDoing} />
                <Stats doing="Time Pass" function={setDoing} />
                <Stats doing="sleeping" function={setDoing} />
            </ScrollView>
            <Text style={styles.Text}>Had {eat}</Text>
            <ScrollView style={styles.List} horizontal={true}>
                <Stats doing="Breakfast" function={setEat} />
                <Stats doing="Lunch" function={setEat} />
                <Stats doing="Snacks" function={setEat} />
                <Stats doing="Dinner" function={setEat} />
            </ScrollView>
            <Text style={styles.Text}>{place}</Text>
            <ScrollView style={styles.List} horizontal={true}>
                <Stats doing="College" function={setPlace} />
                <Stats doing="Hostel" function={setPlace} />
                <Stats doing="Nagpur" function={setPlace} />
                <Stats doing="Bus" function={setPlace} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Wdu;

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "black",
        padding: 15
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
