/*//properties
export default function Hello(props: { msg: string, age?: number }) {
    //jsx  tsx
    return <h2>{props.msg}<br/>我的年龄是{props.age}</h2>
}*/

export default function Hello({msg, age = 18}: { msg: string, age?: number }) {

   // document.getElementsByTagName("h2")[0].style.fontFamily = "ＭＳ ゴシック";
    //jsx  tsx
    return <h2>{msg}<br/>年齢は{age}</h2>
}