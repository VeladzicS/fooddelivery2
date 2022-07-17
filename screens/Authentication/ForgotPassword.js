import React from 'react';
import {
    View,
    Text, Image
} from 'react-native';

import {FONTS, SIZES, COLORS, icons} from "../../constants";
import {utils} from "../../utils"
import {AuthLayout} from "../index";
import {FormInput, TextButton} from "../../components";

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("")
    
    
    function isEnabledSendEmail() {
        return email != "" && emailError == ""
    }

    return (
        <AuthLayout title="Password Recovery" subtitle="Please enter your email adress to recover your password!" titleContainerStyle={{marginTop:SIZES.padding}}>
            <View style={{
                flex:1,
                marginTop:SIZES.padding
            }}>
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


            </View>
            <TextButton label="Send Email" disabled={isEnabledSendEmail() ? false : true} buttonContainerStyle={{height:55, alignItems:"center", borderRadius:SIZES.radius, backgroundColor:isEnabledSendEmail() ? COLORS.primary : COLORS.transparentPrimary}} onPress={() => navigation.goBack()} />
        </AuthLayout>
    )
}

export default ForgotPassword;