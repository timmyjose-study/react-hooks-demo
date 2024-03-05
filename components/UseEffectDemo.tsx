import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function UseEffectDemo() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Button title='Home' onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})