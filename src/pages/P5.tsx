import Student from "../model/Student";
import {useEffect, useState} from "react";
import axios from "axios";

export default function P7() {
    const [students,setStudents] = useState([]);

    useEffect(()=>{
        async function updateStudent(){
            const resp = await axios.get("");
            setStudents(resp.data.data);

        }
        updateStudent();
    },[])
    return <P7a students={students}></P7a>

}

function P7a({students}: { students: Student[] }) {

    const map = students.map(s=><P7b student={s}　key={s.id}></P7b>);
    return <>map</>;

}

function P7b({student}: { student: Student }) {
    return <div>{student.name} {student.age}</div>

}