# Tinder

## Expo

## Animation Systems in React Native
- `LayoutAnimation`
    - Easy to setup
    - Not much control
    - Some things may be animated that we do not want they to be
- `Animated`
    - Far more complicated to set up
    - Allows for more complicated animations
    - Probably need this if want to handle gesture animations
    
## `Animated` Module
- 3 values are required to describe an entire animation.
    1. What is the current position of the element being animated?
        - Values: Value, ValueXY
    2. How is the animation changing?
        - Types: Spring, Decay, Timing
    3. Apply the animation's current position to an actual component.
        - Components: View, Text, Image
    