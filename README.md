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
    - [steps](https://github.com/facebook/react-native/issues/4968)
        1. rm -rf node_modules && npm install
        2. rm -fr $TMPDIR/react-*
        3. watchman watch-del-all
    
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
    