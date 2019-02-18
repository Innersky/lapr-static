const SERVER_URL: string = process.env.REACT_APP_ENV === 'local' ? 'http://localhost:5000' :
  window.location.protocol + '//' + window.location.host;

export const API_PATH: string = SERVER_URL + '/api';