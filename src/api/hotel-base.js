import axios from 'axios'
export default{
    getList(query){
        const url = '/api/hotel-search'
        return axios.get(url,{query})
    }
}
