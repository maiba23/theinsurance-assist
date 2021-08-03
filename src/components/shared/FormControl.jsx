export const FormInput = (props) => {
  const { ...others } = props;
  return <input {...others} />;
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
