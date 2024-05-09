import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const UserContext =  createContext();


export const UserProvider = ({children}) =>{
    
    const [tours , setTours] = useState([]);
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

  
    const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get('https://tourwebsite.onrender.com/api/v1/tours');
          if(!response){
            setError('something went wrong');
          }
          setTours(response.data.doc);
         setLoading(false);
        } catch (error) {
          setError(error.message)
        }
      };
  
  useEffect(() => {
     
      fetchData();
      
  }, []);

 

  return (
    <UserContext.Provider value={{  tours ,loading ,error }}>
      {children}
    </UserContext.Provider>
  );

}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };
