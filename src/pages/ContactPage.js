import React from 'react'
import styled from 'styled-components'
//import ContactItem from '../Components/ContactItem';
//import PhoneIcon from '@material-ui/icons/Phone';
//import EmailIcon from '@material-ui/icons/Email';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Title from '../Components/Title'
//for accessing api to send emails 
import Axios from 'axios'

const ContactPageStyled = styled.section`
    padding: 6rem;
    background: linear-gradient(to bottom, #8e7b87 35%, #ffa96e 150%);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    height: 100vh;
    background-size: cover;

    .contact-item-section{
        margin: 1px;
        form {
            margin: 10px;
            height: 520px;
            width: 800px;
            //background-color: rgba(255, 255, 255, 0.13);
            position: absolute;
            transform: translate(-50%, -50%);
            top: 60%;
            left: 50%;
            border-radius: 10px;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(4px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
            padding: 50px 35px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: space-evenly;
            align-items: stretch;
        }
        .form-group {
            display: flex; 
            flex-direction: column;
            align-items: stretch;
        }
        .form-label {
            color: #425154; 
            font-size: 1.5em;
            margin-bottom: 15px;
        }
        input {
            font-size: 1em;
        }
        button {
            align-self: center;
            margin: 20px;
            width: 150px;
            height: 30px;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            color: #425154;
            background: #c1a47100;
            border: 2px solid #425154;
            box-shadow: 5px 5px 0 #425154,
                -5px -5px 0 #425154,
                -5px 5px 0 #425154,
                5px -5px 0 #425154;
            transition: 500ms ease-in-out;
            text-align: center;
        }       
        button:hover {
            box-shadow: 20px 5px 0 #425154, -20px -5px 0 #425154;
        }
        button:focus {
            outline: none;
        }
        .d-inline {
            align-self: center;
            font-weight: bolder;
            font-size: 1.5em;
        }
        .success-msg {
            color: green; 
        }
        .err-msg {
            color: red; 
        }
    }
    @media screen and (max-width: 830px){
        h2 {
            text-align: center; 
        }
        .contact-item-section form {
            margin-top: 40px;
            width: 85%;
            height: 70%;
        }
    }
    @media screen and (max-width: 830px){
        h2 {
            font-size: 2.5rem;
        }
    }
`;

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //console.log(event.target);


        this.setState({
            disabled: true
        });

            //this is the full api call running locally uncomment when running on actual domain
        Axios.post('https://email-api-57hr3.ondigitalocean.app/api/email', this.state)
        //Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                //email sending logic 
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true,
                        name: '',
                        email:'',
                        message:''
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    render() {
        return(
            <ContactPageStyled>
                <Title title={'Contact Me'} span={'Contact Me'} />
                <div className="contact-item-section">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="4" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>
                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>
                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </div>
            </ContactPageStyled>
        )
    }
}




//     render() {
//         return(
//             <div>
//                 <Hero title={this.props.title} />

//                 <Content>
//                     <Form onSubmit={this.handleSubmit}>
//                         <Form.Group>
//                             <Form.Label htmlFor="full-name">Full Name</Form.Label>
//                             <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Form.Group>
//                             <Form.Label htmlFor="email">Email</Form.Label>
//                             <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Form.Group>
//                             <Form.Label htmlFor="message">Message</Form.Label>
//                             <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
//                             Send
//                         </Button>


//                         {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
//                         {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
//                     </Form>
//                 </Content>
//             </div>
//         );
//     }

// }

export default ContactPage;