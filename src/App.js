import logo from './logo.svg';
import './App.css';
import { Input, Spacer } from "@nextui-org/react";
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
     <Home></Home>
     <div>
     <Input bordered clearable labelPlaceholder="Name" color="warning" type="text" width='35%' css={{ $$inputHoverBorderColor: "white", $$inputTextColor: 'white'}}/>
     </div>
    </div>
  );
}

export default App;
