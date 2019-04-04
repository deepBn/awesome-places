import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ListItem
          placeName={item.place}
          onItemPressed={() => props.onItemDeleted(item.id)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;