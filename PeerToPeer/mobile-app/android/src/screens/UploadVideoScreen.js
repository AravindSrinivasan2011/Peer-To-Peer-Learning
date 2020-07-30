import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,Alert,TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {add} from './lib/Utils'
import { ScrollView } from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';

const Tab = createMaterialBottomTabNavigator();

const serverUrl = 'http://localhost:3000';


const UploadVideoScreen = function ({ navigation }) {


  
  const clearItem = { name:' ',stclass:' ',subject:' ',video:' '}
  const [item, setItem] = React.useState(clearItem);

  const pickFromGallery = async () => {
  
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);

      setItem({ ...item, video: res.uri});

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  
  
  }

  const sendItem = () => {

    const payload = {
      ...item
    };

    add(payload)
      .then(() => {
        Alert.alert('Thank you!', 'Video has been uploaded successfully.', [{text: 'OK'}]);
        setItem({ ...clearItem });
      })
      .catch(err => {
        console.log(err);
        Alert.alert('ERROR', 'Please try again. If the problem persists contact an administrator.', [{text: 'OK'}]);
      });
      

  };

  
  return(
    <ScrollView style={styles.outerView}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.textInput}
        value={item.name}
        onChangeText={(t) => setItem({ ...item, name: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='enter name'
        blurOnSubmit={false}
      />

    <Text style={styles.label}>Class</Text>
      <TextInput
        style={styles.textInput}
        value={item.stclass}
        onChangeText={(t) => setItem({ ...item, stclass: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='Enter class'
      />

    <Text style={styles.label}>Subject</Text>
      <TextInput
        style={styles.textInput}
        value={item.subject}
        onChangeText={(t) => setItem({ ...item, subject: t})}
        onSubmitEditing={sendItem}
        returnKeyType='send'
        enablesReturnKeyAutomatically={true}
        placeholder='Enter subject'
      />  
      

      <TouchableOpacity onPress={pickFromGallery}>
          <Text style= {styles.button}>
            Upload Video/Audio from Gallery
          </Text>
        </TouchableOpacity>

        {
        item.name.trim() !== '' &&
        item.stclass.trim() !== '' &&
        item.subject.trim() !== '' &&
        <TouchableOpacity onPress={sendItem}>
          <Text style={styles.button}>Upload</Text>
        </TouchableOpacity>
        
      }

       
      </ScrollView>
  );   
};

export default UploadVideoScreen;

const styles = StyleSheet.create({
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
    flex: 1,
    borderColor: '#D0E2FF',
    borderWidth: 2,
    padding: 14,
    elevation: 2,
    marginBottom: 25
  },
  inputStyle:{
    margin:5
  }
});