import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ResultsDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";


const ResultsList=({title , results,navigation})=>{
    if(!results.length)
    {return null;}
    return<View style={styles.backGround}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result =>result.id}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                    <ResultsDetails result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
};

const styles=StyleSheet.create({
    title:{
        fontSize:28,
        fontWeight:'bold',
    }
});

export default withNavigation(ResultsList);