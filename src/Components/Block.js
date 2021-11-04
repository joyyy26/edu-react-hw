import React from 'react';

class Block extends React.Component {

  //ADD CODE HERE
  constructor(props) {
    super(props);
  }

  render() {

    const mystyle = {
      // ADD CODE HERE (set style)
      backgroundColor: this.props.blockColor
    };

    return (
      <>
        <div className="blockers" style={
          // ADD CODE HERE
          mystyle
        }>
        </div>

        <div className="bottom">
          <div className="white"></div>
        </div>


      </>
    );
  }
}


export default Block;