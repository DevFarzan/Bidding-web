import React, { Component } from 'react';
import Header from '../Header/mainheader';
import Footer from '../Footer/mainFooter';
import Biddpanel1 from './biddpanel1';
import Bidbanner from './biddingbanner';
import './bidding.scss';
import AbBanner from '../About Selmore/abBanner';

class Bidding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownUser: false,
      data: ''
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    // let data = this.props.location.state;
    // this.setState({
    //   data: data,
    // })
  }

  showDropDown = () => {
    this.setState({
      dropDownUser: true
    })
  }

  hideDropDown = () => {
    this.setState({
      dropDownUser: false
    })
  }

  render() {
    const { dropDownUser, data } = this.state;
    return (
      <div>
        {/* <Header showDropDown={this.showDropDown} hideDropDown={this.hideDropDown} dropDownUser={dropDownUser} /> */}
        {/* <Bidbanner advertise={'BIDDING'} bred={'Bidding'}  /> */}
        <div className="row">
            <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
          <Biddpanel1 />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Bidding;
