const FirstComponent = () => {
  /* conditional rendring */
  /* way --> 1 */
  // let name = "Al Amin Miah";
  // if (name) {
  //   return <h1>Hello {name}</h1>;
  // }
  // return (
  //   <>
  //     <h1>Hello from FirstComponent</h1>
  //   </>
  // );
  /* way --> 2 */
  // const name = "Al Amin Miah";
  // return (
  //   <>
  //     <h1>Hello {name ? name : "FirstComponent"}</h1>
  //     <p>How have you been?</p>
  //   </>
  // );
  /* Way --> 3 */
  // const name = "Al Amin Miah";
  // const content = name ? name : "FirstComponent";
  // return (
  //   <>
  //     <h1>Hello {content}</h1>
  //     <p>How have you been</p>
  //   </>
  // );
  /* Way --> 4 */
  // const name = "Al Amin Miah";

  // return (
  //   <>
  //     <h1>Hello from {name && "FirstComponent"}</h1>
  //   </>
  // );

  /* Way --> 5 */
  // const name = "Al Amin Miah";

  const sum = (a, b) => a + b;

  return (
    <>
      <h1 className="text-4xl text-red-500">
        Hello from {name || "FirstComponent"}
      </h1>
      <p>Your mark is: {sum(15, 59)}</p>
    </>
  );
};

export default FirstComponent;
