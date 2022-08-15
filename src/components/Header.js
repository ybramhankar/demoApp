import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
  return (
    <View
      style={{
        backgroundColor: '#410E68',
        height: 69,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          props.page('Login');
        }}>
        <Icon name="chevron-circle-left" size={30} color={'#FFF'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bars" size={30} color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
