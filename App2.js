import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';










function DecksList({ navigation }) {
  let decksArray = Object.values(decks)
  return (


    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
      {decksArray.map((deck) => (
        <TouchableOpacity
          style={styles.deckContainer}
          onPress={() => {
            navigation.navigate('Deck Page', {
              deck
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
  );
}

function DeckPage({ route, navigation }) {
  let deckQuizz = route.params.deck
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
            deckQuizz
          });
        }}
      >
        <Text style={{ color: 'white' }}>
          Add Card
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 45, }}>
        <Text styles={{ color: 'red', fontSize: 35 }}>
          Delete Deck
        </Text>
      </TouchableOpacity>
    </View>
  )
}

function startQuiz({ route }) {
  let Deck = route.params.deckQuizz
 

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
  }
  else {
    setQuestionsTracker(QuestionsTracker+1)
  }
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
    </View>

    : <View>
      <Text style={styles.normalText}>Sorry this deck don't have any cards!</Text>
      </View>}


    </View>
    }
    </View>
  )
}

function AddCard ({route,navigation}) {
  let Deck = route.params.deckQuizz
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  function handleAddCard () {
    decks[Deck.title].questions.concat({
      question:{question},
      answer:{answer}
    })
   // navigation.goBack()
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.normalText}>{decks[Deck.title].title} Quizz</Text>

      <View style={{ padding: 10 }}>
        <TextInput
          style={{ marginTop: 30 }}
          placeholder="Enter Question"
          onChangeText={question => setQuestion(question)}
          defaultValue={question}
        />


      </View>

      <View style={{ padding: 10 }}>
        <TextInput
          style={{ marginTop: 30 }}
          placeholder="Enter Answer"
          onChangeText={answer => setAnswer(answer)}
          defaultValue={answer}
        />


      </View>

      <TouchableOpacity style={styles.btn}
      onPress ={() => handleAddCard()}
      >
        <Text style={{ color: 'white' }}>
          Submit
      </Text>
      </TouchableOpacity>
      

    </View>
  )
}


function AddDeck({ navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, alignSelf: 'center' }}>What is the title of your new deck?</Text>

      <View style={{ padding: 10 }}>
        <TextInput
          style={{ marginTop: 30 }}
          placeholder="Enter Deck title"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />


      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: 'white' }}>
          Submit
      </Text>
      </TouchableOpacity>
    </View>
  );
}

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
        component={DecksList}
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
      <Stack.Screen name="Decks List" component={DecksList} />
      <Stack.Screen name="Add Deck" component={AddDeck} />
      <Stack.Screen name="Deck Page" component={DeckPage} />
      <Stack.Screen name="Start Quiz" component={startQuiz} />
      <Stack.Screen name="Add Card" component={AddCard} />

    </Stack.Navigator>
  );
}


export default function App() {

  const [decks,setDecks] = useState({
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
  });
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>


  );
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