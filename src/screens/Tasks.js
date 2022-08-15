import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import BottomNavigation from '../components/BottomNavigation';

const Tasks = props => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setData([]);
    setRefresh(true);
    callAPI();
    setRefresh(false);
  };

  const callAPI = () => {
    fetch('https://gorest.co.in/public/v1/users')
      .then(res => res.json())
      .then(data => setData(data.data));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Header page={props.page} />
      <View style={{margin: 10, marginHorizontal: 30, flex: 1}}>
        <Text style={styles.pageTitle}>Tasks</Text>
        <Text style={styles.pageSubTitle}>Serach Results</Text>

        {data.length ? (
          <FlatList
            style={{}}
            data={data ? data : []}
            showsVerticalScrollIndicator={false}
            onRefresh={() => {
              onRefresh();
            }}
            refreshing={refresh}
            renderItem={({item}) => {
              return <Card data={item} />;
            }}
          />
        ) : (
          <ActivityIndicator size="large" color="#410E68" />
        )}
      </View>
      <BottomNavigation />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  pageTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#410E68',
  },
  pageSubTitle: {fontSize: 14, fontStyle: 'italic', color: '#9D9B9B'},
});
