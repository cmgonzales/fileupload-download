export const API_URL = process.env.NODE_ENV === "developer"
? 'https://react-image-upload.herokuapp.com'
: 'http://localhost:8000'