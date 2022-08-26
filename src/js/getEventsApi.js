// import axios from 'axios';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

// export const options = {
//   params: {
//     apikey: 'F5kU07sI57mWLEvDMarIrvffHyAVdkdU',
//     page: 1,
//     size: 16,
//   },
// };

// export async function fetchEvents() {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}?apikey=${options.params.apikey}`,
//       options
//     );
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchEvents().then(res => console.log(res.data));

import axios from 'axios';
import EventList from '../templates/EventListMarkup.hbs';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const list = document.querySelector('.pagination__area');

export const options = {
  params: {
    apikey: 'F5kU07sI57mWLEvDMarIrvffHyAVdkdU',
    page: 1,
    size: 16,
    countryCode: 'ES',
  },
};

export function MakeListMarkup(data) {
  list.insertAdjacentHTML('beforeend', EventList(data));
}

export async function fetchEvents() {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${options.params.apikey}`,
      options
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
