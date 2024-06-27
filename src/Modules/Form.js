import React, { Component } from 'react';
import '../Pages/Home.css';

class Form extends Component {

componentDidMount() { 
    if (window.RDStationForms){
        new window.RDStationForms('newsletter-nova-home-31b938c6b42145723f7a', 'UA-59722364-1').createForm();
        }
} 

render() { 
	return ( 

        <div className='mb-24'>
            <div role="main" id="newsletter-nova-home-31b938c6b42145723f7a"></div>
        </div>
	
	); 
} 
} 

export default Form; 

