import React, { Component } from 'react';

class ErrorScreen extends Component {
    render() { 
        return (  
            <>
                <main className="container p-2 my-4">
                    {/* "my-4" is a bootstrap notation that controls the top and bottom margins for  the container."p-2" is a bootstrap notation that controls the padding for the container. Information can be found in the Bootstrap documentation under the Spacing section. */}
     
                    <h1 className="headingformats">There was an error submitting your Form...</h1>
                    <hr />
                    <h2>Fill out all the fields on the form and/or just click on the available pages on this portfolio.</h2>
        
                </main>
            </>
        );
    }
}
 
export default ErrorScreen;