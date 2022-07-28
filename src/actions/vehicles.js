import {
    ADD_VEHICLE,
  RETRIEVE_VEHICLES,
  RETRIEVE_VEHICLE_BY_ID,
  UPDATE_VEHICLE,
  DELETE_VEHICLE,
  RETRIEVE_BOOKED_VEHICLES,
  RETRIEVE_AVAILABLE_VEHICLES,
  GET_NUMBER_OF_VEHICLES_RENTED,
  
} from "./types";
import  VehicleService from "../services/VehicleService";

//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addVehicle = ({driver, vehicleNumber, type, category, description, location, capacity, chargesPerKm, fixedCharges}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await VehicleService.create({ driver, vehicleNumber, type, category, description, location, capacity, chargesPerKm, fixedCharges });
    dispatch({
      type: ADD_VEHICLE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveVehicles = () => async (dispatch) => {
  try {
    const res = await VehicleService.getAll();
    dispatch({
      type: RETRIEVE_VEHICLES,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};

export const retrieveVehicleById = () => async (dispatch) => {
  try {
    const res = await VehicleService.getVehicleById();
    dispatch({
      type: RETRIEVE_VEHICLE_BY_ID,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const retrieveBookedVehicles = () => async (dispatch) => {
    try {
      const res = await VehicleService.getBookedVehicles();
      dispatch({
        type: RETRIEVE_BOOKED_VEHICLES,
        payload:res.data,
      });
     
    
  }
  catch(err){return Promise.reject(err);}};
  export const retrieveAvaialableVehicles = () => async (dispatch) => {
    try {
      const res = await VehicleService.getAvailableVehicles();
      dispatch({
        type: RETRIEVE_AVAILABLE_VEHICLES,
        payload:res.data,
      });
     
    
  }
  catch(err){return Promise.reject(err);}};

  export const getNumberOfVehiclesRented = () => async (dispatch) => {
    try {
      const res = await VehicleService.getNumOfVehiclesRented();
      dispatch({
        type: GET_NUMBER_OF_VEHICLES_RENTED,
        payload:res.data,
      });
     
    
  }
  catch(err){return Promise.reject(err);}};

export const updateVehicle = (id, data) => async (dispatch) => {
  try {
    const res = await VehicleService.update(id, data);
    dispatch({
      type: UPDATE_VEHICLE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteVehicle = (id) => async (dispatch) => {
  try {
    await VehicleService.remove(id);
    dispatch({
      type: DELETE_VEHICLE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
