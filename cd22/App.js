import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container1}>
      <Text style={styles.paragraph1}>
      5 книжных новинок октября
      </Text>
      <View style={styles.container2}>
      <Text style={styles.paragraph2}>
      «Кадиш.com» Натан Ингландер.
Издательство «Книжники»
      </Text>
    </View>
    <View style={styles.container3}>
      <Text style={styles.paragraph3}>
      Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',

  },
  paragraph1: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  },

  paragraph2: {
    fontSize: 20,
    textAlign: 'center',
  },

  container3: {
    flex: 3,
    backgroundColor: '#A9A9A9',
  },

  paragraph3: {
    margin: 20,
    fontSize: 15,
    textAlign: 'center',
  },
});
