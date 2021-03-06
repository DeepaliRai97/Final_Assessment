import React from 'react';
import {StyleSheet,View,SafeAreaView} from 'react-native';
import{ Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop:15}}>
               <Avatar.Image
               source={{
                   uri:'https://api.adorable.io/avatars/80/abott@adorable.png',
               }}
               size={80}
               />
            <View style={{marginLeft:20}}>
            <Title style={[styles.title,{
                marginTop:15,
                marginBottom:5
            }]}
            >John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
            </View>
            </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20}/>
                <Text style={{color:"#777777",marginLeft:20}}>Kolkata, India</Text>
             </View>
             <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20}/>
                <Text style={{color:"#777777",marginLeft:20}}>+91-900000000</Text>
             </View>
             <View style={styles.row}>
                <Icon name="email" color="#777777" size={20}/>
                <Text style={{color:"#777777",marginLeft:20}}>abc@gmail.com</Text>
             </View>
             </View>

           <View style={styles.menuWrapper}>
               <TouchableRipple onPress={()=>{}}>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="shopping-cart"
                color="#05375a"
                size={25} />
                       <Text style={styles.menuItemText}>My Cart</Text>
                   </View>
               </TouchableRipple>
           </View>
           <View style={styles.menuWrapper}>
               <TouchableRipple onPress={()=>{navigation.navigate('Sign')}}>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="sign-out"
                color="#05375a"
                size={25} />
                       <Text style={styles.menuItemText}>LogOut</Text>
                   </View>
               </TouchableRipple>
           </View>
           <View style={styles.menuWrapper}>
               <TouchableRipple onPress={()=>{navigation.navigate('EditProfileScreen')}}>
                   <View style={styles.menuItem}>
                       <FontAwesome
                name="user-o"
                color="#05375a"
                size={25} />
                       <Text style={styles.menuItemText}>Edit Profile Pic</Text>
                   </View>
               </TouchableRipple>
           </View>
        
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    userInfoSection:{
        paddingHorizontal:30,
        marginBottom:25,
    },
    title:{
        fontSize:14,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight:'500',
    },
    row:{
        flexDirection:'row',
        marginBottom:10,
    },
    infoBoxWrapper:{
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        height:100
    },
    infoBox:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
    },
    menuWrapper:{
        marginTop:10,
    },
    menuItem:{
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:30,
    },
    menuItemText:{
        color:'#777777',
        marginLeft:20,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26
    },
})

export default ProfileScreen;