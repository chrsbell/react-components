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

  onGroceryItemHover(event) {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    console.log(this.props.name);
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onGroceryItemHover.bind(this)} onMouseLeave={this.onGroceryItemHover.bind(this)}>
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