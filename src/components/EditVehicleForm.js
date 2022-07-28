import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'

export default function EditVehicleForm(props){
     const [vehicle,setVehicle] =useState(props.currentVehicle)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setVehicle({...vehicle,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateVehicle(vehicle.vehicleId,vehicle);
    }
  
   

     return (
        <form onSubmit={submitHandler}>
         


<label>Id</label>
<h1>{props.currentVehicle.vehicleId}</h1>


<label>Driver</label>
<input 
type='number'
name='userId'
value={vehicle.userId}
onChange={handleInputChange}/>

<label>Vehicle Number</label>
<input 
type='text'
name='vehicleNumber'
value={vehicle.vehicleNumber}
onChange={handleInputChange}/>

<label>Type</label>
<input 
type='text'
name='type'
value={vehicle.type}
onChange={handleInputChange}/>

<label>Category</label>
<input 
type='text'
name='category'
value={vehicle.category}
onChange={handleInputChange}/>


<label>Description</label>
<input 
type='text'
name='description'
value={vehicle.description}
onChange={handleInputChange}/>


<label>Location</label>
<input 
type='text'
name='location'
value={vehicle.location}
onChange={handleInputChange}/>


<label>Capacity</label>
<input 
type='text'
name='capacity'
value={vehicle.capacity}
onChange={handleInputChange}/>


<label>Charges Per Km</label>
<input 
type='number'
name='chargesperkm'
value={vehicle.chargesPerKm}
onChange={handleInputChange}/>

<label>Fixed Charges</label>
<input 
type='number'
name='fixedCharges'
value={vehicle.fixedCharges}
onChange={handleInputChange}/>

<button>Update Vehicle</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




}