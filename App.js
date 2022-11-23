
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './src/views/screens/Loginscreen';
import Signupscreen from './src/views/screens/Signupscreen';
import Homescreen from './src/views/screens/Homescreen';
import Forgotscreen from './src/views/screens/Forgotscreen';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './config';


const Stack = createNativeStackNavigator();
export default function App() {
  
  const [loggedIn,setloggedin] = useState(true)
  
  onAuthStateChanged(auth, async (user) => {
    if (user != null) {
      setloggedin(true)
      
    } else {
     setloggedin(false)
 }


 });

  return (
   <NavigationContainer>
    {loggedIn ? <Stack.Navigator screenOptions={{headerShown: false}}>
  <Stack.Screen 
      name='Homescreen'
      component={Homescreen}
      />
   
       </Stack.Navigator>:
      <Stack.Navigator screenOptions={{headerShown: false}}>

    <Stack.Screen
      name='Signupscreen'
      component={Signupscreen}
      />
    <Stack.Screen 
      name='Loginscreen'
      component={Loginscreen}
      />
   
         <Stack.Screen 
      name='Forgotscreen'
      component={Forgotscreen}
      />
    
    </Stack.Navigator>
}
   </NavigationContainer>
  );
};

