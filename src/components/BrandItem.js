import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import colors from '../constant/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppContext from '../context/Context';
import url from '../constant/url';

const BrandItem = ({
  name,
  image,
  onPress,
  showLike,
  productId,
  mainProducId,
}) => {
  const {isLarge} = useContext(AppContext);
  const [liked, setLiked] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.brandIconsWrap, isLarge && styles.largeCard]}>
        <Image
          style={styles.image}
          source={require('../assets/img/Mask.png')}
        />
        <Text style={[styles.brandName, isLarge && {fontSize: 20}]}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BrandItem;

const styles = StyleSheet.create({
  brandIconsWrap: {
    height: 130,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 20,
    elevation: 3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  largeCard: {
    height: 160,
    width: 120,
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  brandName: {
    textAlign: 'center',
    color: colors.lightBlack,
    fontFamily: 'Raleway-Regular',
  },
  heart: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 50,
    position: 'absolute',
    top: -15,
    right: -15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
