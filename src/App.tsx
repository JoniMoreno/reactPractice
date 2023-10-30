import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const onClickAlertHandler = () => {
  return <Alert>You just got Rick Rolled</Alert>;
};

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisiblity(false)}>Rick Rolled</Alert>}
      <Button color="secondary" onClick={() => setAlertVisiblity(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
