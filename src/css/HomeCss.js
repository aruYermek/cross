import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        marginTop:40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      height: 60,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    scrollView: {
      flex: 1,
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      backgroundColor: '#FCE4EC',
      padding: 20,
      borderRadius: 10,
      margin: 10,
      // Add styles for your banner
    },
    bannerText: {
      fontSize: 20,
      fontWeight: 'bold',
      // Add more styles if needed
    },
    bannerImage: {
        width: '30%', 
        height: 100, // Set the desired height of the image
        resizeMode: 'cover', // Adjust the image to cover the entire container
        borderRadius: 10
      },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginHorizontal: 10,
      marginTop: 20,
    },
    goodsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    goodItem: {
      width: '40%',
      padding: 10,
      
    },
    goodImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
      // Add other styles as needed
    },
    goodName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
      
    },
    goodPrice: {
      fontSize: 16,
      marginTop: 5,
      borderWidth: 2,
      borderColor: '#FF65BB',
      backgroundColor: '#fff',
      color:'#FF65BB',
      borderRadius: 5,
      textAlign: 'center',
      padding: 7
    },
    flowerImage: {
      width: '100%',
      height: 200,
      // Add styles for flower images
    },
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 60,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
  });
  