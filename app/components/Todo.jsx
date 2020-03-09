var React = require('react');

var Todo = React.createClass({
  render: function() {
    //get the value of the todo.text property
    var {text, id} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = Todo;
