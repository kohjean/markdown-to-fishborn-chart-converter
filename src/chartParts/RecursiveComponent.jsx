export const RecursiveComponent = ({ props }) => {
  const { text, depth, children, id } = props;
  return (
    <>
      <div data-depth={depth} id={`no_${id}`}>
        {text}
        {children.length > 0 &&
          children.map((elem) => (
            <RecursiveComponent props={elem} key={elem.id} />
          ))}
      </div>
    </>
  );
};
