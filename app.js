class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  };

  onGroceryItemClick(event) {
    console.log('Item clicked!')
    this.setState({
      done: !this.state.done
    });
  };


  render() {
    console.log(this.props.name);
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onGroceryItemClick.bind(this)}>
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