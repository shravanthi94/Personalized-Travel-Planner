import React, { Component } from 'react';
import '../../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './gettingStarted.css';
import {Form, Button} from 'react-bootstrap';

class gettingStarted extends Component{
    render() {
        return(
            <div class="container" >
                <h1> Let's get you started!! </h1>
                <div class="container">
                    <form class = 'form' style={{border: "1px solid black"}}>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <label for="exampleFormControlInput1"><strong> State</strong></label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>California</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="exampleFormControlSelect1" class="strong"><strong> Number of days </strong></label><br />
                                <input type="text" class="form-control" placeholder="0"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1" style={{paddingBottom: "0px", marginBottom: "0px"}}> <strong> Trip type </strong></label>
                            <Form.Text className='text-muted' style={{margin: "0px", padding: "0px"}}>
                            Up for some adventure? Or wanna get away to a quite place? Let us know!!
                            </Form.Text>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                    <label class="form-check-label" for="exampleRadios1"> Relaxed </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                            <label class="form-check-label" for="exampleRadios2">
                                Adventurous
                            </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1"><strong> Let us know about your ideal vacation </strong></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">View recommendations </button>
                    </form>
                </div>
            </div>

        )
    }
}

export default gettingStarted;
