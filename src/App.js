
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import VehicleList from './components/VehicleList'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddVehicleForm from './components/AddVehicleForm';
import EditVehicleForm from './components/EditVehicleForm';
function App() {
  
const [vehicles,setVehicles]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/getAllVehicles').then((response)=>{
      setVehicles(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);


const initialFormState = {
  vehicleId:0,
  
   userId:0,

  vehicleNumber:'',
  type: '',
  category: '',
  description : '',
  location : '',
  capacity : '',
  chargesPerKm : 0,
  fixedCharges : 0



}



const [currentVehicle,setCurrentVehicle] 
     =useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addVehicle(vehicle){
  try{
  const response=await apiClient.post('/addVehicle',vehicle);
    setVehicles([...vehicles,response.data]);
    console.log(vehicles);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteVehicle(id){
  await apiClient.delete(`/deleteVehicle/${id}`);
    setVehicles(vehicles.filter((vehicle)=>vehicle.vehicleId !== id));
  }
  
  const editVehicle=(vehicle)=>{

    setEditing(true);
      setCurrentVehicle
      ({vehicleId:vehicle.vehicleId, userId:vehicle.userId, vehcileNumber:vehicle.vehcileNumber, type:vehicle.type, 
        category:vehicle.category, description: vehicle.description, location: vehicle.location, 
        capacity: vehicle.capacity, chargesPerKm: vehicle.chargesPerKm, fixedCharges: vehicle.fixedCharges})
     
  }
  
  const updateVehicle = (id,updatedVehicle)=>{
  
    setEditing(false);
    apiClient.put(`/updateVehicle/${id}`,updatedVehicle).then((response)=>
    {
  
      console.log('vehicle updated');
      setVehicles(vehicles.map((vehicle)=>
    (vehicle.vehicleId === id ? updatedVehicle : vehicle)));
    })
    
  }
  
  
  
  
  return (<div>
    <div className='container'>
    <h1>Vehicle Crud app with hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          <h2>Edit Vehicle Form </h2>
          <EditVehicleForm
           setEditing={setEditing}
           currentVehicle={currentVehicle}
           updateVehicle={updateVehicle}
           />
           </div>):(

    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/products" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/getAllVehicles"} className="nav-link">
              Vehicles
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addVehicle"} className="nav-link">
              Add Vehicle
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<VehicleList 
         vehicleData={vehicles} 
         editVehicle={editVehicle}
         deleteVehicle={deleteVehicle} />} ></Route>
          <Route exact path="addVehicle" element={<AddVehicleForm addVehicle={addVehicle}/>} />
         
         <Route path='/getAllVehicles' element={<VehicleList 
          vehicleData={vehicles} 
         editVehicle={editVehicle}
         deleteVehicle={deleteVehicle} />}>

         </Route>
         <Route path='/updateVehicle/:id' element={<EditVehicleForm /> }></Route>
        </Routes>
      </div>
    
    </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;