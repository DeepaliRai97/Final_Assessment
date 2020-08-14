import React, { Component } from 'react';
import {View,Text,TouchableOpacity,ImageBackground,TextInput,StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from "react-native-image-picker";

export default class EditProfileScreen extends Component{
     state = {
        photo:null,
    };
     handleChoosePhoto = ()=>{
        const options = {
            noData:true,
        };
          ImagePicker.launchImageLibrary(options,response=>{
              console.log ("response",response);
              if (response.uri){
                  this.setState({photo:response})
              }
          })
    };
    render(){
        const {photo}= this.state
    return(
        <View style={styles.container}>
            <View style={{margin:20}}>
               <View style={{alignItems:'center'}}>
                   {photo&&(
                       <Image source={{uri:photo.uri}}/>
                   )}
                   <TouchableOpacity onPress={this.handleChoosePhoto}>
                     <View style={styles.component}>
                       <ImageBackground source={{
                        uri:'https://api.adorable.io/avatars/80/abott@adorable.png',
                       }}
                       style={{height:100,width:100}}
                       imageStyle={{borderRadius:15}}>
                        <View style={styles.camera}>
                        <Icon name="camera" size={35} color="#fff"/>
                        </View>
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
                    <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>John Doe</Text>
                    </View>
                       <View style={styles.action}>
                       <FontAwesome name="user-o" size={20}/>
                       <TextInput
                         placeholder="First Name"
                         placeholderTextColor="#666666"
                         style={styles.textInput} 
                         autoCorrect={false}   
                       />
                    </View>
                    <View style={styles.action}>
                       <FontAwesome name="user-o" size={20}/>
                       <TextInput
                         placeholder="Last Name"
                         placeholderTextColor="#666666"
                         style={styles.textInput} 
                         autoCorrect={false}   
                       />
                   </View>
                   <TouchableOpacity onPress={()=>{}} style={styles.commandButton}>
                   <Text style={styles.panelButtonTitle} >Submit</Text>
                   </TouchableOpacity>
                </View>
           </View>
        )
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    commandButton:{
        padding:15,
        borderRadius:15,
        backgroundColor:'#FF6347',
        alignItems:'center',
        marginTop:10
    },
    panel:{
        padding:20,
        backgroundColor:'#FFFFFF',
        paddingTop:20,
    },
    header:{
        backgroundColor:'#FFFFFF',
        shadowColor:'#333333',
        shadowOffset:{widht:-1,height:-3},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    panelHeader:{
        alignItems:'center',
    },
    panelHandle:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:'#00000040',
        marginBottom:10
    },
    panelTitle:{
        fontSize:27,
        height:35,
    },
    panelSubtitle:{
        fontSize:14,
        color:'gray',
        height:30,
        marginBottom:10,
    },
    panelButton:{
        padding:13,
        borderRadius:10,
        backgroundColor:'#FF6347',
        alignItems:'center',
        marginVertical:7
    },
    panelButtonTitle:{
        fontSize:17,
        fontWeight:'bold',
        color:'white',
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    actionError:{
        flexDirection:'row',
            marginTop:10,
            borderBottomWidth:1,
            borderBottomColor:'#FF0000',
            paddingBottom:5
        
    },
    textInput:{
        flex:1,
        marginTop:-12,
        paddingLeft:10,
        color:'#05357a',
    },
    component:{
        height:100,
        width:100,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    } ,
    camera:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    } ,
    iconStyle:{
        opacity:0.7,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10
    }
    })
