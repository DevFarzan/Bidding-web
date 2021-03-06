import React, { Component } from 'react';
import Header from '../Header/mainheader';
import Footer from '../Footer/mainFooter';
import Formpanel from './formpanel';
import Contpanel1 from './contpanel1';
import './contact.scss';
import AbBanner from '../About Selmore/abBanner';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownUser: false,
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
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
    const { dropDownUser } = this.state;
    return (
      <div>
        <Header showDropDown={this.showDropDown} hideDropDown={this.hideDropDown} dropDownUser={dropDownUser} />
        <AbBanner advertise={'CONTACT'} bred={'CONTACT'} />
        {/* <Formpanel showDropDown={this.props.showDropDown} /> */}
        <Contpanel1 />
        <Footer />
      </div>
    );
  }
}
export default Contact;
