import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Path } from 'react-native-svg';

class SvgAnimation extends Component {
    constructor(props) {
      super(props);
      this.animationValue = new Animated.Value(0);
      this.state = {
        pathLength: 0,
      };
    }
  
    componentDidMount() {
      // Get the total length of the SVG path
      const path = 'M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80';
      const pathLength = this.getPathLength(path);
      this.setState({ pathLength });
  
      // Start the animation
      Animated.timing(this.animationValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  
    getPathLength = (path) => {
      // Implement a function to calculate the length of an SVG path
      // This will depend on the specifics of your SVG content.
      // You can use third-party libraries like `svg-path-properties` for this purpose.
      // For this example, we'll assume a constant path length.
      return 600;
    };
  
    render() {
      const { pathLength } = this.state;
      const animatedValue = this.animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, pathLength],
      });
  
      const path = 'M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80';
  
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Svg width="200" height="200">
            <Path
              d={path}
              stroke="blue"
              strokeWidth="2"
              fill="none"
              strokeDasharray={[pathLength, pathLength]}
              strokeDashoffset={animatedValue}
            />
          </Svg>
        </View>
      );
    }
  }
  
  export default SvgAnimation;
  