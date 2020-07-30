
import React from 'react';

import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    return(
 <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>

    <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Professor</Title>
                            </View>
                        </View>

                    </View>

    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                                   label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem 
   
                            label="Upload Audio/Video"
                            onPress={() => {props.navigation.navigate('Upload Video/Audio')}}
                        />
                       <DrawerItem 
 
                            label="View Video"
                            onPress={() => {props.navigation.navigate('View Video')}}
                        />
                       <DrawerItem 

                            label="View Audio Transcript"
                            onPress={() => {props.navigation.navigate('View Audio Transcript')}}
                        />
                        <DrawerItem 

                            label="Upload Images"
                            onPress={() => {props.navigation.navigate('Upload Images')}}
                        />  
                         <DrawerItem 

                            label="View Images"
                            onPress={() => {props.navigation.navigate('View Images')}}
                        />    
    </Drawer.Section>
    </View>
      </DrawerContentScrollView>
</View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });