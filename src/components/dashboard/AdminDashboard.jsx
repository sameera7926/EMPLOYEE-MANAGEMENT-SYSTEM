import React from "react";
import Header from "../others/Header";
import CreateTasklist from "../others/CreateTasklist";
import AllTask from "../others/AllTask";


const AdminDashboard = ({data}) => {


return (

<div className="p-10 bg-[#1c1c1c] min-h-screen">


<Header data={data}/>


<CreateTasklist/>


<AllTask/>


</div>

);


};


export default AdminDashboard;