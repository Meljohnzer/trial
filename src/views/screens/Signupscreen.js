import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, Keyboard, Alert,Image} from 'react-native'
import React from 'react'
import Input from "../components/Input";
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Logo from "../components/logo";
import { collection,setDoc,doc,addDoc } from "firebase/firestore"; 
import { db } from "../../../config";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../my-first-application1/config";





const Signupscreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    firstname: '',
    Lastname: '',
    password: '',
    cpassword: '',

  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const validate = () => {
    
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email){
      handleError('Please enter your email', 'email');
      valid = false;
    } else if (!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      handleError('Please enter valid email address', 'email');
      valid = false;
    }
    if (!inputs.firstname){
      handleError('Please enter your Firstname', 'firstname');
      valid = false;
    } else if (inputs.firstname.match(/[0-9]/)){
      handleError('Name should not have numbers', 'firstname');
      valid = false;
    }
    if (!inputs.Lastname){
      handleError('Please enter your Lastname', 'Lastname');
      valid = false;
    } else if (inputs.Lastname.match(/[0-9]/)){
      handleError('Name should not have numbers', 'Lastname');
      valid = false;
    }
    if (!inputs.password){
      handleError('Please enter your password', 'password');
    valid = false;
} else if(inputs.password.length < 8){
  handleError('Password must be at least 8 characters', 'password');
  valid = false;
} else if (inputs.password.length > 12){
  handleError('The password must be only 12 characters long', 'password');
  valid = false;
}
  else if (!inputs.password.match(/^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{8,12}$/)){
    handleError('Password must contain the ff. \n-at least 1 Special Charaters\n-at least 1 Number', 'password');
    valid = false;
}   
    if (!inputs.cpassword){
      handleError('Please confirm your password', 'cpassword');
    valid = false;
    } 
    else if (inputs.cpassword != inputs.password){
      handleError('Password do not match', 'cpassword');
      valid = false;

    }
    if (valid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // try {
      //   AsyncStorage.setItem('user', JSON.stringify(inputs));
      //   navigation.navigate('Homescreen',{fname:inputs.firstname,lname:inputs.Lastname,email:inputs.email});
      // } catch (error) {
      //   Alert.alert('Error', 'Something went wrong')
      // }
      createUserWithEmailAndPassword(auth,inputs.email, inputs.password)
      .then((userCredential) => {
        
        navigation.navigate('Loginscreen')
        setDoc(doc(db, "Register",userCredential.user.uid), {
              email: inputs.email,
              Firstname: inputs.firstname,
              Lastname: inputs.Lastname,
              password: inputs.password,
              cpassword: inputs.cpassword,
            }).then(()=>{
                  console.warn("Register Succesfully")
                }).catch((error) => {
                  console.warn(error)
                })

      })
      .catch((error) => {
        alert('error')
      })
    }

    //   addDoc(collection(db, "Register"), {
    //     email: inputs.email,
    //     Firstname: inputs.firstname,
    //     Lastname: inputs.Lastname,
    //     password: inputs.password,
    //     cpassword: inputs.cpassword,
    //   }).then(()=>{
    //     console.warn("Register Succesfully")
    //   }).catch((error) => {
    //     console.warn(error)
    //   })
    // }
, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs (prevState => ({...prevState, [input]: text}));
  };
  
  const handleError = (errorMessage, input) =>{
    setErrors((prevState) => ({...prevState, [input]: errorMessage}))
  }
  
  return (
    
   
    <ImageBackground 
    source={require('../../../assets/bg/bgimage5.jpg')}
    
    style={[Universalstyles.signup, {height: 'auto'}]}>

      <Loader visible={loading}/>
        <ScrollView
        
        contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 20,
            flex:1,
             justifyContent: 'center',
            
        }}
        >
          {/* <View style={{flex:0,justifyContent:"center",alignItems:'center'}}>
          <Image style={{width:300,height:300,resizeMode:'contain'}} source={require("../../../assets/logo-no-background.png")}/>
          </View> */}
          <Logo/>
   
          <View style={[Universalstyles.signupbg, {height: 'auto'}]}>
      
         
          
          <Text style= {Universalstyles.txt}>

        Register account
        </Text>

     
        
            <Input 
            placeholder= 'Firstname' 
            iconName= 'account-outline' 
            
            error={errors.firstname}
            onFocus={() =>{
              handleError(null, 'firstname');
            }}
            onChangeText = {text => handleOnChange(text, 'firstname')}
            />

<Input 
            placeholder= 'Lastname' 
            iconName= 'account-outline' 
            
            error={errors.Lastname}
            onFocus={() =>{
              handleError(null, 'Lastname');
            }}
            onChangeText = {text => handleOnChange(text, 'Lastname')}
            />
            <Input 
            placeholder= 'Email' 
            iconName= 'email-outline' 
            
            error={errors.email}
            onFocus={() =>{
              handleError(null, 'email');
            }}
            onChangeText = {text => handleOnChange(text, 'email')}
            />

            <Input 
            
            placeholder= 'Password' 
            iconName= 'lock-outline' 
            password
            error={errors.password}
            onFocus={() =>{
              handleError(null, 'password');
            }}
            
            onChangeText = {text => handleOnChange(text, 'password')}
            />
            
            <Input 
            placeholder= 'Confirm password' 
            iconName= 'lock-outline' 
            password
            error={errors.cpassword}
            onFocus={() =>{
              handleError(null, 'cpassword');
            }}
            onChangeText = {text => handleOnChange(text, 'cpassword')}
            />

            <Button title='Register' onPress={validate}/>
            <Text 
           
            style={{textAlign: 'center', fontSize: 16, marginVertical: 20}}> Already have an account? 
              {' '}
            <Text 
            onPress={() => navigation.navigate('Loginscreen')}
            style={{color: 'blue'}}>Login</Text>
            </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signupscreen