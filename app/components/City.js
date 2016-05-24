var React = require('react');

var City = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.params.cityName}</h2>
      </div>
    )
  }
});

module.exports = City;

