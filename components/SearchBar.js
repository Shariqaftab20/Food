import React from "react";
import {TextInput,View,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar=({ term , onChangeTerm , onTermEnding})=>{
    return<View style={styles.backGround}>
        <Ionicons name="ios-search-outline" size={35} color="black" style={{marginHorizontal:6}}/>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={{fontSize:18}}
            value={term}
            onChangeText={onChangeTerm}
            onEndEditing={onTermEnding}
        />
    </View>
};

const styles=StyleSheet.create({
    backGround:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        margin:15,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    }
});

export default SearchBar;