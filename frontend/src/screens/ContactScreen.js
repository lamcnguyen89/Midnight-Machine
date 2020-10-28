import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect} from 'react-router-dom';

class ContactScreen extends Component {
    constructor(props) {
        // Remember that super() is called inside a react componnt only if it has a constructor. 
        // super(props) allows access to this.props in the constructor
        // Source: https://blog.mailtrap.io/react-contact-form/
        // Source: https://stackoverflow.com/questions/53900739/redirection-using-axios-and-react
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            messageSent: ''
            
        }
    }

    // Function to submit the user's message to the backend server that will then send the message to gmail.
    formSubmit(e){
        e.preventDefault();

        Axios({
          method: "POST", 
          url:"http://localhost:666/send", 
          data: this.state
        }).then(
                this.setState({ messageSent: true }),
                this.resetForm()
        ).catch(
                console.log("There was an error sending your message")
        )
      };
        
    // Resets the Contact form by resetting the state
    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            messageSent: ''
            
        })
    }

    render() {
        if (this.state.messageSent) {
            // redirect to the thanks page if message is sent
            return <Redirect to = {{ pathname: "/thanks" }} />;
        } 
        
        return (  
            <>
                {/* This section contains the html for the contact form. 
                The formatting for this form was taken off Bootstrap. */}
                <main className="container p-2 my-4">
                
                    <h1 className="headingformats">Contact Us</h1>
                    <hr />
                        
                        <article className="row justify-content-center">
                            <article className="col-sm-12">
                                <form
                                    id="contact-form"
                                    onSubmit = {(e) => this.formSubmit(e)}
                                    method="POST"
                                >
                                    <article className="form-group">
                                        <label htmlFor="name-input">Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name-input" 
                                            placeholder="First Name and Last Name"
                                            name="name"
                                            value={this.state.name} 
                                            onChange={e => this.setState({name: e.target.value})}
                                        />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="email-input">Email</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="email-input" 
                                            placeholder="Example@gmail.com"
                                            name="email"
                                            value={this.state.email} 
                                            onChange={e => this.setState({email: e.target.value})} 
                                        />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="message-input">Message</label>
                                        <textarea 
                                            className="form-control" 
                                            id="message-input" 
                                            type="text"
                                            rows={5} 
                                            placeholder="Enter your message here."
                                            name="message"
                                            value={this.state.message} 
                                            onChange={e => this.setState({message: e.target.value})} 
                                        />
                                    </article>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary mb-2"
                                    >
                                        Submit Message
                                    </button>
                                </form>
                            </article>
                        </article>

                        <article className="row justify-content-center mt-3">
                            <article className="col-sm-12">
                                <p>

                                </p>
                            </article>
                        </article> 
                </main>
            </>
        );
    }
}
 
export default ContactScreen;