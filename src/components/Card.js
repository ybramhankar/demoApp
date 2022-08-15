import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = props => {
  const [expand, setExpand] = useState(false);

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        setExpand(!expand);
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 15, color: '#410E68', fontWeight: 'bold'}}>
          #{props.data.id}
        </Text>
        {props.data.status == 'active' ? (
          <Icon name="check-circle" size={30} color={'#6DA937'} />
        ) : (
          <Icon name="times-circle" size={30} color={'#D24D4D'} />
        )}
      </View>

      <Text style={styles.cardName}>{props.data.name}</Text>

      <Text style={styles.cardTxt}>{`E-Mail ID:   ${props.data.email}`}</Text>
      <View style={styles.cardTxtContainer}>
        <Text style={styles.cardTxt}>
          {`Gender:   ${
            props.data.gender.charAt(0).toUpperCase() +
            props.data.gender.slice(1)
          }`}
        </Text>
        <Text style={styles.cardTxt}>
          {'Status:  '}
          <Text
            style={{
              color: props.data.status == 'active' ? '#6DA937' : '#D24D4D',
              fontSize: 14,
            }}>
            {props.data.status.charAt(0).toUpperCase() +
              props.data.status.slice(1)}
          </Text>
        </Text>
      </View>

      {expand ? (
        <View style={styles.cardTxtContainer}>
          <Text style={styles.cardTxt}> State: Maharastra </Text>
          <Text style={styles.cardTxt}> Country: India </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  cardName: {
    color: '#000',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  cardTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  cardTxt: {fontSize: 14, color: '#000'},
});
