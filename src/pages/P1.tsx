import Student from "../model/Student";

export default function P1({student,hideAge = false}: { student: Student ,hideAge ?: boolean}) {

    function handleClick(e: React.MouseEvent) {
        alert("七瀬最高");
        console.log(e);

    }
    let ageFragment;
    if(hideAge){
        ageFragment = "**";
    }else {
        ageFragment = student.age;
    }

    return (
        <div>
            <h1 onClick={handleClick}>{student.name}</h1>
            <h2>{student.id}</h2>
                <p>年齢は{ageFragment} 性別は{student.sex}
            </p>
        </div>
    )
}