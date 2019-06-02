exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'development'
  ? 'https://react-image-upload.surge.sh'
  : 'http://localhost:3000'