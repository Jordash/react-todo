var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.text.value;
    if ( todoText.length > 0 ) {
      //call onAddTodo function that is passed down as prop from TodoApp.jsx
      this.props.onAddTodo(todoText);
      this.refs.text.value = '';
    }
    else {
      this.refs.text.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="text" type="text" placeholder="Add a todo item" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
