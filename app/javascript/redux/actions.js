// app/javascript/redux/actions.js
import axios from 'axios';

export const FETCH_GREETING = 'FETCH_GREETING';

export function fetchGreetingSuccess(message) {
  return {
    type: FETCH_GREETING,
    payload: message,
  };
}

export function fetchGreeting() {
  return (dispatch) => {
    // Make an API request to your Rails API endpoint
    axios.get('/api/greetings/random')
      .then((response) => {
        // Dispatch the FETCH_GREETING action with the fetched message
        dispatch(fetchGreetingSuccess(response.data.message));
      })
      .catch((error) => {
        // Handle any errors here if needed
        console.error('Error fetching greeting:', error);
      });
  };
}