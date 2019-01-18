import React, { Component, Props } from 'react';
import './App.css';

import FrontpageCard from './Components/FrontpageCard';
import bookingImage from './resources/booking.svg';

import Booking from './Components/Booking';

import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

interface AppState {
  isLoggedIn: boolean;
  userId: string;
  selectedCard: string;
}

class App extends Component<Object, AppState> {
  constructor(props: Props<object>){
    super(props);

    this.state = {isLoggedIn: false, userId: "", selectedCard: ""};

    this.goBack = this.goBack.bind(this);

    let googleCalendarApiKey = 'AIzaSyC5r7q3hK9N7gK0ymKgHybpQ5imQH7HEEw';
    let googleCalendarClientId = '2240079267-j91qp9qul4bqqu622o1kmsvbkjv7qoum.apps.googleusercontent.com';
  }

  selectCard(selectedCard: string){
    this.setState({selectedCard: selectedCard});
  }

  goBack(){
    this.setState({selectedCard: ""});
  }

  render() {
    const responseFacebook = (response: ReactFacebookLoginInfo) => {
      this.setState({isLoggedIn: true, userId: response.id});
    }

    return (
      <div className="App">
        {/* Login part */}
        <div hidden={this.state.isLoggedIn}>
        <FacebookLogin 
          appId="783077602052331"
          autoLoad={false}
          fields="name"
          callback={responseFacebook} />
        </div>

        {/* Main part */}
        <div hidden={!this.state.isLoggedIn}>
          {/* The navigation part */}
          <div hidden={this.state.selectedCard != ""} onClick={this.selectCard.bind(this, "booking")}>
            <FrontpageCard title="Booking" image={bookingImage} />
          </div>

          {/* The content part */}
          <div hidden={this.state.selectedCard != "booking"}>
            {/* TODO: Fix the go back through a higher order component! */}
            <Booking goBack={this.goBack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
