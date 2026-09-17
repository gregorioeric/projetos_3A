import { useState } from "react";
import Input from "./Input";

const Form = ({ btnName, formName, type }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container-form">
      <h2>{formName}</h2>
      <form>
        {type === "Register" && (
          <Input
            type="text"
            name="user_name"
            id="user_name"
            label="Name"
            value={formData.user_name}
            onChange={handleChange}
            msgClass="teste"
          />
        )}
        <Input
          type="text"
          name="user_email"
          id="user_email"
          label="Email"
          value={formData.user_email}
          onChange={handleChange}
          msgClass="teste"
        />
        <Input
          type="text"
          name="user_password"
          id="user_password"
          label="Password"
          value={formData.user_password}
          onChange={handleChange}
          msgClass="teste"
        />
        {type === "Register" && (
          <Input
            type="text"
            name="confirm_password"
            id="confirm_password"
            label="Confirmar Senha"
            value={formData.confirm_password}
            onChange={handleChange}
            msgClass="teste"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
