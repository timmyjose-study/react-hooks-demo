import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

type CounterState = {
  name: string;
  counter: number;
}

const initialState: CounterState = {
  name: '',
  counter: 0
}

export default function UseStateDemo() {
  const navigation = useNavigation()

  const [details, setDetails] = useState<CounterState>(initialState)

  const updateName = async (name: string) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      name
    }))
  }

  const updateCounter = async () => {
    setDetails(prevDetails => ({
      ...prevDetails,
      counter: prevDetails.counter + 1
    }))
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder='Enter your name'
        value={details.name}
        onChangeText={name => updateName(name)}
      />
      <Button title='Increment' onPress={updateCounter}/>
      <Text>{details.name} clicked {details.counter} {details.counter == 1 ? 'time' : 'times'}</Text>
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
    width: '80%',
    height: 40
  }
})