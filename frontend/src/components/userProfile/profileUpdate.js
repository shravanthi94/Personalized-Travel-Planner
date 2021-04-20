import React, { Component } from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Form} from 'react-bootstrap';

class profileUpdate extends Component{
    render() {
        return(
            <div class="container" >
                <h1> Update your profile details!! </h1>
                <div class="container">
                    <form class = 'form' style={{border: "1px solid black"}}>
                        <div class="form-row">
                        <div class="form-group col-md-3">
                                <label for="exampleFormControlSelect1" class="strong"><strong> First Name </strong></label><br />
                                <input type="text" class="form-control" placeholder="None"/>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="exampleFormControlSelect1" class="strong"><strong> Last Name </strong></label><br />
                                <input type="text" class="form-control" placeholder="0"/>
                            </div>

                            <div class="form-group col-md-3">
                                <label for="exampleFormControlSelect1" class="strong"><strong> Contact number </strong></label><br />
                                <input type="text" class="form-control" placeholder="0"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"><strong> About me </strong></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" href='/profileUpdate'>Update </button>
                    </form>
                </div>
            </div>

        )
    }
}

export default profileUpdate;

