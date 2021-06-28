import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {removeDeck} from '../action'



function DeckPage({ route, navigation,dispatch }) {
    let deckQuizz = route.params.deck
    let decks = route.params.decks

    function handleDelete() {
        dispatch(removeDeck(deckQuizz))
        navigation.navigate('Quizz App!')
    }

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 80 }}>{route.params.deck.title}</Text>
        <Text style={{ fontSize: 35, color: '#989898' }}>{route.params.deck.questions.length} Cards</Text>
  
        <TouchableOpacity style={styles.btn}
          onPress={() => {
            navigation.navigate('Start Quiz', {
              deckQuizz
            });
          }}
        >
          <Text style={{ color: 'white' }}>
            Start Quizz
        </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.btn}
          onPress={() => {
            navigation.navigate('Add Card', {
              deckQuizz,
              decks
            });
          }}
        >
          <Text style={{ color: 'white' }}>
            Add Card
        </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={{ marginTop: 45, }}
        onPress = {() => handleDelete()}
        >
          <Text styles={{ color: 'red', fontSize: 35 }}>
            Delete Deck
          </Text>
        </TouchableOpacity>
      </View>
    )
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

export default connect()(DeckPage)