

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState,useEffect} from 'react';
import { Text, View } from 'react-native';
import Details from './screens/Details';
import Resume from './screens/Resume';
import Splash from './screens/Splash';
const Stack= createNativeStackNavigator();
const App=()=> {
  const[imagee,setImagee] = useState(true)
  useEffect(() => {
setTimeout(()=>{
setImagee(false)
},2000)
  }, [])
  return(
     <NavigationContainer>
      <Stack.Navigator>
        {imagee?<Stack.Screen
         name='Splash'
         component={Splash}
         options={{headerShown:false}}
         
        />:null}
      
        <Stack.Screen
         name='Details'
         component={Details}
         options={{headerShown:false}}
         
        />
         <Stack.Screen
         name='Resume'
         component={Resume}
         options={{headerShown:false}}
         
        />

        
      </Stack.Navigator>
     </NavigationContainer>
      // <Details/>
    

  )
}



export default App;
