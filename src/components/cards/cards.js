import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import styles from './cards-styles';

export default function Cards(props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Text>IMAGE</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>{props.heading}</Text>
                    <Text>{props.subheading}</Text>
                </View>
            </View>
        </View>
    );
}
