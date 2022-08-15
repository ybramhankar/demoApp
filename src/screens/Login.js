import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import InputField from '../components/InputField';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior="height" style={styles.loginContainer}>
      <ScrollView>
        <View
          style={{
            marginTop: '30%',
          }}>
          <Image
            style={styles.logImg}
            source={require('../assets/images/logo.png')}
          />
        </View>

        <View
          style={{
            marginHorizontal: 30,
            marginTop: '20%',
          }}>
          <InputField
            label={'E-Mail Address'}
            img={'envelope-o'}
            inputVal={txt => {
              setEmail(txt);
            }}
          />

          <InputField
            label={'Password'}
            img={'lock'}
            isPassword={true}
            inputVal={txt => {
              setPassword(txt);
            }}
          />

          <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => {}}>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              props.page('Tasks');
            }}>
            <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  forgotPass: {
    fontSize: 16,
    color: '#707070',
  },
  logImg: {height: 150, width: 190, alignSelf: 'center'},
  loginButton: {
    height: 45,
    backgroundColor: '#410E68',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 70,
  },
});
