import { View, Text,StyleSheet,Image,StatusBar } from 'react-native'
import React from 'react'
import Splas from '../Assests/Splash.png'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
const Splash = () => {
   
    
  return (
    <View style={style.container}>
     <StatusBar hidden={true}/>
      <Image
      source={Splas}
      style={{height:responsiveHeight(100),width:responsiveWidth(100)}}
      />     
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        
        
    }
})

export default Splash