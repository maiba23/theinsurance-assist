const FormComponent = ({ labelName, clsName, children }) => {
  return (
    <div className={"form-container " + clsName} data-aos="zoom-in">
      <label className="form-label">{labelName}</label>
      {children}
    </div>
  );
};

export default FormComponent;
