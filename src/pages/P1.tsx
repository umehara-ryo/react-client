

import Student from "../model/Student";

export default function P1({student} : {student : Student}){

    return(
        <div>
        <h1>{student.name}</h1>
        <h2>{student.id}</h2>
            <p>年齢は{student.age} 性別は{student.sex}
            </p>
        </div>
    )
}