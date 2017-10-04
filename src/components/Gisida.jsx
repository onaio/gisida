import React from 'react';

class Gisida extends React.Component {
  render() {
    // here we should check if the <Provider store={store}> has been
    // instantiated at a higher level by the user, if not then render here
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Gisida
