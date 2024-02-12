import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const MapViewCom = ({ latlng }) => {
  return (
    <View style={styles.container}>
      <MapView
      key={latlng[0] + latlng[1]}
        style={styles.map}
        initialRegion={{
          latitude: latlng?.[0],
          longitude: latlng?.[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapViewCom;
