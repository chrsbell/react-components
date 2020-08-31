var Bagel = () => (
  <li>Bagel</li>
);

var Matcha = () => (
  <li>Matcha</li>
);

debugger;

var groceryItems = [];

groceryItems.push(<Bagel />);
groceryItems.push(<Matcha />);

var GroceryList = (props) => (
  <div>
    <h1>Grocery List</h1>
    <ul>
      {props.groceryItems[0]}
      {props.groceryItems[1]}
    </ul>
  </div>
);

var App = () => (
  <GroceryList groceryItems = {groceryItems} />
);

ReactDOM.render(<App />, document.getElementById('app'));