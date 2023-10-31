import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Image from "./components/Image";


function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>
          You just got Rick Rolled
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisiblity(true)}>
        My Button
      </Button>

      <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ?si=NfHauiu706UJbO-K&t=1">
        <Image src={"file:/C:/reactPractice/public/images/RickRoll.jpeg"} alt="Rick Roll you" />
      </a>
    </div>
  );
}

export default App;
