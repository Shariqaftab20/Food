import React, { useEffect, useState } from "react";
import{ Text ,View , StyleSheet} from 'react-native';
import yelsApi from "../Api/yelsApi";

const ResultShow=({navigation})=>{
    const id = navigation.getParam("id");
    const [result,setResult] = useState(null);
    const getResult= async (id)=>{
        const responce=await yelsApi.get(`/${id}`);
        setResult(responce.data);
    };
    useEffect(()=>{
        getResult(id);
    },[])

    if(!result)
    {return null;}
    return <View>
        <Text>{result.name}</Text>
    </View>
};

const styles=StyleSheet.create({

});

export default ResultShow;