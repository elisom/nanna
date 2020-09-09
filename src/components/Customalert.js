import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constant/colors';

const Customalert = ({text, color, bwidth, bheight}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View
        style={[
          styles.button,
          {width: bwidth, backgroundColor: color, height: bheight},
        ]}>
        <Text style={styles.text}>Lorem Ipsum</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 5,
  },
  text: {
    color: '#fff',
  },
  appName: {
    color: '#fff',
    fontFamily: 'MyriadPro-Regular',
    fontSize: 20,
  },
});

export default Customalert;
