

interface Student{
    id : number;
    name : string;
    age : number;
    sex : string;
}


export default function P1({student} : {student : Student}){

    return(
        <div>
        <h1>{student.name}</h1>
        <h2>{student.id}</h2>
            <p>{student.age} {student.sex} </p>
        </div>
    )
}