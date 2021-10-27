import React from 'react';

class Block extends React.Component {

  //ADD CODE HERE
  constructor(props) {
    super(props);
  }

  render() {

    const mystyle = {
      // ADD CODE HERE (set style)
      display: 'Flex'      //CSS Syntx
    };

    return (
      <>
        <div class="blockers" style={
          // ADD CODE HERE
          this.props.mystyle     //Attribute is the prop we want to access
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