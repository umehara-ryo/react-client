import Student from "../model/Student";
import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const HiddenContext = createContext(false);


export default function P7() {
    const [students,setStudents] = useState([]);

    const [hidden,setHidden] = useState(false);
    useEffect(()=>{
        async function updateStudent(){
            const resp = await axios.get("");
            setStudents(resp.data.data);

        }
        updateStudent();
    },[])

    function hide() {

        setHidden((old)=> !old);
        
    }


    return <HiddenContext.Provider value={hidden}>
        <input type="button" value={hidden?"示す":"隠す"}　onClick={hide}/>
        {/*<input type="button" value="示す"onClick={show}/>*/}
        <P7a students={students}></P7a>
    </HiddenContext.Provider>


}

function P7a({students}: { students: Student[] }) {

    const map = students.map(s=><P7b student={s}　key={s.id}></P7b>);
    return <>map</>;

}

function P7b({student}: { student: Student }) {

    const hidden = useContext(HiddenContext);
    if(hidden){
        var jsx = <span></span>
    }else {
        var jsx = <span>{student.age}</span>
    }
    return <div>{student.name} {jsx}</div>

}