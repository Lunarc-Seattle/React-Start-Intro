import ListGroup from "./ components/ListGroup";
function App() {
  let items = ["new", "san", "toyko", "london"];
  const handSelectItem = (item:string) =>{
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handSelectItem}/>
    </div>
  );
  {
    /* 相当于调用 ListGroup() 或者更简写：<ListGroup /> */
  }
}

export default App;
