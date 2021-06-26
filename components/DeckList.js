import { View,Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import {receiveDecks} from '../action'
import {connect} from 'react-redux'


class DecksList extends Component  {

    
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
        title: 'EmptyTest!',
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

    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>

        {/* <TouchableOpacity style={styles.deckContainer}>    */}
                <Text>{JSON.stringify(decks['JavaScript'])}</Text>
                <Text>{}</Text>
        {/* </TouchableOpacity> */}

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

export default connect(mapStateToProps)(DecksList)