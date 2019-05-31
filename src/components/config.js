export const API_URL = process.env.NODE_ENV === 'development'
  ? 'https://react-image-upload.herokuapp.com'
  : 'http://localhost:8000'