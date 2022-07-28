import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addVehicle } from '../actions/vehicles';

export default function AddVehicleForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   vehicleId:0,
   driver: {
    userId:0
},
   vehicleNumber:'',
   type: '',
   category: '',
   description : '',
   location : '',
   capacity : '',
   chargesPerKm : 0,
   fixedCharges : 0



}

const initialDriverFormState={
    userId:0
}

const [driver, setDriver] =useState(initialDriverFormState);
const handleDriverIdChange=(event)=>{
    const{name,value}= event.target;
    setDriver({...driver,[name]:value});
    setVehicle({...vehicle,...driver});
}
 
const [vehicle,setVehicle]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setVehicle({...vehicle,[name]:value});
}

useEffect(()=>{
    setVehicle({...vehicle, driver})
},[driver])
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
 console.log(JSON.stringify(vehicle)+'from addvehicleform')
 
//props.addProduct(product);
dispatch(addVehicle(vehicle));
//props.addVehicle(vehicle);
setVehicle(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>Id</label>
<input 
type='number'
name='vehicleId'
value={vehicle.vehicleId}
onChange={handleInputChange}/>

<label>Driver Id</label>
<input 
type='number'
name='userId'
value={driver.userId}
onChange={handleDriverIdChange}/>

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
name='chargesPerKm'
value={vehicle.chargesPerKm}
onChange={handleInputChange}/>

<label>Fixed Charges</label>
<input 
type='number'
name='fixedCharges'
value={vehicle.fixedCharges}
onChange={handleInputChange}/>

<button>Add New Vehicle</button>

</form>


</>
)


}