import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,FlatList,Alert,TextInput,SafeAreaView,Image } from 'react-native';
import {search} from './lib/Utils'
import { ListItem} from 'react-native-elements';

const ViewImageScreen = function ({ navigation }) {

    const [items, setItems] = React.useState([]);
    const [info, setInfo] = React.useState('');
    const [query, setQuery] = React.useState({  name: '' });

    const Item = (props) => {
    return (
        <ListItem
        containerStyle={styles.listItem}
        title={props.name}
        subtitle={`Grade: ${props.stclass}`}
        titleStyle={styles.titleStyle}
        subtitleStyle={styles.subtitleStyle}
        leftAvatar={{
          size: 'large',
          rounded: false,
          source: 'https://static.toiimg.com/photo/72975551.cms' && { uri: 'https://static.toiimg.com/photo/72975551.cms' }
        }}
        
      />


      );
    };

   
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

export default ViewImageScreen;

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
    },
    listItem: {
        marginTop: 8,
        marginBottom: 8
      },
      titleStyle: {
        fontSize: 30
      },
      subtitleStyle: {
        fontSize: 18
      },
      imagePreview: {
        height: 300,
        width: 300,
        backgroundColor: 'purple',
        marginTop: 30,
      }
  });