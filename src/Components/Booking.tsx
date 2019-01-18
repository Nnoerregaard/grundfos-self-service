import React from 'react';
import './Booking.css';

import OverviewList from './OverviewList';
import CreationForm from './CreationForm';

// TODO: Move this to a higher order component!
interface BookingProps {
    goBack: () => void;
}

function Booking(props: BookingProps){
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
        <div>
            <button onClick={props.goBack}>Go back dummy</button>
            <div className="MainCalendarView">
                <iframe src="https://calendar.google.com/calendar/b/2/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=egrbc3g3moiofga2rqsvnok2m0%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FCopenhagen"
                    className="CalendarView" scrolling="no"></iframe>
            </div>
            <div className="OverviewList">
                <OverviewList name="Dine bookinger" dataItems={dataItems} />
            </div>
            <div className="NewReservation">
                <CreationForm elements={inputs} creationTitle="Opret booking" />
            </div>
            <div className="ExistingReservations">
                <OverviewList name="Fremtidige bookinger" dataItems={existingReservations} />
            </div>
        </div>
    )
}

export default Booking;