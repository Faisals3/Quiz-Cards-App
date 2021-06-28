import React , {useState} from 'react'
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native'

export default function startQuiz({ route , navigation}) {
    let Deck = route.params.deckQuizz

    let deck = route.params.deckQuizz
    let decks = route.params.decks
   
  
  const[QuestionsTracker,setQuestionsTracker] = useState(0);
  const [face, setface] = useState('question');
  const [score,setScore] = useState(0)
  
  function handleFace() {
    if(face === 'question') {
      setface('ans')
    }
    else 
    setface('question')
  }

  
  
  function handleQuestion(answer) {
    if(answer==='correct') {
      setScore(score+1)
      setQuestionsTracker(QuestionsTracker+1)
      setface('question')
    }
    else {
      setQuestionsTracker(QuestionsTracker+1)
      setface('question')
    }
  }

  function RestartQuiz() {
    setQuestionsTracker(0)
    setScore(0)
  }

  function backToDeck() {
    navigation.navigate('Deck Page' , {
        deck,
        decks
    })
  }
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {QuestionsTracker < Deck.questions.length
      ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, marginBottom: 25 }}>{Deck.title} Quizz!!</Text>
        
          <Text style={styles.normalText}>Card {QuestionsTracker + 1 + '/' + Deck.questions.length}</Text>
  
          <View>
          {face === 'question' 
          ? <Text style={styles.normalText}>{Deck.questions[QuestionsTracker].question}</Text>
          : <Text style={styles.normalText}>{Deck.questions[QuestionsTracker].answer}</Text> }
          
  
          </View>
  
          <TouchableOpacity
          style={{justifyContent:'center',alignItems:'center',marginTop:20,marginBottom:20}}
          onPress = {() => handleFace()}
          >
            {face === 'question' 
          ? <Text style={{ color: 'red' , fontSize:25}}>
            Show Answer!
          </Text>
  
         : <Text style={{ color: 'red' , fontSize:25}}>
            Show Question!
          </Text>
        } 
        </TouchableOpacity>
  
          <TouchableOpacity style={styles.correctBtn}
          onPress = {() => handleQuestion('correct')}
          >
          <Text style={{ color: 'white' }}>
            Correct
        </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.incoreectBtn}
        onPress = {() => handleQuestion('notCorrect')}>
          <Text style={{ color: 'white' }}>
            Incorrect
        </Text>
        </TouchableOpacity>
  
  
        
      </View>
  
      : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {Deck.questions.length !== 0
      ? <View>
        <Text style={{ fontSize: 30, marginBottom: 25 }}>{Deck.title} Quizz!!</Text>
        <Text style={styles.normalText}>Score : {score + '/' + Deck.questions.length}</Text>
        <TouchableOpacity style={styles.btn}
          onPress = {() => RestartQuiz()}
          >
          <Text style={{ color: 'white' }}>
            Restart Quiz
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
          onPress = {() => backToDeck()}
          >
          <Text style={{ color: 'white' }}>
            Back to deck
        </Text>
        </TouchableOpacity>
      </View>
  
      : <View>
        <Text style={styles.normalText}>Sorry this deck don't have any cards!</Text>
        </View>}
  
  
      </View>
      }
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
  
    normalText : {
      fontSize:32,
      marginBottom:10,
      marginTop:10,
    }
  })
  