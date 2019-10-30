import * as axios from 'axios';


export const RecordAPI = {
    getRecord() {
        return axios.get("/api/article").then(Response => {
            return Response.data
        });
    },
    AddRecord(Record) {
        return axios.post("/api/article", Record);
    },
    UpdateRecord(id, Record) {
        return axios.put(`/api/article/${id}`, Record);
    },
    DeleteRecord(id) {
        return axios.delete(`/api/article/${id}`);
    }
}

export default RecordAPI;