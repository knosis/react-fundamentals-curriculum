import React from 'react'

let City = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.params.cityName}</h2>
      </div>
    )
  }
});

export default City

