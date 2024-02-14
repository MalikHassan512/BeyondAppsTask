import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'

// Loader component
const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.black} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// export the component as default
export default Loader