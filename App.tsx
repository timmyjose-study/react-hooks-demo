import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import UseEffectDemo from './components/UseEffectDemo'
import UseStateDemo from './components/UseStateDemo'
import UseContextDemo from './components/UseContextDemo'
import CustomHooksDemo from './components/CustomHooksDemo'
import UseMemoDemo from './components/UseMemoDemo'
import UseCallbackDemo from './components/UseCallbackDemo'
import UseLayoutEffectDemo from './components/UseLayoutEffectDemo'
import UseReducerDemo from './components/UseReducerDemo'
import UseRefDemo from './components/UseRefDemo'

export type RootStackParamList = {
  UseStateDemo: undefined;
  UseEffectDemo: undefined;
  UseContextDemo: undefined;
  UseRefDemo: undefined;
  UseReducerDemo: undefined;
  UseLayoutEffectDemo: undefined;
  UseMemoDemo: undefined;
  UseCallbackDemo: undefined;
  CustomHooksDemo: undefined;
}

const Stack = createNativeStackNavigator()

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='UseStateDemo' component={UseStateDemo} />
        <Stack.Screen name='UseEffectDemo' component={UseEffectDemo}/>
        <Stack.Screen name='UseContextDemo' component={UseContextDemo}/>
        <Stack.Screen name='UseRefDemo' component={UseRefDemo}/>
        <Stack.Screen name='UseReducerDemo' component={UseReducerDemo}/>
        <Stack.Screen name='UseLayoutEffectDemo' component={UseLayoutEffectDemo}/>
        <Stack.Screen name='UseMemoDemo' component={UseMemoDemo}/>
        <Stack.Screen name='UseCallbackDemo' component={UseCallbackDemo}/>
        <Stack.Screen name='CustomHooksDemo' component={CustomHooksDemo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App