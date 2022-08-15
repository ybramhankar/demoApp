import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputField = props => {
  return (
    <View style={{}}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <Icon name={props.img} size={17} color={'#CFCFCF'} />

        <TextInput
          style={styles.input}
          secureTextEntry={props.isPassword ? true : false}
          placeholder={props.placeholder}
          onChange={txt => props.inputVal(txt)}
        />
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 18,
    color: '#707070',
    marginBottom: 7,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
  },

  img: {
    height: 16,
    width: 20,
  },

  input: {
    fontSize: 16,
    color: '#000',
    flex: 1,
    marginHorizontal: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderRadius: 10,
    paddingHorizontal: 14,
  },
});
