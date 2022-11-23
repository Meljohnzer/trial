import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={{flex:0,top:0,justifyContent:"center",alignItems:'center'}}>
    <Image style={{width:300,height:300,resizeMode:'contain'}} source={require("../../../assets/logo-no-background.png")}/>
    </View>
  )
}

export default Logo