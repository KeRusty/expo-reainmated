import React, { useState, useRef } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './cards-styles'

const {
    set, cond, startClock, stopClock, clockRunning, block, timing, //Updates position node by running timing based animation from a given position to a destination determined by toValue. The animation is expected to last duration milliseconds and use easing function that could be set to one of the nodes exported by the Easing object. The frameTime node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far), similar to the time node that just indicates the last clock time the animation node has been evaluated. Both of these variables are expected to be reset before restarting the animation. Finally finished node will be set to 1 when the position reaches the final value or when frameTime exceeds duration.
    debug, Value, Clock, //animated node , the value it returns is the current frame timestamp in milliseconds
} = Animated;

function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: value, //from position given by value
        time: new Value(0),
        frameTime: new Value(0), //frameTime node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far)
    };

    const config = {
        duration: 500, //animation duration
        toValue: dest, //to position given by dest
        easing: Easing.inOut(Easing.cubic), //easing function
    };
    //block nodes can be used if we want to execute several nodes (commands) in a specific sequence
    return block([
        //check if clock is running already, if not we set variables and start clock
        cond(clockRunning(clock), 0, [
            //cond nodes are equivalent of if ... else
            set(state.finished, 0), //set nodes are equivalent of =
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock),
        ]),
        timing(clock, state, config), //here we start animation using timing which takes state and config variables
        // cond(!state.finished, debug('animation running')),
        cond(state.finished, debug('stop clock', stopClock(clock))), //if animation is finished ,we stop clock
        state.position, //return position of animated variable which will map to this.heightIncrease
    ]);
}



const Row = ({ showContent, toggleContent, height, heading, subheading }) => {

    return (
        <Animated.View style={{ height: height }}>
            {/*this is title part */}

            {!showContent &&
                <TouchableOpacity style={styles.cardContainer} onPress={() => { toggleContent() }}>

                    <View style={styles.contentContainer}>

                        <View style={styles.imageContainer}>

                            <Text>IMAGE</Text>

                        </View>

                        <View style={styles.textContainer}>

                            <Text style={styles.headingText}>{heading}</Text>

                            <Text style={styles.subheadingText}>{subheading}</Text>

                        </View>

                    </View>

                </TouchableOpacity>
            }

            {/* this is content part */}

            {showContent &&
                <Animated.ScrollView>

                    <TouchableOpacity style={styles.pressedContentContainer} onPress={() => { toggleContent() }}>

                        <View style={styles.pressedImageContainer}>

                            <Image style={styles.tickImage} source={require('../../../assets/tick.png')} />

                        </View>

                        <View style={styles.pressedTextContainer}>

                            <Text style={styles.headingText}>{heading}</Text>

                            <Text style={styles.subheadingText}>{subheading}</Text>

                        </View>

                    </TouchableOpacity>

                </Animated.ScrollView>
            }

        </Animated.View >
    );
};



const Card = (props) => {

    const [showContent, setShowContent] = useState(false);

    //instance varible for Row height
    let heightRow = useRef(new Value(60));

    const toggleRowContent = () => {

        if (!showContent) {
            heightRow.current = runTiming(new Clock(), new Value(60), new Value(260));
        } else {
            heightRow.current = runTiming(new Clock(), new Value(260), new Value(60));
        }

        setShowContent(!showContent);
    };

    return (
        <View
            style={styles.cardContainer}>

            <Row
                height={heightRow.current}
                heading={props.heading}
                subheading={props.subheading}
                showContent={showContent}
                toggleContent={toggleRowContent}
            />

        </View>
    );
}

export default Card