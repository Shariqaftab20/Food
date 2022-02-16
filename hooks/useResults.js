import { useState, useEffect } from "react";
import yelsApi from "../Api/yelsApi";

export default ()=>{
    const [result,setResult]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');

    const searchApi = async (searchTerm) => {
       try{ const response = await yelsApi.get('/search', {
          params: {
            limit: 50,
            term:searchTerm,
            location: 'san jose'
          }
        });
        setResult(response.data.businesses);}
        catch(err){
          setErrorMessage('OOps!!');
        }
      };

      useEffect(()=>{
        searchApi('pasta');
      },[]);

      return [searchApi,result,errorMessage];
    
};