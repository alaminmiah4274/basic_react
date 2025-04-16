import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const PlayWithButton = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  // const handleButton = () => console.log("clicked !!!");

  return (
    <>
      {alertVisible && (
        <Alert color="success" onClose={() => setAlertVisible(false)}>
          You have clicked the button
        </Alert>
      )}
      <Button
        handleAlert={() => setAlertVisible(true)}
        color="warning"
        className="font-bold hover:bg-yellow-900"
      >
        Click Me
      </Button>
    </>
  );
};

export default PlayWithButton;
