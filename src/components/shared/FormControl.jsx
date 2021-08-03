export const FormInput = (props) => {
  const { ...others } = props;
  return <input className="form-input" {...others} />;
};

export const FormTextarea = (props) => {
  const { ...others } = props;
  return <textarea {...others} />;
};

export const FormSelect = (props) => {
  const { values, ...others } = props;
  return (
    <select {...others}>
      {Object.keys(values).map((key) => (
        <option key={key} value={key}>
          {values[key]}
        </option>
      ))}
    </select>
  );
};

export const FormRadio = (props) => {
  const { name, ...others } = props;
  return (
    <div className="dflex mb-10">
      <input type="radio" {...others} />
      <label className="mb-0">{name}</label>
    </div>
  );
};
