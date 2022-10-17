import { Button, Input } from "@nextui-org/react";
import "./home.scss";
import NameForm from "../nameForm/nameForm";

function Home() {
  return (
    <div className="App">
      <div class="container">
        <div class="typed-out">
          Name <span className="text-title">IO</span>
        </div>
        <p className="subtitle-text">Test your name!</p>
      </div>
<NameForm/>
    </div>
  );
}

export default Home;
