import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import UseEffectDemo from './components/UseEffectDemo'
import UseStateDemo from './components/UseStateDemo'

const Stack = createNativeStackNavigator()

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='UseStateDemo' component={UseStateDemo} />
        <Stack.Screen name='UseEffectDemo' component={UseEffectDemo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App