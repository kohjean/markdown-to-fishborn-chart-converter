export const RecursiveComponent = ({ props, idx, branchIdx }) => {
  const { text, depth, children } = props;

  return (
    <>
      <Node
        data-depth={depth}
        theme={{ myIndex: idx, parentIndex: branchIdx }}
      >
        {text}
        {children.length > 0 &&
          children.map((elem, idx) => (
            <RecursiveComponent
              props={elem}
              key={elem.id}
              idx={idx}
              branchIdx={branchIdx}
            />
          ))}
      </Node>
    </>
  );
};
