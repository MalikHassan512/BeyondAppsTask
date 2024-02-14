import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject, // This is a shorthand for the following properties: position: 'absolute', top: 0, right: 0, bottom: 0, left: 0
    },
  });

export default styles;