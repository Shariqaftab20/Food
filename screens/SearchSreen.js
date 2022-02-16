import React, { useEffect } from "react";
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [searchApi,result,errorMessage]=useResults();
    const filterResultsList=(price)=>{
      return result.filter(result=>{
        return result.price===price;
      });
    };

    return<View style={{backgroundColor:'white', height:'100%'}}>
        <SearchBar 
        term={term} 
        onChangeTerm={setTerm} 
        onTermEnding={()=>searchApi(term)}/>
        <ScrollView>
        {errorMessage?<Text>{errorMessage}</Text>:null}
        <Text>we found {result.length} results</Text>
        <ResultsList results={filterResultsList('$')} title="Cost Effective"/>
        <ResultsList results={filterResultsList('$$')} title="Bit Pricer"/>
        <ResultsList results={filterResultsList('$$$')} title="Big Spender"/>
        </ScrollView>
    </View>
};

const styles=StyleSheet.create({});

export default SearchScreen;