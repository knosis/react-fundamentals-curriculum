import React from 'react'


let Forecast = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
});

export Default Forecast