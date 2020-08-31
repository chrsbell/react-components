var GroceryListItem = (props) => (
  <li>{props.name}</li>
);

debugger;

var groceryItems = [];
var Bagel = <GroceryListItem name='Bagel' />;
var Matcha = <GroceryListItem name= 'Matcha' />;

groceryItems.push(Bagel);
groceryItems.push(Matcha);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems[0]}
    {props.groceryItems[1]}
  </ul>
);

var App = () => (
  <GroceryList groceryItems = {groceryItems} />
);

ReactDOM.render(<App />, document.getElementById('app'));