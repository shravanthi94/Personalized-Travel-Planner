import React, { Component } from 'react';
import '../App.css';
import sfo from "./images/sfo.jpg"
import backGroundImage from "./images/backGroundImage.jpg"
import { Card, CardDeck, Button} from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


var backgroundImagePic = {
    backgroundImage: `url(${backGroundImage})`,
    width: "100%",
    height: "900px"

}


class landingPage extends Component {
    render() {
        return(
            <div style={backgroundImagePic}>
                <div style= {{width: "100%", height: "5px"}}>
                <div style={{float:"left", textAlign: "right"}}>
                        <button style={{display: "inline-block"}}>Home</button>
                    </div>
                    <div style={{float:"right", textAlign: "right"}}>
                        <button style={{display: "inline-block"}}>Login</button>
                        <button style={{display: "inline-block", marginLeft: "5px"}}>Signup</button>
                    </div>
                </div>
                <div class='container' style = {{marginTop: "30px"}}>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src = {sfo} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                 </div>
             </div>
        )
    }
}

export default landingPage;