import React, { useContext, useEffect, useState } from "react";

import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";

import { setLocalStorage } from "./utils/LocalStorage";

import { AuthContext } from "./context/AuthProvider";



const App = () => {


const [user,setUser] = useState(null);


const {userData} = useContext(AuthContext);





// save data first time

useEffect(()=>{


if(!localStorage.getItem("employees")){

setLocalStorage();

}


},[]);






// keep login after refresh

useEffect(()=>{


const loggedInUser = localStorage.getItem(
"loggedInUser"
);



if(loggedInUser){

setUser(JSON.parse(loggedInUser));

}



},[]);







const handleLogin = (email,password)=>{



if(!userData.employees.length){

alert("Data loading...");

return;

}






// ADMIN LOGIN

const admin = userData.admin.find(

(admin)=>

admin.email === email &&

admin.password === password

);





if(admin){


const loggedInUser = {

role:"admin",

data:admin

};



setUser(loggedInUser);



localStorage.setItem(

"loggedInUser",

JSON.stringify(loggedInUser)

);



return;

}







// EMPLOYEE LOGIN


const employee = userData.employees.find(

(emp)=>

emp.email === email &&

emp.password === password

);






if(employee){


const loggedInUser = {


role:"employee",

data:employee


};



setUser(loggedInUser);



localStorage.setItem(

"loggedInUser",

JSON.stringify(loggedInUser)

);



return;


}




alert("Invalid Email or Password");


};






return (

<>


{
!user &&

<Login handleLogin={handleLogin}/>

}



{
user?.role==="admin" &&

<AdminDashboard data={user.data}/>

}



{
user?.role==="employee" &&

<EmployeeDashboard data={user.data}/>

}



</>

);


};


export default App;