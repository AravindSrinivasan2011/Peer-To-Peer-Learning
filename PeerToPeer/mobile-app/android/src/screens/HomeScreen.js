import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

const HomeScreen = ({navigation}) => {

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image style={styles.logo} source={{uri:'https://i1.wp.com/abroadship.org/wp-content/uploads/2017/09/PLN7.jpg?fit=700%2C650eminar - Peer Learning - From Innovation to Strengthening Life ...'}}/>
          <Text style={styles.companyName}>PEER 2 PEER LEARNING</Text>
          <Text style={styles.slogan}>Learning Made Easy With Buddies!!</Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>
             We Believe Students learn a lot when they are with their Peer Buddy Students.
             Not Everyone in the class is capable of understanding what exactly the Professor says , but one or few Students in every class will be able to reciprocate the same in a simple form 
             Thus we Welcome you to our App : PEER TO PEER LEARNING . 

            </Text>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => {navigation.openDrawer()}}>
            <Text style={styles.buttonText}>Swipe</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }

  export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 10,
  },
  container: {
    flex: 25,
    alignItems: 'center',
    backgroundColor: '#03DAC6',
  },
  logo:{
    width:120,
    height:120,
    justifyContent: 'center',
    marginBottom:50,
    marginTop:10,
  },
  companyName: {
    fontSize:32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  slogan:{
    fontSize:18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop:10,
  },
  descriptionContent:{
    padding:30
  },
  description:{
    fontSize:15,
    textAlign:'center',
    marginTop:10,
    color: '#FFFFFF',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  sendButton: {
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: '#000000',
  }
}); 