import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from './App'

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Learning React hooks</Text>
      <Button title='useState Demo' onPress={() => navigation.navigate('UseStateDemo')} />
      <Button title='useEffect Demo' onPress={() => navigation.navigate('UseEffectDemo')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: Platform.OS == 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    fontSize: 30
  }
})
