import axios from "axios";


export default function P3() {

    async function getEmployee() {
        const resp = await axios.get("http://localhost:8080/admin/employee/2");
        console.log(resp);

    }

    getEmployee();
    return null;
}