import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
const Height = Dimensions.get('window').height;
import Colors from '../assets/utilities/Colors';

export const HeartIcon = () => {
  const [favorites, setFavorites] = useState([]);
  const [starred, setStarred] = useState([]);
  const [showStar, setShowStar] = useState(false);

  const addToFavorites = item => {
    const updatedFavorites = [...favorites, item];
    setFavorites(updatedFavorites);

    if (!showStar) {
      setShowStar(true);

      setTimeout(() => {
        setShowStar(false);
      }, 5000);
    }
  };

  const removeFromFavorites = item => {
    const updatedFavorites = favorites.filter(fav => fav !== item);
    setFavorites(updatedFavorites);
    removeFromStarred(item);
    setShowStar(false);
  };

  const starItem = item => {
    const updatedStarred = [...starred, item];
    setStarred(updatedStarred);
  };

  const unstarItem = item => {
    const updatedStarred = starred.filter(star => star !== item);
    setStarred(updatedStarred);
  };

  const removeFromStarred = item => {
    const updatedStarred = starred.filter(star => star !== item);
    setStarred(updatedStarred);
  };

  const isFavorite = item => favorites.includes(item);
  const isStarred = item => starred.includes(item);

  const itemName = 'Item 1';
  const isItemFavorite = isFavorite(itemName);
  const isItemStarred = isStarred(itemName);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStar(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.fd}>
        <View style={styles.margin}>
          {isItemFavorite && (
            <Animatable.View
              animation={{
                0: {scale: 0, left: 0},
                0.5: {scale: 1.2, left: -35},
                1: {scale: 1, left: -50},
              }}
              // animation='wobble'
              duration={200}
              easing="ease-in-out">
              {showStar && (
                <TouchableOpacity
                  onPress={() =>
                    isItemStarred ? unstarItem(itemName) : starItem(itemName)
                  }
                  activeOpacity={0.7}>
                  <View style={styles.containerStar}>
                    <Icon
                      name={isItemStarred ? 'star' : 'star-o'}
                      size={Height * 0.023}
                      color={isItemStarred ? Colors.LIGHT_GREEN : Colors.GREEN}
                    />
                    <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                      Clients
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </Animatable.View>
          )}
        </View>

        <View>
          <TouchableOpacity
            onPress={() =>
              isItemFavorite
                ? removeFromFavorites(itemName)
                : addToFavorites(itemName)
            }
            activeOpacity={0.7}>
            <Animatable.View
              style={styles.containerHeart}
              animation={isItemFavorite ? 'tada' : undefined}>
              <Icon
                name={isItemFavorite ? 'heart' : 'heart-o'}
                size={Height * 0.023}
                color={isItemFavorite ? Colors.LIGHT_GREEN : Colors.GREEN}
              />
              {isItemFavorite && isItemStarred && (
                <View style={styles.starLabel}>
                  <Icon
                    name="star"
                    size={Height * 0.015}
                    color={Colors.LIGHT_GREEN}
                  />
                </View>
              )}
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  containerHeart: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Height * 0.04,
    width: Height * 0.04,
    borderRadius: Height * 0.02,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.GREY,
    marginBottom: Height * 0.05,
    flexDirection: 'row',
    marginRight: Height * 0.01,
    position: 'relative',
  },
  containerStar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Height * 0.06,
    width: Height * 0.06,
    borderRadius: Height * 0.03,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.GREY,
    marginBottom: Height * 0.05,
    backgroundColor: Colors.LIGHTER_GREEN,
    marginRight: Height * 0.01,
    position: 'absolute',
  },
  starLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  margin: {
    marginTop: -7,
  },
  fd: {
    flexDirection: 'row',
  },
});
