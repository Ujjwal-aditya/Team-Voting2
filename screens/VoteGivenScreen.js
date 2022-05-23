import React,{Component} from "react";
import {Text,Stylesheet,View} from "react-native";

export default class VoteGiven extends Component
{
    render()
    {
        return(
            <View style = {styles.VoteGivenPage}>
            <Text style = {styles.text}>YOUR VOTE HAS BEEN SUCCESFULLY SUBMITTED</Text>
            </View>
        )
    }
}
const  styles = Stylesheet.create({
    VoteGivenPage : 
    {
        backgroundcolor : "red",
        alignItems : center,
        padding : 50,
        margin : 50
    }
    ,
    text:
    {
        color : "white",
        padding : 20,
        borderWidth : 5,
        borderColor : "black",
        borderRadius : 10
    }
})