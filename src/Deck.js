import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            // This function is called when a user taps or press down on the screen.
            // If it returns true like () => true, it means we want this instance of
            // the responder to be responsible for the user pressing on the screen.
            onStartShouldSetPanResponder: () => true,

            // This function is called when a user starts to drag their finger
            // around the screen. It is being called ALL THE TIME when dragging.
            onPanResponderMove: (event, gesture) => {
                // debugger; // pause the cleaning up process of gesture
                // console.log(gesture);
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },

            // This function is called when a user moves finger from the screen.
            onPanResponderRelease: () => {}
        });

        // just for injecting data into props
        // will not use setState() on them
        this.state = { panResponder, position };
    }

    renderCards() {
        return this.props.data.map(item => {
            return this.props.renderCard(item);
        });
    }

    render() {
        return (
            <Animated.View
                style={this.state.position.getLayout()}
                // panHandlers is an object contains a lot of callbacks
                {...this.state.panResponder.panHandlers}
            >
                {this.renderCards()}
            </Animated.View>
        );
    }
}

export default Deck;
