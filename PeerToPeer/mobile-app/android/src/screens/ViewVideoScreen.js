import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,FlatList,Alert,TouchableHighlight,Linking,TextInput } from 'react-native';

import {search} from './lib/Utils'

const ViewVideoScreen = function ({ navigation }) {

    const [items, setItems] = React.useState([]);
    const [info, setInfo] = React.useState('');
    const [query, setQuery] = React.useState({  name: '' });

    const Item = (props) => {

       return (
        <TouchableOpacity style={styles.itemTouchable}>
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{props.name}</Text>
            <Text style={styles.itemName}> {props.stclass} </Text>
            <Text style={styles.itemName}>{props.subject}</Text>

            <TouchableHighlight
            underlayColor="rgba(200,200,200,0.6)"
            onPress={openVideo.bind(this,props.video)}
            >
          <Text style={styles.itemName}>Watch Video</Text>
         </TouchableHighlight>
          </View>
        </TouchableOpacity>

      );
    };

    const openVideo = (video1)  => {
     
      Linking.openURL(video1).catch(err =>
        console.error("An error occurred opening the link", err)
      );
    }

    const searchItem = () => {

      const payload = {
        ...query
      };
  
      search(payload)
          .then((results) => {
            setInfo(`${results.length} result(s)`)
            setItems(results);
          })
          .catch(err => {
            console.log(err);
            Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
          });
      };

        return(

      <View style={styles.outerView}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          value={query.name}
          onChangeText={(t) => setQuery({ ...query, name: t})}
          onSubmitEditing={searchItem}
          returnKeyType='send'
          enablesReturnKeyAutomatically={true}
          placeholder='e.g., Aravind'
          blurOnSubmit={false}
            />

      <Text style={styles.label}>Grade</Text>
        <TextInput
          style={styles.textInput}
          value={query.stclass}
          onChangeText={(t) => setQuery({ ...query, stclass: t})}
          onSubmitEditing={searchItem}
          returnKeyType='send'
          enablesReturnKeyAutomatically={true}
          placeholder='e.g., 12'
          blurOnSubmit={false}
            />
        
           <TouchableOpacity onPress={searchItem}>
                <Text style={styles.button}>Search</Text>
            </TouchableOpacity>

            <Text style={styles.searchResultText}>{info}</Text>

              <FlatList style={styles.flatListView}
                   data={items}
                   renderItem={({ item }) => 
                   
                   <Item {...item} />}
                   keyExtractor={item => item.id || item['_id']}
            />

        </View>



        );
};

export default ViewVideoScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    button: {
      backgroundColor: '#03DAC6',
      color: '#FFFFFF',
      fontFamily: 'IBMPlexSans-Medium',
      fontSize: 16,
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      marginTop: 15
    },  
    outerView: {
      flex: 1,
      padding: 22,
      backgroundColor: '#FFF'
    },  
    label: {
      fontFamily: 'IBMPlexSans-Medium',
      color: '#000',
      fontSize: 14,
      paddingBottom: 5
    },  
    quantityArea: {
      width: '40%'
    },
    textInput: {
      fontFamily: 'IBMPlexSans-Medium',
      backgroundColor: '#fff',
      padding: 8,
      marginBottom: 10,
      marginBottom: 10
    },
    inputStyle:{
      margin:5
    },
    flatListView: {
        backgroundColor: '#FFF'
    },
    itemTouchable: {
      flexDirection: 'column',
      padding: 15,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      borderBottomColor: '#dddddd',
      borderBottomWidth: 0.25
    },
    itemView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    itemName: {
      fontSize: 14,
      fontFamily: 'IBMPlexSans-Medium',
    },
    itemQuantity: {
      fontSize: 14,
      fontFamily: 'IBMPlexSans-Medium',
      color: 'gray'
    },
    itemDescription: {
      fontSize: 14,
      fontFamily: 'IBMPlexSans-Medium',
      color: 'gray'
    },
    videoTile: {
      alignSelf: "center",
      fontSize: 16,
      marginTop: 15
    }
  });