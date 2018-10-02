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