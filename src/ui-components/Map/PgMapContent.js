import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import 'antd/dist/antd.css';

const AnyReactComponent = ({ text }) => (
   <div style={{
     color: 'white', 
     background: 'grey',
     padding: '15px 10px',
     display: 'inline-flex',
     textAlign: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: '100%',
     transform: 'translate(-50%, -50%)'
   }}>
     {text}
   </div>
 );

export default class PageHeader extends Component {
   static defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    };
  

   render() {
      return (
         <div style={{ width: '-webkit-fill-available', height: '60em', margin: '0 2.4em'}}>
            <GoogleMapReact
               defaultCenter={this.props.center}
               defaultZoom={this.props.zoom}
               >
               <AnyReactComponent 
                  lat={59.955413} 
                  lng={30.337844} 
                  text={'Kreyser Avrora'} 
               />
               </GoogleMapReact>
         </div>
      );
   }
}