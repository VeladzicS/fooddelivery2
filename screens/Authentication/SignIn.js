import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {AuthLayout} from "../index";
import  {FONTS, SIZES,COLORS,icons} from "../../constants";
import {FormInput} from "../../components";

const SignIn = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    return (
      <AuthLayout title="Let's sign you in" subtitle="Welcome back you have been missed!">
         <View style={{flex:1, marginTop:SIZES.padding * 2}}>
           {/*  Form input section*/}
           <FormInput label="Email" keyboardType="email-address" autoCompleteType="email" onChange={(value) => setEmail(value)} errorMsg={emailError} appendComponent={
               <View style={{justifyContent:"center"}}>
                   <Image source={icons.correct} style={{height:20, width:20, tintColor:COLORS.green}}/>
               </View>
           }/>

             <FormInput label="Password" secureTextEntry={!showPass} keyboardType="email-address" autoCompleteType="email" onChange={(value) => setEmail(value)} errorMsg={emailError} appendComponent={
                 <View style={{justifyContent:"center"}}>
                     <Image source={icons.correct} style={{height:20, width:20, tintColor:COLORS.green}}/>
                 </View>
             }/>
            {/* Save forgot password section*/}
            {/* Sign in section*/}
            {/* Sign out section*/}
         </View>
      </AuthLayout>
    )
}

export default SignIn;