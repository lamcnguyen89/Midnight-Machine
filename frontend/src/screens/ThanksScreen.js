import React, { Component } from 'react';

class ThanksScreen extends Component {
    render() { 
        return (  
            <>
                <main className="container p-2 my-4">
                    {/* "my-4" is a bootstrap notation that controls the top and bottom margins for  the container."p-2" is a bootstrap notation that controls the padding for the container. Information can be found in the Bootstrap documentation under the Spacing section. */}
        
                    <h1 className="headingformats">Thanks for your Message!!!!</h1>
                    <hr />
                    <h2>I'll get back to you as soon as possible.</h2>
            
                </main>
            </>
        );
    }
}
 
export default ThanksScreen;