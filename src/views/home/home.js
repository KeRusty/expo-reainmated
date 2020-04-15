import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';

//import Cards from "../../components/cards/cards";
import Cards from '../../components/cards/cards2';
import styles from './home-styles';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <Cards
                    heading={"Posture Squats"}
                    subheading={"20 Reps"}
                />

                <Cards
                    heading={"Long Plank"}
                    subheading={"30 Seconds"}
                />

                <Cards
                    heading={"Arm Sprint"}
                    subheading={"30 Seconds"}
                />

                <Cards
                    heading={"Back Step Lunge"}
                    subheading={"20 Reps Each Leg"}
                />

                <Cards
                    heading={"Shoulder Push Ups"}
                    subheading={"15 Reps"}
                />

                <Cards
                    heading={"Glute Leg Lifts"}
                    subheading={"15 Reps Each Leg"}
                />

                <Cards
                    heading={"Reverse Plank"}
                    subheading={"30 Seconds"}
                />

                <Cards
                    heading={"Step Ups"}
                    subheading={"10 Reps Each Leg"}
                />


            </ScrollView>

        </SafeAreaView>
    );
}
