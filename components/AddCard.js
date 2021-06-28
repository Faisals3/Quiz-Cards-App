import React , {useState,Component} from 'react' 
import {View , Text , TextInput , StyleSheet , TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addCard} from '../action'



function AddCard ({route,navigation,dispatch}) {
    let Deck = route.params.deckQuizz
   
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
  
    function handleAddCard () {
        
     const card = {
         title:Deck.title,
         card : {
         question:question,
         answer:answer
         }
     }

     dispatch(addCard(card))

     navigation.navigate('Quizz App!')
     
    }
  
  
    return (

        <View>
        {Deck !== undefined
    
      ?

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.normalText}>{Deck.title} Quizz</Text>
       
        
        <View style={{ padding: 30}}>
          <TextInput
            style={{ marginTop: 30 , height:20 }}
            placeholder="Enter Question"
            onChangeText={question => setQuestion(question)}
            defaultValue={question}
          />
  
  
        </View>
  
        <View style={{ padding: 30 }}>
          <TextInput
            style={{ marginTop: 10, height:20 }}
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

: <View>
<Text>Error handling the data</Text>    
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

 

  export default connect()(AddCard)