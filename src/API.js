import axios from 'axios';

var urlPrefix = 'http://localhost:4000/api'

var API = {

    getProjects : () => {
        return axios.get(urlPrefix+'/projects')
    },
    getSingleProject : (id) => {
        return axios.get(urlPrefix+'/projects/'+id)
    },
    addProject : (data) => {
        return axios.post(urlPrefix+'/projects',data)
    },
    updateProject : (id,data) => {
        return axios.put(urlPrefix+'/projects/'+id,data)
    },
    deleteProject : (id) => {
        return axios.delete(urlPrefix+'/projects/'+id)
    },
    getTypes : () => {
        return axios.get(urlPrefix+'/types')
    },
    getSingleType : (id) => {
        return axios.get(urlPrefix+'/types/'+id)
    },
    getSingleUser : (id) => {
        return axios.get(urlPrefix+'/users/'+id)
    },
    addUser : (data) => {
        return axios.post(urlPrefix+'/users',data)
    },
    authenticate : (data) => {
        return axios.post(urlPrefix+'/users/authenticate',data)          
    }
    
}

export default API




