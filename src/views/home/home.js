import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import Cards from "../../components/cards/cards";
import styles from './home-styles';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <Cards
                    heading={"Posture Squats"}
                    subheading={"20 Reps"}
                />

            </ScrollView>

        </SafeAreaView>
    );
}
