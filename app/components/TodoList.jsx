var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    //get the props passed from TodoApp
    var {todos} = this.props;
    //renderTodos function iterates over the array of todos
    var renderTodos = () => {
      return todos.map( (todo) => {
        return (
          //use the id as a key for React to track each item internally
          //use the spread operator to spread out the properties of an oobject into individual props
          <Todo key={todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {/* render the mapped todos */}
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
