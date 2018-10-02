import React, { Component } from 'react';
import axios from 'axios';



export default class Results extends Component {
  constructor() {
    super();
    this.state = {
      CLIENTID: "MzkxODk3MHwxNDc3NjA1OTk0",
      CLIENTSECRET: "aUT22cqy4DXJEV8Qr4zPohOH-baJD0B_5-uapJff",
      eventsUrl: "https://api.seatgeek.com/2/events?q=",
      recUrl: "https://api.seatgeek.com/2/recommendations?events.id=",
      events: [],
      recs: []
    }
  }


  getTopScoreEvents = (query) => {
    const topScoredEventsUrl = this.state.eventsUrl + query + `&client_id=${this.state.CLIENTID}&client_secret=${this.state.CLIENTSECRET}`;
    console.log('query URL', topScoredEventsUrl);

    return axios.get(topScoredEventsUrl)
      .then(response => {
        console.log('response received', response.data.events);
        this.response = response.data.events;
        return this.response;
      }).catch(err => {
        console.log(err);
      });
  };

  getRecommendations = (eventId) => {
    const topRecsUrl = this.state.recUrl + eventId;
    const recEvents = axios.get({
      url: topRecsUrl,
      auth: { 
        username: "MzkxODk3MHwxNDc3NjA1OTk0",
        password: "aUT22cqy4DXJEV8Qr4zPohOH-baJD0B_5-uapJff" 
      }
  });
    return recEvents;
  }

  render() {

    // top scored events
    this.getTopScoreEvents('Coachella')
    .then(data => {
      console.log(data);
    })
    // print top ten scored events
    // console.log('top events', this.state.events)
    const topEventId = this.state.events[0]['id'];
    // find highest score
    this.getRecommendations(topEventId);
    console.log('recs', this.state.recs)
    // print top 10 recommendations
    return (
      <div>
        <h2>Top Events</h2>
        <ul>
          {
            this.state.events.each((event) => {
              return <li>Name: {event.title} Score: {event.score}</li>
            })
          }
        </ul>

        <h2>Recommendations</h2>
        <ul>
          {
            this.state.recs.each((event) => {
              return <li>Name: {event.title} Score: {event.score}</li>
            })
          }
        </ul>
      </div>
    )
  }
}


/*

// SeatGeek API question

// 1. Build a function that takes in a search query and prints the name of the first 10 events related to that  query along with their score.
// 2. Find the event with the highest score.
// 3. Print the name of 10 events that are recommended based on the event that we found in step 2. 

// For the sake of time, you may hard code the search input rather than querying from the user

// http://platform.seatgeek.com/
// Client Id: MzkxODk3MHwxNDc3NjA1OTk0
// Secret: aUT22cqy4DXJEV8Qr4zPohOH-baJD0B_5-uapJff

how to order by score

how to query based on an events id

import axios from 'axios';

const getRecommendedEvents = (query) => {
  const baseUrl = "https://api.seatgeek.com/2/"
  const eventsUrl = "${baseUrl}/events"
  const recommendationsUrl = "${baseUrl}/recommendations"

  console.log(firstTenEvents);
  // find event with highest score
  ['events']['score']
  // query events based on event with highest score

  let topEvents = getTopEvents()
  console.log(topEvents);
}

*/