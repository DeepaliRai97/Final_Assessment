import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  Feather  from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';


const SignUp = ({ navigation }) => {
const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    check_nameInputChange: false,
    isValidUser:true,
    isValidEmail:true,
    isValidPassword:true,
});
  const nameInputChange = (val) => {
    if (val.trim().length >= 5) {
      setData({
        ...data,
        name: val,
        check_nameInputChange: true,
        isValidUser:true
      });
    } else {
      setData({
        ...data,
        name: val,
        check_nameInputChange: false,
        isValidUser:false
      });
    }
  }
  const textInputChange = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail:true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail:false
      });

    }
  }
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8){
    setData({
      ...data,
      password: val,
      isValidPassword:true,
    });
  }else{
    setData({
      ...data,
      password: val,
      isValidPassword:false
    })
  }
}
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }
  const onPressSubmit = async () => {
    console.log('hy');
    if (data.name.length == 0) return alert("Please enter name first");
    if (data.email.length == 0) return alert("Please enter email first");
    if (data.password.length == 0) return alert("Please enter password first");
  const dataTosent = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    await AsyncStorage.setItem('name', data.name)
    const storedEmail = await AsyncStorage.getItem('email')
    console.log(storedEmail);
    await AsyncStorage.setItem('email', data.email)
    await AsyncStorage.setItem('password', data.password)
    navigation.navigate('Sort')
  }
return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20} />
          <TextInput placeholder="name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => nameInputChange(val)}
            />
          {data.check_textInputChange ?
            <Feather name="check-circle"
              color="green"
              size={20} />
            : null}
        </View>
        {data.isValidUser?null:<Text style={styles.errorMsg}>Name must be 5 characters long</Text>}
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20} />
        <TextInput placeholder="email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ?
            <Feather name="check-circle"
              color="green"
              size={20} />
            : null}
        </View>
        {data.isValidEmail?null:<Text style={styles.errorMsg}> Enter Valid Email</Text>}
        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            color="#05375a"
            size={20} />
          <TextInput placeholder="password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
              <Feather name="eye-off"
                color="grey"
                size={20} /> : <Feather name="eye"
                  color="grey"
                  size={20} />}
          </TouchableOpacity>
        </View>
        {data.isValidPassword?null:<Text style={styles.errorMsg}>Password must be 8 characters long</Text>}
          <View style={styles.button}>
          <TouchableOpacity onPress={onPressSubmit}
            style={styles.signIn}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sign')}
            style={styles.signIn}>
            <Text style={styles.textSign}>Sign In</Text>
           </TouchableOpacity>
           </View>
      </View>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
  },
  signIn: {
    borderWidth: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#2F4F4F',
    marginTop: 10
  },
  textSign: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },
  errorMsg:{
    color:'#FF0000'
  }
})