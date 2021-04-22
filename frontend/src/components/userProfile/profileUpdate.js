import React, { Component } from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {getUserDetails, updateUserDetails} from '../../store/actions/userProfileAction';
import Navbar from '../Navbar';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class profileUpdate extends Component{
    constructor(props) {
        super(props);
        this.state= {
        };
      }
    
      componentWillMount() {
        this.props.getUserDetails();
    }
    
    onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
    }
    
    handleUpdate = (e) => {
      //prevent page from refresh
      e.preventDefault();
        const data = {
                firstName: e.target.firstName.value,
                lastName:  e.target.lastName.value,
                phone:  e.target.phone.value,
                headline:  e.target.headline.value,
            }
            
      this.props.updateUserDetails(data);
    };
        render() {
          var email = (this.props.user.email)
          console.log(this.props.status)
          let redirectVar = null;
          if(this.props.status ===  "USER_UPDATED"){
            localStorage.setItem("email_id", {email});
            redirectVar = <Redirect to="/userProfile"/>
          }
        return(
            <div>
                {redirectVar}
                <React.Fragment>
                    <Navbar />
                    <div class="container" >
                        <h1> Update your profile details!! </h1>
                        <div class="container">
                            <form class = 'form' style={{border: "1px solid black"}} onSubmit ={this.handleUpdate}>
                                <div class="form-row">
                                <div class="form-group col-md-3">
                                        <label for="exampleFormControlSelect1" class="strong"><strong> First Name </strong></label><br />
                                        <input type="text" class="form-control" name = "firstName" onChange={this.onChange} defaultValue={this.props.user.firstName}/>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="exampleFormControlSelect1" class="strong"><strong> Last Name </strong></label><br />
                                        <input type="text" class="form-control" name = "lastName" onChange={this.onChange} defaultValue={this.props.user.lastName}/>
                                    </div>

                                    <div class="form-group col-md-3">
                                        <label for="exampleFormControlSelect1" class="strong"><strong> Contact number </strong></label><br />
                                        <input type="text" class="form-control" name = "phone" onChange={this.onChange} defaultValue={this.props.user.phone}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1"><strong> About me </strong></label>
                                    <textarea class="form-control" name = "headline" id="exampleFormControlTextarea1" rows="3" onChange={this.onChange} defaultValue={this.props.user.headline}></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary" href='/profileUpdate'>Update </button>
                            </form>
                        </div>
                    </div>
                </React.Fragment>
            </div>

        )
    }
}

profileUpdate.propTypes = {
    getUserDetails: PropTypes.func.isRequired,
    updateUserDetails: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired, 
    status: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => { 
      return ({
      user: state.userProfile.user,
      status: state.userProfile.status
  })};
  
  export default connect(mapStateToProps, { getUserDetails, updateUserDetails })(profileUpdate);
  

