var GroceryListItem = (props) => {

  var onGroceryItemClick = (event) => {
    console.log('Item clicked!')
  };

  return (
    <li onClick={onGroceryItemClick}>{props.name}</li>
  );
};

var groceryItems = [];
var Bagel = <GroceryListItem name='Bagel' />;
var Matcha = <GroceryListItem name= 'Matcha' />;
groceryItems.push(Bagel);
groceryItems.push(Matcha);

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
  <GroceryList groceryItems={groceryItems} />
);

ReactDOM.render(<App />, document.getElementById('app'));