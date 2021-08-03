const SectionContainer = ({ clsName, children }) => {
  return (
    <section className={"section " + clsName}>
      <div className="container">{children}</div>
    </section>
  );
};

export default SectionContainer;
