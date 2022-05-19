import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';

import styles from './ContentInputModal.style';

function ContentInputModal({visible, onClose, onSend}) {
  const [text, setText] = useState('');

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input_text}
            placeholder="Darla hadi milleti.."
            placeholderTextColor="gray"
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
}

export default ContentInputModal;
