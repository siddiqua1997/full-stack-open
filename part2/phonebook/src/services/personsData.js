import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deleteObj = id => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
}

const putNum = (UpdatePerson) => {
    return axios.put(`http://localhost:3001/persons/${UpdatePerson.id}`,UpdatePerson)
}

export default { getAll,create,deleteObj,putNum }