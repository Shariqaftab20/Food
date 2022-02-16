import React from "react";
import { Text , Image , StyleSheet , View} from "react-native";

const ResultsDetails=({result})=>{
    return <View style={{marginHorizontal:10}}>
        <Image source={{uri:result.image_url}} style={styles.image}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Riviews..</Text>
    </View>
};

const styles=StyleSheet.create({
    image:{
        height:120,
        width:250,
        borderRadius:5, 
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
    }
});

export default ResultsDetails;