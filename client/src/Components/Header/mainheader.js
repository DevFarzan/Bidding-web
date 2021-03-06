import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdownn from '../../constant/dropdownmenu/Dropdown';
import FormLogin from '../Login Form/form';
import './mainheader.scss';
import { HttpUtils } from '../../Services/HttpUtils'
import { InputNumber } from 'antd';

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: false,
            bidCoins: 0
        }
    }

    componentDidMount() {
        this.getBidCoinsOfUser()
    }

    getBidCoinsOfUser = async () => {
        let adminUser = JSON.parse(localStorage.getItem("userData"));
        let obj = {
            id: adminUser._id
        }
        let response = await HttpUtils.post('getUserData', obj);
        if (response) {
            if (response.code == 200) {
                let data = response.content[0]
                this.setState({
                    bidCoins: data.bidCoins
                })
            }
        }
    }

    openNav = () => {
        this.setState({
            navbar: true
        })
    }

    closeNav = () => {
        this.setState({
            navbar: false,
        })
    }

    render() {
        const { bidCoins } = this.state;
        const { dropDownUser } = this.props;
        const value = JSON.parse(localStorage.getItem("loggedIn"));
        return (
            <div>
                <div className="d-none d-sm-block">
                    <div className="row">
                        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                        <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2" style={{ padding: '0' }}>
                            <Link rel="noopener noreferrer" to={`/`}>
                                <img src="../images/selmore-logo.png" alt='img' className="selmorelogo" style={{ width: 150, height: 100, }} />
                            </Link>
                        </div>
                        <div className="col-sm-2 col-md-1 col-lg-2 col-xl-2"></div>
                        <div className="col-sm-6 col-md-8 col-lg-6 col-xl-6" style={{ textAlign: "right" }}>
                            <ul class="list-inline inLineMenu">
                                <li className="menuLiTag">
                                    <Link rel="noopener noreferrer" to={`/`}>
                                        <span className="menuText">Home</span>
                                    </Link>
                                </li>

                                <li className="menuLiTag">
                                    <Link rel="noopener noreferrer" to={`/about`}>
                                        <span className="menuText">About</span>
                                    </Link>
                                </li>
                                <li className="menuLiTag">
                                    <Link rel="noopener noreferrer" to={`/faq`}>
                                        <span className="menuText">FAQ</span>
                                    </Link>
                                </li>

                                <li className="menuLiTag">
                                    <Link rel="noopener noreferrer" to={`/list_add`}>
                                        <button type="button" className="btn btn-primary listAdBtn">
                                            <span className=""> List Media </span>
                                        </button>
                                    </Link>
                                </li>
                                <li className="menuLiTag">
                                    <InputNumber min={0} max={1000} disabled={true} defaultValue={bidCoins} />
                                </li>

                                {dropDownUser || value
                                    ?
                                    <li className="menuLiTag">
                                        <Dropdownn hideDropDown={this.props.hideDropDown} />
                                    </li>
                                    :
                                    <li className="menuLiTag" style={{ textAlign: 'left' }}>
                                        <button type="button" class="btn btn-primary loginBtnMenu" data-toggle="modal" data-target="#myModal" >
                                            <span className=""> LOGIN </span>
                                        </button>
                                        <div class="modal fade" id="myModal">
                                            <div class="modal-dialog" style={{ marginRight: '49.5%' }}>
                                                <div class="modal-content" style={{ width: '200%' }}>
                                                    <div class="modal-header">
                                                        <h4 class="modal-title">Login</h4>
                                                        <button type="button" class="close" data-dismiss='modal'>&times;</button>
                                                    </div>
                                                    <FormLogin showDropDown={this.props.showDropDown} />
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss='modal' id='closss' style={{ marginTop: '-0.5%', color: 'white' }}>Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>}
                            </ul>
                        </div>
                        <div className="col-sm-1 col-md-0 col-lg-1 col-xl-1"></div>
                    </div>
                </div>

                {/*Mobile MEnu*/}

                <div className="d-block d-sm-none" style={{ paddingLeft: '0px' }}>
                    <div className="row">
                        <div className="col-12 d-block d-sm-none">
                            <div className="col-6">
                                <i onClick={this.openNav} className="fa fa-bars" style={{ content: '\f0c9', color: 'black', fontSize: '24px', marginTop: '20px' }}></i>
                            </div>
                            <div className="col-6 d-block d-sm-none">
                                <img src="../images/selmore-logo.png" alt='img' className="mobileselmorelogo" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div id={this.state.navbar == true ? 'mySidenav' : 'mySidenavNO'} class="menunav">
                                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                                <div className="menunav-content">
                                    <ul class="inLineMenuMOB">
                                        <li className="">
                                            <Link rel="noopener noreferrer" to={`/home`}>
                                                <span className="menuTextMOB">Home</span>
                                            </Link>
                                        </li>

                                        <li className="">
                                            <Link rel="noopener noreferrer" to={`/about`}>
                                                <span className="menuTextMOB">About</span>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link rel="noopener noreferrer" to={`/faq`}>
                                                <span className="menuTextMOB">FAQ</span>
                                            </Link>
                                        </li>

                                        <li className="">
                                            <Link rel="noopener noreferrer" to={`/list_add`}>
                                                <button type="button" className="btn btn-primary listAdBtn">
                                                    <span className=""> List Media </span>
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="menuLiTag">
                                            <InputNumber min={0} max={1000} disabled={true} defaultValue={bidCoins} />
                                        </li>

                                        {dropDownUser || value
                                            ?
                                            <li className="">
                                                <Dropdownn hideDropDown={this.props.hideDropDown} />
                                            </li>
                                            :
                                            <li className="" style={{ marginTop: '16px' }}>
                                                <button type="button" class="btn btn-primary loginBtnMenu" data-toggle="modal" data-target="#myModal" >
                                                    <span className=""> LOGIN </span>
                                                </button>
                                                <div class="modal fade" id="myModal">
                                                    <div class="modal-dialog" style={{ marginRight: '49.5%' }}>
                                                        <div class="modal-content" style={{ width: '200%' }}>
                                                            <div class="modal-header">
                                                                <h4 class="modal-title">Login</h4>
                                                                <button type="button" class="close" data-dismiss='modal'>&times;</button>
                                                            </div>
                                                            <FormLogin showDropDown={this.props.showDropDown} />
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-danger" data-dismiss='modal' id='closss' style={{ marginTop: '-0.5%', color: 'white' }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainHeader;