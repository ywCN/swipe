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

    // determine style of card during drag
    getCardStyle() {
        const { position } = this.state;

        // set up interpolation
        const rotate = position.x.interpolate({
            inputRange: [-500, 0, 500],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }] // { rotate: rotate }
        };
    }

    renderCards() {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View
                        key={item.id}
                        style={this.getCardStyle()}
                        // panHandlers is an object contains a lot of callbacks
                        {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                );
            }
            return this.props.renderCard(item);
        });
    }

    render() {
        return <View>{this.renderCards()}</View>;
    }
}

export default Deck;
