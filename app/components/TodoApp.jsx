var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        { id: 1, text: "Walk the dog" },
        { id: 2, text: "Clean the yard" },
        { id: 3, text: "Mullen the Rodney" },
        { id: 4, text: "Cleanse the colon" }
      ]
    }
  },
  //Listen for new todo items being created, then add them
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
      {/* send todos array to TodoList component */}
      <TodoList todos={todos}/>
      {/* render AddTodo component here */}
      {/* on submit, pass in handleAddTodo function */}
      <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
