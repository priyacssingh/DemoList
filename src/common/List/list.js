import React from 'react';
import { FlatList, View, Text } from 'react-native';

import styles from './listStyles';

const Item = (props) => {
  const { total, addSpent, date, name } = props;
  return (
  <View style={styles.item}>
      <Text style={styles.imageFont}>{'%'}</Text>
      <View>
      <View style={styles.justify}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{addSpent}</Text>
      </View>
      <View style={styles.justify}>
      <Text style={styles.imageFont}>{date}</Text>
        <Text style={styles.imageFont}>{total}</Text>
        </View>
      </View>
  </View>
  )
}

const List = (props) => {
  const { data } = props;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        const { total, addSpent, date, name } = item;
        return (
          <Item
            total={total}
            addSpent={addSpent}
            date={date}
            name={name}
          />
        )
      }
      }
      keyExtractor={item => item.id}
      style={styles.flatList}
    />
  )
}

export default List;