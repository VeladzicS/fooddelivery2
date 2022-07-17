import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {FONTS, SIZES, COLORS} from "../../constants";
import {AuthLayout} from "../index";
import  OTPInputView from "@twotalltotems/react-native-otp-input"
import {TextButton} from "../../components";

const Otp = ({navigation}) => {
    const [timer, setTimer] = React.useState(60)
    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if(prevTimer>0) {
                    return prevTimer -1
                } else {
                    return prevTimer
                }
            })
        }, 1000)

        return() => clearInterval(interval)
    }, [])
    return (
        <AuthLayout title="OPT Auth" subtitle="Code has been sent to you email" titleContainerStyle={{marginTop:SIZES.padding}}>
                 <View style={{flex:1,marginTop:SIZES.padding * 2}}>
                     <OTPInputView pinCount={4} style={{width:"100%", height:65}} codeInputFieldStyle={{width:65, height:65, borderRadius:SIZES.radius, backgroundColor:COLORS.lightGray2, color:COLORS.black, ...FONTS.h3}} onCodeFilled={(code) => {console.log(code)}}/>

                     <View style={{flexDirection:"row", justifyContent:"center", marginTop:SIZES.padding}}>
                          <Text style={{color:COLORS.darkGray, ...FONTS.body3}}>Didn't recieve code ?</Text>
                         <TextButton label={`Resend (${timer}s)`} disabled={timer == 0 ? false : true} buttonContainerStyle={{marginLeft:SIZES.base, backgroundColor:null}} labelStyle={{color:COLORS.primary, ...FONTS.h3}} onPress={() => setTimer(60)}/>
                     </View>

                 </View>
            <View>
                <TextButton label="Continue" buttonContainerStyle={{height:50, alignItems:"center", borderRadius:SIZES.radius, backgroundColor:COLORS.primary}} onPress={() => console.log("Continue")}/>
                <Text style={{color:COLORS.darkGray, textAlign:"center",marginTop:SIZES.padding, ...FONTS.body3}}>By signing up, you agree to our.</Text>
                <TextButton label="Terms and Conditions" buttonContainerStyle={{backgroundColor:null}} labelStyle={{color:COLORS.primary, ...FONTS.h3}} onPress={() => console.log("Terms")}/>
            </View>

        </AuthLayout>
    )
}

export default Otp;