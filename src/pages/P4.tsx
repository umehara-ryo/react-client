import axios from "axios";
import {useEffect, useState} from "react";


export default function P3({id, age}: { id: number, age: number }) {


    const [student, setStudent] = useState({name: 'xx'});

    useEffect(() => {
        async function updateStudent() {

            const resp = await axios.get("");
            setStudent(resp.data.data);

        }
        updateStudent()
    },[id]);

    return <h3>{student.name}</h3>;
}