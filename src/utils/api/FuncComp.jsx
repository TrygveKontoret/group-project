const FuncComp = () => {
  const handleSearch = () => {
    let myVar = "somestring";
    return myVar;
  };

  return (
    <>
      <h1>hello world</h1>
      <p>{handleSearch}</p>
    </>
  );
};

export default FuncComp;
