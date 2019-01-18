import React, { Component } from 'react';
import './App.css';

import deleteIcon from './resources/delete.png';
import editIcon from './resources/edit.png';

import OverviewList from './Components/OverviewList';

import FrontpageCard from './Components/FrontpageCard';
import bookingImage from './resources/booking.svg';

class App extends Component {
  render() {
    const dataItems = [{ title: "Onsdag d. 30 januar", subtitle: "12.00 til 15.30", id: 1},
                       { title: "Tirsdag d. 5 februar", subtitle: "12.00 til 15.30", id: 2},
                       { title: "Fredag d. 8 februar", subtitle: "17.15 til 23.59", id: 3}];
    return (
      <div className="App">
        {/* The navigation page which constitutes the frontpage 
        <FrontpageCard title="Booking" image={bookingImage} /> */}

        {/* The content part which appears when clicking on on of the cards fron the navigation part above */}
        <div className="MainCalendarView">
          This is the main calendar view which should be its own component 
        </div>
        <OverviewList name="Dine bookinger" dataItems={dataItems} />
        <div className="ExistingReservations">
          Showing existing reservations sorted by time. This is its own component
        </div>
        <div className="NewReservation">
          This is the place where a new reservation is made. This is its own component
        </div>
      </div>
    );
  }
}

export default App;
