const Button = ({ nameClass, handleSubmit, title }) => {
  const color = {
    primary: "primary",
  };
  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className={`btn ${color[nameClass]}`}
    >
      {title}
    </button>
  );
};

export default Button;
