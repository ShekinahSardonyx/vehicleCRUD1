import http from "../http-common";


const getAll = () => {
  return http.get("/getAllVehicles");
};

const getVehicleById = id =>{
    return http.get(`/getVehicleById/${id}`)
}
const getBookedVehicles = id => {
  return http.get("/allBookedVehicles");
};
const getAvailableVehicles = id => {
    return http.get("/allAvailableVehicles");
  };
const getNumOfVehiclesRented = id => {
    return http.get("/numOfVehiclesRented");
  };
const create = data => {
  return http.post("/addVehicle", data);
};
const update = (id, data) => {
  return http.put(`/updateVehicle/${id}`, data);
};
const remove = id => {
  return http.delete(`/deleteVehicle/${id}`);
};


/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const VehicleService = {
  getAll,
  getVehicleById,
  getBookedVehicles,
  getAvailableVehicles,
  getNumOfVehiclesRented,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default VehicleService;