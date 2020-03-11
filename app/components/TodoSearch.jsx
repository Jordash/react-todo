var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    //this value is true or false, depending whether the box is checked
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    //call the passed down prop method onSearch()
    //pass in the showCompleted and searchText values
    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
