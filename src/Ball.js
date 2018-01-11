// Flow of rendering
// 1. Ball and Animated.View rendered
// 2. Animated.View inspects its props, finds animated value
// 3. ValueXY starts changing
// 4. Animated.View sees updated value from ValueXY
// 5. Animated.View updates its styling
import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
    componentWillMount() {
        // 1. What is the current position of the element being animated?
        this.position = new Animated.ValueXY(0, 0); // start: 0, 0
        // 2. How is the animation changing?
        // spring function changes the value of position(x,y) over some time
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 } // move to: 200, 500
        }).start(); // start this operation now
    }

    render() {
        return (
            // 3. Apply the animation's current position to an actual component.
            // Animated.View applies position to Ball.
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        );
    }
}

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
};

export default Ball;
