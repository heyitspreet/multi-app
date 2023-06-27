import React, {useState} from 'react'
import { View , StyleSheet, Text} from 'react-native'

const F1Update = () => {

    const [raceData, setRaceData] = useState([]);
    
  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <Text style={styles.Heading}>Title</Text>
            <View style={styles.raceData}>    
                <Text style={styles.raceText}>Quali:</Text>
                <Text style={styles.raceText}>Race:</Text>
            </View>
        </View>
    </View>
  )
}

export default F1Update

const styles= StyleSheet.create({
    container: {
        height:130,
        backgroundColor:'#efffae',
    },
    main:{
        flex:1,
        backgroundColor:'#181818',
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        borderRadius:20,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
 },  
    raceData:{
        flexDirection:'row',
    },
    Heading:{
        fontSize:34,
        color:'white',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    },
    raceText:{
        color:'#efffae',
        padding:5,
    }
})