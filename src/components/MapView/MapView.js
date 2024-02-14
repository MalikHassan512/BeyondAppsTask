import { View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import styles from './styles';

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


export default MapViewCom;
