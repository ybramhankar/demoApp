import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavigation = () => {
  return (
    <View style={styles.naviContainer}>
      <TouchableOpacity style={styles.naviContent}>
        <Icon name="view-dashboard-outline" size={30} color={'#CFCFCF'} />
        <Text style={styles.naviTxt}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.naviContent}>
        <Icon name="file-document-outline" size={30} color={'#CFCFCF'} />
        <Text style={styles.naviTxt}>Audit Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.naviContent}>
        <Icon name="account-outline" size={30} color={'#CFCFCF'} />
        <Text style={styles.naviTxt}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  naviContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 67,
    borderTopWidth: 1,
    borderTopColor: '#CFCFCF',
  },
  naviContent: {
    borderColor: '#CFCFCF',
    borderWidth: 1,
    flex: 1,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  naviTxt: {
    color: '#CFCFCF',
    fontSize: 16,
  },
});
