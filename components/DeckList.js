import { View,Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {receiveDecks} from '../action'
import {connect} from 'react-redux'


class DeckList extends Component  {

    
 initialDecks = {
    React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      },
      EmptyTest: {
        title: 'EmptyTest',
        questions: [
         
        ]
      }
}

componentDidMount() {
   this.props.dispatch(receiveDecks(this.initialDecks))
}

render() {
const decks = this.props.decks
const decksArray = Object.values(decks)




return (
    <View>
    {decksArray[0] !== undefined

  ?  <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
      {decksArray.map((deck) => (
        <TouchableOpacity
          style={styles.deckContainer}
          onPress={() => {
            this.props.navigation.navigate('Deck Page', {
              deck,
              decks
            });

          }}
          key={deck.title}
        >
          <View >
            <Text>{deck.title}</Text>
            <Text>{deck.questions.length} Cards</Text>
          </View>
        </TouchableOpacity>

      ))}
    </View>

    : <View>
        <Text>You Didn't create any decks yet</Text>    
    </View>
}
</View>

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

    normalText: {
        fontSize: 32,
        marginBottom: 10,
        marginTop: 10,
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)