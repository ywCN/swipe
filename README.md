# Tinder

## Expo
- app.js file is for both Android and iOS

## Animation Systems in React Native
- `LayoutAnimation`
    - Easy to setup
    - Not much control
    - Some things may be animated that we do not want they to be
- `Animated`
    - Far more complicated to set up
    - Allows for more complicated animations
    - Probably need this if want to handle gesture animations

## Trouble Shootings
- unable to resolve module
    - check typos in name, export, import
    - [npm install @expo/vector-icons --save-dev](https://github.com/react-native-training/react-native-elements/issues/620)
    
## `Animated` System
- 3 values are required to describe an entire animation.
    1. What is the current position of the element being animated?
        - Values(object): Value, ValueXY
        - object example: Animated.Value.Animated
    2. How is the animation changing?
        - Types(module): Spring(object), Decay(object), Timing(object)
        - object example: Animated.Components.Spring
    3. Apply the animation's current position to an actual component.
        - Components: View, Text, Image
        - component example: Animated.Components.View
    