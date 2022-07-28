import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import {retrieveVehicles,}from '../actions/vehicles'


export default function VehicleList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentVehicle,setCurrentVehicle]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const vehicles = useSelector((state)=>state.vehicles);
     

    useEffect(()=>{
        dispatch(retrieveVehicles());
      },[]);

    
    const refreshData=()=>{
        setCurrentVehicle(null);
        setCurrentIndex(-1);
    }
 

    const setActiveProduct = (vehicle,index)=>{
        setCurrentVehicle(vehicle);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Driver</th>
            <th>Vehicle Number</th>
            <th>Type</th>
            <th>Category</th>
            <th>Description</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Charges Per Km</th>
            <th>Fixed Charges</th>
        </tr>
    </thead>
    <tbody>
{/*  {props?.productData?.length >0 ?(
        props.productData.map((product)=>(
   */}

  {vehicles?.length > 0 ? (
    vehicles.map((vehicle)=>(
    <tr key={vehicle.vehicleId}>
        <td>{vehicle.vehicleId}</td>
        <td>{vehicle.driver?.userId}</td>
        <td>{vehicle.vehicleNumber}</td>
        <td>{vehicle.type}</td>
        <td>{vehicle.category}</td>
        <td>{vehicle.description}</td>
        <td>{vehicle.location}</td>
        <td>{vehicle.capacity}</td>
        <td>{vehicle.chargesPerKm}</td>
        <td>{vehicle.fixedCharges}</td>
        <td><button 
         onClick={()=>{props.editVehicle(vehicle)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.deleteVehicle(vehicle.vehicleId)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={4}>No products</td>
        </tr>
     )}

    </tbody>
</table>




)




}