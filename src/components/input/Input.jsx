export default function Input({
  label,
  tipo = "text",
  htmlfor,
  name,
  value,
  onChange,
  className = "",
  ...rest
}) {
  return (
    <div>
      <label htmlFor={htmlfor} className={"d-block w-100 mt-4 px-3"}>
        {label}
      </label>
      <input
        type={tipo}
        id={htmlfor}
        name={name ?? htmlfor}
        className={`d-block w-100 mb-4 py-2 px-3 rounded-4 border ${className}`.trim()}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
