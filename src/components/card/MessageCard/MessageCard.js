import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

import styles from './MessageCard.style';

function MessageCard({message, onBanane}) {
  const fomarttedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  // ismin ilk harifini büyük yapma
  const names = [message.username];
  const uppercased = names.map(
    name => name.charAt(0).toUpperCase() + name.substr(1),
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{uppercased}</Text>
        <Text style={styles.date_text}>{fomarttedDate}</Text>
      </View>
      <View>
        <Text style={styles.content_text}>{message.text}</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
            {!!message.dislike && (
              <View style={styles.dislike_count_container}>
                <Text style={styles.dislike_count_text}>{message.dislike}</Text>
              </View>
            )}
            <Text style={styles.dislike_text}>bana ne?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MessageCard;
