const FormComponent = ({ labelName, children }) => {
  return (
    <div className="form-container">
      <label className="form-label">{labelName}</label>
      {children}
    </div>
  );
};

export default FormComponent;
