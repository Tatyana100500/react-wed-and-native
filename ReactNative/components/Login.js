import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
const testUser = { name: 'Sofia', password: '54321'}

const LoginForm = (props) => {
	
  const {navigation} = props;
  const {navigate} = navigation;
  const [error, setError] = useState(null);
  const [userLogin, setLogin] = useState('');
  const [userPassword, setPassword] = useState('');
  
  const handleSubmit = () => {
	if(userLogin === testUser.name && userPassword === testUser.password) {
	  navigate('PostsList');
	  setError(null)
	} else {
	  setError('Неверный логин или пароль')
	  navigate('Login');
	}
}

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Login Form </Text>
	  <Text style={styles.error}>{error ? error : ''}</Text>
      <View>
        <TextInput 
		placeholder="Enter Login" 
		style={styles.inputStyle}
		onChangeText={newText => setLogin(newText)}
        defaultValue={userLogin}
		 />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.inputStyle}
		  onChangeText={newText => setPassword(newText)}
          defaultValue={userPassword}
        />
		<Button title="Click here to login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  error: {
    color: 'red',
    fontSize: 22,
  },
});

export default LoginForm;
