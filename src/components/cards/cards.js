import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './cards-styles';

export default function Cards(props) {

    return (
        <TouchableOpacity style={styles.cardContainer}>

            <View style={styles.contentContainer}>

                <View style={styles.imageContainer}>

                    <Text>IMAGE</Text>

                </View>

                <View style={styles.textContainer}>

                    <Text style={styles.headingText}>{props.heading}</Text>

                    <Text style={styles.subheadingText}>{props.subheading}</Text>

                </View>

            </View>

        </TouchableOpacity>
    );
}
