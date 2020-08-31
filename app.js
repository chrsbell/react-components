class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  };

  onGroceryItemClick(event) {
    console.log('Item clicked!')
  };

  render() {
    console.log(this.props.name);
    return (
      <li onClick={this.onGroceryItemClick}>
        {this.props.name}
      </li>
    );
  };
};

var groceryItems = [];
groceryItems.push('Bagel');
groceryItems.push('Matcha');

var GroceryList = (props) => (
  <div>
    <h1>Grocery List</h1>
    <ul>
      {props.groceryItems.map((item, index) =>
        <GroceryListItem key={index} name={item} />
      )}
    </ul>
  </div>
);

var App = () => (
  <GroceryList groceryItems={groceryItems} />
);

ReactDOM.render(<App />, document.getElementById('app'));