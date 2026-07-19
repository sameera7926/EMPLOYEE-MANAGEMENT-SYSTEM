import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";


export const AuthContext = createContext();



const AuthProvider = ({children}) => {


const [userData,setUserData] = useState({
  employees:[],
  admin:[]
});



useEffect(()=>{


const data = getLocalStorage();


setUserData({

employees:data.employees || [],

admin:data.admin || []

});


},[]);



return (

<AuthContext.Provider value={{userData,setUserData}}>

{children}

</AuthContext.Provider>

);


};


export default AuthProvider;