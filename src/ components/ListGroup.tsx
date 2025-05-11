import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (itme: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["new", "san", "toyko", "london"];
  //   items = [];

  // let selectedIndex = 0;

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName ] = useState('');

  // const message = items.length === 0 ? <p>no itme </p> : null;
  // or 以下可以传参数，不需要传参数 就用上面的
  // const message = ()=>{
  // reuturn {items.length ===0? <p>no itme </p>: null;;
  //}

  // event handler
  const handleClick = (event: MouseEvent) => console.log("clicked", event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no item </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index), console.log("cliked", item);
              onSelectItem(item);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  // command + d 可以一起选中所有的class
  // 如果没有自动格式化 代码，选择 view - command template - config
}
export default ListGroup;
