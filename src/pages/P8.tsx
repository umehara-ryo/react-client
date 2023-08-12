import React, {useState} from "react";

export default function P8() {

    const [student,setStudent] = useState({name: "", sex: "女の子", age: 18})

    const options = ["男の子","女の子"];
    const jsx =  options.map(o =><option>{o}</option>);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >){
        //setStudent({name: "奈々", sex: "女の子", age: 18});
       setStudent((old)=>{
           const n = {...old,[e.target.name] : e.target.value};

           return n;
       })
    }

    return (
        <form>
            <div>
                <label>名前</label>
                <input type="test" value={student.name} onChange={onChange} name="name"/>
            </div>
            <div>
                <label>性別</label>
                <select　value={student.sex} onChange={onChange} name="sex">
                    {jsx};
                </select>
            </div>
            <div>
                <label>年齢</label>
                <input type="test" value={student.age} onChange={onChange} name="age"/>
            </div>
            <div>
                <input type="button" value="追加"/>
            </div>
        </form>
    )
}