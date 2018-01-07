import React from 'react';

class Main extends React.Component {

  render () {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => React.cloneElement(child, this.props)
    );

    return (
      <div>
        <h1>
          Catch of the Day
          {/* <Link to="/">Catch of the Day</Link> */}
        </h1>
        { childrenWithProps }
      </div>
    );
  }
}

export default Main;
