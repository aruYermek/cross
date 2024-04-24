import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './css/HomeCss';


export const MainPage = () => {
  const popularGoods = [
    { name: 'Bouquet', price: '35 990₸', image: require('../img/bouquet1.jpg') },
    { name: 'Designer bouquet "winx"', price: '24 990₸', image: require('../img/bouquet2.jpg') },
    // ... more goods
  ];

  const flowers = [
    { name: 'Tulip', price: '1 990₸', image: require('../img/tulip.jpg') },
    { name: 'Rose', price: '1 790₸', image: require('../img/rose.jpg') },
    // ... more flowers
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="chevron-left" size={24} color="#000" />
        <Text style={styles.title}>Garden Elegance</Text>
        <Icon name="magnify" size={24} color="#000" />
      </View>

    {/* Main Content */}
    <ScrollView style={styles.scrollView}>
    {/* Promotional Banner */}
    <View style={styles.banner}>
        <Text style={styles.bannerText}>Try a new service</Text>
        <Image source={require('../img/ads.jpg')} 
        style={styles.bannerImage} 
        />
    </View>


        {/* Popular Goods Section */}
        <Text style={styles.sectionTitle}>Popular goods</Text>
        <View style={styles.goodsContainer}>
          {popularGoods.map((item, index) => (
            <View key={index} style={styles.goodItem}>
              <Image source={item.image} style={styles.goodImage} />
              <Text style={styles.goodName}>{item.name}</Text>
              <Text style={styles.goodPrice}>{item.price}</Text>
            </View>
          ))}
        </View>

        {/* Flowers Section */}
        <Text style={styles.sectionTitle}>Flowers</Text>
        <View style={styles.goodsContainer}>
          {flowers.map((item, index) => (
            <View key={index} style={styles.goodItem}>
              <Image source={item.image} style={styles.flowerImage} />
              <Text style={styles.goodName}>{item.name}</Text>
              <Text style={styles.goodPrice}>{item.price}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="home" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="magnify" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="cart" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="heart" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="account" size={30} color="#000" />
          </TouchableOpacity>
</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;