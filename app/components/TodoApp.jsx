var React = require('react');

var TodoList = require('TodoList');

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
  render: function() {
    var {todos} = this.state;

    return (
      <div>
      {/* send todos array to TodoList component */}
      <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
