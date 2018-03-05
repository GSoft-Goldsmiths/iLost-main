import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import { color } from '../styles/variables';

export default ({ markers, region }) => {

  mapMarkers = (markers || []).map((m, i) => (
    <MapView.Marker.Animated
      key={i + m.title}
      coordinate={m.coordinate}
      title={m.title || 'title'}
      description={m.description || 'desc'}
      pinColor={color.main}
    />
  ));

  return (
    <View style={styles.container}>
      <MapView
        show
        showsUserLocation
        followsUserLocation
        loadingEnabled
        region={region}
        style={styles.map}
      >
        {mapMarkers}
      </MapView>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: color.main,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};