import { useState } from "react";
import { Alert } from "./ components/alert";
import { Button } from "./ components/Button";
import ListGroup from "./ components/ListGroup";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["new", "san", "toyko", "london"];
  const handSelectItem = (item:string) =>{
    console.log(item);
  }

  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>Alerts</Alert>}
      <ListGroup items={items} heading={"Cities"} onSelectItem={handSelectItem}/>
      <Button onClick={()=>setAlertVisibility(true)}>my btn</Button>
    </div>
  );
  {
    /* 相当于调用 ListGroup() 或者更简写：<ListGroup /> */
  }
}

export default App;
