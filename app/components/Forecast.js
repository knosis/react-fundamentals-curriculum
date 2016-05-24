var React = require('react');


var Forecast = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
});

module.exports = Forecast;