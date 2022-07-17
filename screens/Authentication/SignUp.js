import React from 'react';
import {
    View,
    Text, Image, TouchableOpacity
} from 'react-native';

import  {FONTS, SIZES, COLORS, icons} from "../../constants";

import {utils} from "../../utils"
import {AuthLayout} from "../index";
import {FormInput, TextButton, TextIconButton} from "../../components";

const SignUp = ({navigation}) => {

    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

   function isEnableSignUp() {
       return email != "" && username != "" && password != "" && emailError == "" && passwordError == "" && usernameError == ""
   }
    return (
        <AuthLayout title="Getting started" subtitle="Create an account to continue!" titleContainerStyle={{marginTop:SIZES.radius}}>

            {/*Form input and sign up*/}
            <View style={{flex:1, marginTop:SIZES.padding}}>
                <FormInput label="Email" keyboardType="email-address" autoCompleteType="email" onChange={(value) => {
                    utils.validateEmail(value, setEmailError)
                    setEmail(value)
                }} errorMsg={emailError}
                           appendComponent={
                               <View style={{justifyContent:"center"}}>
                                   <Image source={email == "" || (email != "" && emailError =="") ? icons.correct : icons.cancel} style={{height:20, width:20,
                                       tintColor: email == "" ? COLORS.gray : (email !="" && emailError =="") ? COLORS.green : COLORS.red}}/>
                               </View>
                           }/>

                <FormInput label="Username" containerStyle={{marginTop:SIZES.radius}} onChange={(value) => {
                    setUsername(value)
                }} errorMsg={usernameError}
                           appendComponent={
                               <View style={{justifyContent:"center"}}>
                                   <Image source={username == "" || (username != "" && usernameError =="") ? icons.correct : icons.cancel} style={{height:20, width:20,
                                       tintColor: username == "" ? COLORS.gray : (username !="" && usernameError =="") ? COLORS.green : COLORS.red}}/>
                               </View>
                           }/>
                <FormInput label="Password" secureTextEntry={!showPass}  autoCompleteType="password" onChange={(value) => {
                    utils.validatePassword(value, setPasswordError)
                    setPassword(value)
                }}  errorMsg={passwordError}
                           containerStyle={{marginTop:SIZES.radius}} appendComponent={
                    <TouchableOpacity style={{alignItems:"flex-end", width:40,justifyContent:"center"}} onPress={() => setShowPass(!showPass)}>
                        <Image source={showPass ? icons.eye_close : icons.eye} style={{height:20, width:20, tintColor:COLORS.gray}}/>
                    </TouchableOpacity>
                }/>

              {/*  Sing in SIng up */}

                <TextButton label="Sign Up" disabled={isEnableSignUp() ? false : true} buttonContainerStyle={{height:55, alignItems:'center', marginTop:SIZES.padding, borderRadius:SIZES.radius,backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary}} onPress={() => navigation.navigate("Otp")}/>

                <View style={{flexDirection:"row", marginTop:SIZES.radius, justifyContent:"center"}}>
                    <Text style={{color:COLORS.darkGray, ...FONTS.body3}}> Already have and account?</Text>
                    <TextButton label="Sign In" buttonContainerStyle={{backgroundColor:null, paddingLeft:SIZES.radius}} labelStyle={{color:COLORS.primary, ...FONTS.h3}} onPress={() => navigation.goBack()}/>
                </View>
                <View style={{  paddingTop:SIZES.padding, paddingBottom:SIZES.padding * 3}}>
                    <TextIconButton containerStyle={{height:50, alignItems:"center", borderRadius:SIZES.radius,  marginTop:SIZES.radius, backgroundColor:COLORS.blue}} icon={icons.fb} iconPosition="LEFT" iconStyle={{tintColor: COLORS.white}} labelStyle={{marginLeft:SIZES.radius, color:COLORS.white}} label="Continue with Facebook" onPress={() => console.log("Facebook")}/>

                    <TextIconButton containerStyle={{height:50, alignItems:"center", marginTop:SIZES.radius, borderRadius:SIZES.radius, backgroundColor:COLORS.lightGray2}} icon={icons.google} iconPosition="LEFT" iconStyle={{tintColor:null}} labelStyle={{marginLeft:SIZES.radius,}} label="Continue with Google" onPress={() => console.log("Google")}/>
                </View>

            </View>
        </AuthLayout>
    )
}

export default SignUp;