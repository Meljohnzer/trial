import { Dimensions, StyleSheet } from 'react-native'

export const Universalstyles = StyleSheet.create({

signup: {
    backgroundColor : '#afc4ff' , 
    flex: 1,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
   
},

signupbg: {
    marginVertical: 20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 10,
},
signwith: {
    borderColor: '#e8e8e8',
    borderTopWidth: 1,
    marginVertical: 10,
    fontWeight: '500',
    textAlign: 'center'
    
},

Signwith: {
    display: "flex", 
    flexDirection: "row", 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "space-around",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    
},

Ggl: {
    width: 50,
    height: 60,
    resizeMode: 'center'
},
Fb: {
    width: 50,
    height: 60,
    resizeMode: 'center'
},
Apl: {
    width: 45,
    height: 60,
    resizeMode: 'center'
},

txt: {
    color: '#2f2f2f', 
    paddingVertical: 10,  
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: '500',
},

errotxt: {
    color: 'red', 
    fontSize: 12,
    marginTop: 7, 
    marginHorizontal: 5
},

input:{

}

})

export default Universalstyles;