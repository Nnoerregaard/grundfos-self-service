import React, { Component, Props } from 'react';
import './App.css';

import deleteIcon from './resources/delete.png';
import editIcon from './resources/edit.png';

import OverviewList from './Components/OverviewList';

import FrontpageCard from './Components/FrontpageCard';
import bookingImage from './resources/booking.svg';
import CreationForm from './Components/CreationForm';

class App extends Component {
  constructor(props: Props<object>){
    super(props);

    let googleCalendarApiKey = 'AIzaSyC5r7q3hK9N7gK0ymKgHybpQ5imQH7HEEw';
    let googleCalendarClientId = '2240079267-j91qp9qul4bqqu622o1kmsvbkjv7qoum.apps.googleusercontent.com';
  }
  render() {
    //NB! This mock data should come from a 'real' webserver call
    const dataItems = [{ title: "Onsdag d. 30 januar", subtitle: "12.00 til 15.30", id: 1, isEditable: true},
                       { title: "Tirsdag d. 5 februar", subtitle: "12.00 til 15.30", id: 2, isEditable: true},
                       { title: "Fredag d. 8 februar", subtitle: "17.15 til 23.59", id: 3, isEditable: true}];

    const existingReservations = [{ title: "Niklas Nørregaard", subtitle: "Mandag d 4. februar, 13.00 til 20.00", id: 1, isEditable: false}, 
                                  { title: "Jens Jensen", subtitle: "Onsdag d. 20 februar, 18.00 til 23.59", id: 2, isEditable: false },
                                  { title: "Søren Sørensen", subtitle: "Fredag d. 1 marts, 12.00 til 18.00", id: 3, isEditable: false}];

    const inputs = [{ name: "Navn", type: "text", initialValue: ""},
                    { name: "Dato", type: "date", initialValue: ""},
                    { name: "Starttidspunkt", type: "time", initialValue: ""},
                    { name: "Sluttidspunkt", type: "time", initialValue: ""}]
    return (
      <div className="App">
        {/* The navigation page which constitutes the frontpage  
        <FrontpageCard title="Booking" image={bookingImage} /> */}

        {/* The content part which appears when clicking on on of the cards fron the navigation part above */}
        <div className="MainCalendarView">
          <iframe src="https://calendar.google.com/calendar/b/2/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=egrbc3g3moiofga2rqsvnok2m0%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FCopenhagen" 
                  className="CalendarView" scrolling="no"></iframe>
        </div>
        <div className="OverviewList">
          <OverviewList name="Dine bookinger" dataItems={dataItems} />
        </div>
        <div className="NewReservation">
          <CreationForm elements={inputs} />
        </div>
        <div className="ExistingReservations">
          <OverviewList name="Fremtidige bookinger" dataItems={existingReservations} />
        </div>
      </div>
    );
  }
}

export default App;
