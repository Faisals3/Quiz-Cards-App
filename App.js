import React, { useState,Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import { receiveDecks } from './action';



const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="DecksList"
        component={DeckList}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Deck"
        component={AddDeck}
        options={{
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-box" size={26} color={color} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quizz App!" component={MyTabs} />
      <Stack.Screen name="Decks List" component={DeckList} />
      <Stack.Screen name="Add Deck" component={AddDeck} />
      {/* <Stack.Screen name="Deck Page" component={DeckPage} />
      <Stack.Screen name="Start Quiz" component={startQuiz} />
      <Stack.Screen name="Add Card" component={AddCard} /> */}

    </Stack.Navigator>
  );
}


class App extends Component {


  render() {

  
  return (
    <Provider store={createStore(reducer)}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </Provider>


  );
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 0.1,
    padding: 20,
    borderWidth: 5,
    borderRadius: 30,
    width: 360,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn: {
    backgroundColor: 'black',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 50,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'

  },
  correctBtn: {
    backgroundColor: 'green',
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 50,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'

  },
  incoreectBtn: {
    backgroundColor: 'red',
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 50,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'

  },

  normalText : {
    fontSize:32,
    marginBottom:10,
    marginTop:10,
  }
})

export default App