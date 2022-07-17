import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import {AuthLayout} from "../index";
import  {FONTS, SIZES,COLORS,icons} from "../../constants";
import {CustomSwitch, FormInput, TextButton, TextIconButton} from "../../components";
import {utils} from "../../utils";



const SignIn = ({navigation}) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != "" && password !="" && emailError == ""
    }
    return (
      <AuthLayout title="Let's sign you in" subtitle="Welcome back you have been missed!">
         <View style={{ flex:1, marginTop:SIZES.padding * 2}}>
           {/*  Form input section*/}
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

             <FormInput label="Password" secureTextEntry={!showPass}  autoCompleteType="password" onChange={(value) => setPassword(value)} containerStyle={{marginTop:SIZES.radius}} appendComponent={
                 <TouchableOpacity style={{alignItems:"flex-end", width:40,justifyContent:"center"}} onPress={() => setShowPass(!showPass)}>
                     <Image source={showPass ? icons.eye_close : icons.eye} style={{height:20, width:20, tintColor:COLORS.gray}}/>
                 </TouchableOpacity>
             }/>
            {/* Save forgot password section*/}
             <View style={{flexDirection:"row", marginTop:SIZES.radius, justifyContent:"space-between"}}>
                  <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)}/>

                 <TextButton label="Forgot Password" buttonContainerStyle={{backgroundColor:null}} labelStyle={{color:COLORS.gray, ...FONTS.body4}} onPress={() => navigation.navigate("ForgotPassword")}/>
             </View>
            {/* Sign in section*/}

             <TextButton label="Sign In" disabled={isEnableSignIn() ? false : true} buttonContainerStyle={{height:55, alignItems:"center", marginTop:SIZES.padding, backgroundColor:isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary, borderRadius:SIZES.radius}}/>
            {/* Sign out section*/}
             <View style={{flexDirection:"row", marginTop:SIZES.radius, justifyContent:"center"}}>
                 <Text style={{color:COLORS.darkGray, ...FONTS.body3}}>
                     Don't have an account?
                 </Text>

                 <TextButton label="Sign Up" buttonContainerStyle={{backgroundColor:null, marginLeft:3}} labelStyle={{color:COLORS.primary, ...FONTS.h3 }} onPress={() => navigation.navigate("SignUp")}/>

             </View>
             {/*   FOOTER*/}

             <View style={{  paddingTop:SIZES.padding, paddingBottom:SIZES.padding * 3}}>
                 <TextIconButton containerStyle={{height:50, alignItems:"center", borderRadius:SIZES.radius,  marginTop:SIZES.radius, backgroundColor:COLORS.blue}} icon={icons.fb} iconPosition="LEFT" iconStyle={{tintColor: COLORS.white}} labelStyle={{marginLeft:SIZES.radius, color:COLORS.white}} label="Continue with Facebook" onPress={() => console.log("Facebook")}/>

                 <TextIconButton containerStyle={{height:50, alignItems:"center", marginTop:SIZES.radius, borderRadius:SIZES.radius, backgroundColor:COLORS.lightGray2}} icon={icons.google} iconPosition="LEFT" iconStyle={{tintColor:null}} labelStyle={{marginLeft:SIZES.radius,}} label="Continue with Google" onPress={() => console.log("Google")}/>
             </View>


         </View>

      </AuthLayout>
    )
}

export default SignIn;