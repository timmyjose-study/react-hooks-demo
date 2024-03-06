import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function UseEffectDemo() {
  const navigation = useNavigation()

  const [count, setCount] = useState<number>(0)
  const [message, setMessage] = useState<string>('')

  // run on every render (no dependencies array)
  useEffect(() => {
    console.log(`${count} new messages!`)
  })

  // run only once during initial render (empty dependencies array)
  useEffect(() => {
    console.log('useEffect Demo says "Hello"')
  }, [])

  // run when something in the dependencies array changes
  useEffect(() => {
    console.log(`Message is ${message}`)
  }, [message])

  return (
    <View style={styles.container}>
      <Text>{count} new messages!</Text>
      <Button title='Increment' onPress={() => setCount(count + 1)} />
      <TextInput
        editable
        textAlign='center'
        autoCorrect={false}
        autoComplete='off'
        style={styles.textinput}
        placeholder='Enter some text here'
        onSubmitEditing={(evt) => setMessage(evt.nativeEvent.text)}
      />
      <Button title='Home' onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  textinput: {
    width: 50,
    borderColor: '#000000'
  }
})