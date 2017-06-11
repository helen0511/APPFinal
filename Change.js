import React, { Component } from 'react';
import { ScrollView, Image, Linking, StyleSheet, View } from 'react-native';
import { List, ListItem, Button, Icon, Text, Tile } from 'react-native-elements';

 const Change = () => {
   return (
     <ScrollView>
       <Image
         style={{ height: 330, width: 375 }}
         source={require('../assets/pic3.png')}
       />
       <List>
         <ListItem
           style={{ color: '#334559', backgroundColor: '#ececec', bottom: 2 }}
           title='Album'
         />
       </List>
       <List>
         <ListItem
           style={{ color: '#334559', backgroundColor: '#ececec', bottom: 2 }}
           title="Use Cemera"
         />
       </List>
       <List>
         <ListItem
           style={{ color: '#334559', backgroundColor: '#ececec', bottom: 2 }}
           title="Delete"
         />
       </List>
     </ScrollView>
    );
  };

export default Change;