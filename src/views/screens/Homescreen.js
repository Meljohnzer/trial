import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView,View, Text ,ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";
import { auth } from "../../../config";

import { collection,setDoc,doc,addDoc,getDoc, Firestore,onSnapshot } from "firebase/firestore";
import { db } from "../../../config"; 
import { signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";


const Homescreen = ({navigation,route}) => {
 
  const [single,setSingle] = useState({})
 
useEffect(()=>{

    onAuthStateChanged(auth, async (user) => {
    if (user != null) {
      const docRef = doc(db, "Register", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
          setSingle(docSnap.data())
          console.log(user.uid)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } else {
     navigation.navigate('Loginscreen')
 }


 
 });
 


},[])

           



//  .then((userCredintals) => {
//   const docref = doc(db,"Register",userCredintals.user.uid)
//   const docsnap = getDoc(docref)
//   if(docsnap.exists()){
//     console.log("Document data:", docsnap.data());
//   }
//  })

const logout = () =>{
  signOut(auth).then(() => {
    navigation.navigate('Loginscreen')
   }).catch((error) => {
     // An error happened.
   });
}

  return(
    <ImageBackground 
    source={require('../../../assets/bg/bgimage5.jpg')}
    style={[Universalstyles.signup, {height: 'auto'}]}>
        <ScrollView
        
        contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 20,
            justifyContent: 'center',
            flex:1,
            
        }}
        >
    <View style={{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingHorizontal: 40,
      
    
    }}>
     
     <View style = {{ marginVertical: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    padding: 10,}}>
      <Text style={{fontSize: 40, fontWeight: '300'}}>Profile</Text>
      <Text style={{fontSize: 30,width:"100%",textAlign:'center', fontWeight: '200',paddingTop:10,letterSpacing:5,borderBottomColor:'#4169e1',borderBottomWidth:1}}>{single.Firstname}</Text>
      <Text style={{fontSize: 15, fontWeight: '100'}}>Firstname</Text>
      <Text style={{fontSize: 30,width:"100%",textAlign:'center', fontWeight: '200',paddingTop:10,letterSpacing:5,borderBottomColor:'#4169e1',borderBottomWidth:1}}>{single.Lastname}</Text>
      <Text style={{fontSize: 15, fontWeight: '100'}}>Lastname</Text>
      <Text style={{fontSize: 30,width:"100%",textAlign:'center', fontWeight: '200',paddingTop:10,letterSpacing:5,borderBottomColor:'#4169e1',borderBottomWidth:1}}>{single.email}</Text>
      <Text style={{fontSize: 15, fontWeight: '100'}}>Email</Text>
      </View>
      <Button title='Log out' onPress={logout}/>
    </View>
    </ScrollView>
        </ImageBackground>

  );
};

export default Homescreen