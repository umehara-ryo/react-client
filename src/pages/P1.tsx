import Student from "../model/Student";

export default function P1({student}: { student: Student }) {

    function handleClick(e: React.MouseEvent) {
        alert("七瀬最高");
        console.log(e);

    }

    return (
        <div>
            <h1 onClick={handleClick}>{student.name}</h1>
            <h2>{student.id}</h2>
            <p>年齢は{student.age} 性別は{student.sex}
            </p>
        </div>
    )
}