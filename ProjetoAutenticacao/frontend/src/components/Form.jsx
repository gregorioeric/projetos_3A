import { useState } from "react";
import Input from "./Input";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import AccountExists from "./AccountExists";
import Api from "../api/api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "Register") {
      if (formData.confirm_password !== formData.user_password) {
        console.log("Passwords do not match");
        return;
      }

      const { confirm_password, ...newFormData } = formData;
      const result = await Api.post("users", newFormData);
      console.log("Registering user with data:", result);
    } else if (type === "Login") {
      const result = await Api.post("auth/login", formData);
      console.log(result);
    }
  };

  return (
    <div className="container-form">
      <h2>{formName}</h2>
      <form>
        <div className="container-inputs">
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

          {type === "Login" && (
            <div className="forget-password">
              <NavLink to="/forgot-password">Esqueceu a senha?</NavLink>
            </div>
          )}
        </div>
        <div className="container-btn">
          <Button
            nameClass="primary"
            handleSubmit={handleSubmit}
            title={btnName}
          />
        </div>
        <div className="container-account-exist">
          {type === "Register" ? (
            <AccountExists
              nameLink="/login"
              titleLink="Login"
              title="Já possui uma conta?"
            />
          ) : (
            <AccountExists
              nameLink="/register"
              titleLink="Register"
              title="Não possui uma conta?"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
