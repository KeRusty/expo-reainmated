import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import styles from './home-styles';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <View style={styles.cardContainer}>
                    <View style={styles.contentContainer}>
                        <View style={styles.imageContainer}>
                            <Text>IMAGE</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text>Posture Squats</Text>
                            <Text>20 Reps</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.contentContainer}>
                        <View style={styles.imageContainer}>
                            <Text>IMAGE</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text>Posture Squats</Text>
                            <Text>20 Reps</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}
