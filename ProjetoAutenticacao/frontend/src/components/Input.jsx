import Label from "./Label";

const Input = ({ type, label, msgClass, ...rest }) => {
  return (
    <div>
      <input type={type} placeholder="" {...rest} />
      <Label forId={rest.id}>{label}</Label>
    </div>
  );
};

export default Input;
