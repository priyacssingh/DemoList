import React from 'react';
import { TextInput, Text, Modal, View } from 'react-native';

import styles from './alertStyles';
import Button from '../Button';
import { SUBMIT } from '../../constants/AppConstants';

const Alert = (props) => {
  const { modalVisible, onRequestClose, onPress, onChangeText, value } = props;
  return (
    <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>Hello World!</Text>
          <TextInput 
            value={value}
            onChangeText={onChangeText}
            underlineColorAndroid={'transparent'}
            style={styles.textInput}
            keyboardType={'numeric'}
            contextMenuHidden={true}
            maxLength={30}
            autoFocus={true}
          />
          <Button
          onPress={onPress}
          buttonLabel={SUBMIT}
          buttonStyle={styles.button}
          />
        </View>
      </Modal>
  )
}

export default Alert;