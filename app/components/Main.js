var React = require('react');
var HelloWorld = require('./HelloWorld');

var Main = React.createClass({
  render: function() {
    return (
      <div>
      <HelloWorld />
        <h2>
          Sup World
        </h2>
      </div>
    )
  }
});

module.exports = Main;

