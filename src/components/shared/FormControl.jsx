import styles from "./form-control.module.scss";

export const FormInput = (props) => {
  const { ...others } = props;
  return <input className="form-input" {...others} />;
};
export const Input = (props) => {
  const { error, ...others } = props;
  const cls = error ? `${styles.input} ${styles.error}` : styles.input;
  return (
    <div>
      {error && <span className={styles.errorspan}>{error}</span>}
      <input className={cls} {...others} />
    </div>
  );
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

export const Button = (props) => {
  const { children, className, ...others } = props;
  const cls = className ? `${styles.button} ${className}` : styles.button;
  return (
    <button className={cls} {...others}>
      {children}
    </button>
  );
};

export const CheckBox = (props) => {
  const { children, className, ...others } = props;
  const cls = className ? `${styles.check} ${className}` : styles.check;
  return (
    <label className={styles.checklabel}>
      <input type="checkbox" className={cls} {...others} />
      <span className={styles.vmiddle}>{children}</span>
    </label>
  );
};
