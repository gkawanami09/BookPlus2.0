import Button from "../button/Button.jsx";

export default function Input({ label, tipo, htmlfor, value, onChange }) {
    return (
        <div>
            <label htmlFor={htmlfor} className={"d-block w-100 mt-4 px-3"}>{label}</label>
            <input type={tipo} id={htmlfor} name={htmlfor} className={"d-block w-100 mb-4 py-2 px-3 rounded-4 border"} value={value} onChange={onChange} />
        </div>
    )
}