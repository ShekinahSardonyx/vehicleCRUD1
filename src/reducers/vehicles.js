import {
    ADD_VEHICLE,
  RETRIEVE_VEHICLES,
  RETRIEVE_AVAILABLE_VEHICLES,
  RETRIEVE_BOOKED_VEHICLES,
  GET_NUMBER_OF_VEHICLES_RENTED,
  UPDATE_VEHICLE,
  DELETE_VEHICLE,
  } from "../actions/types";

  const initialState = [];
  function vehicleReducer(vehicles = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_VEHICLE:
        return [...vehicles, payload];
      case RETRIEVE_VEHICLES:
        return payload;
      case RETRIEVE_AVAILABLE_VEHICLES:
        return payload;
      case RETRIEVE_BOOKED_VEHICLES:
        return payload;
      case GET_NUMBER_OF_VEHICLES_RENTED:
        return payload;
      case UPDATE_VEHICLE:
        return vehicles.map((vehicle) => {
          if (vehicle.id === payload.id) {
            return {
              ...vehicle,
              ...payload,
            };
          } else {
            return vehicle;
          }
        });
      case DELETE_VEHICLE:
        return vehicles.filter(({ id }) => id !== payload.id);
      
      default:
        return vehicles;
    }
  };
  export default vehicleReducer;