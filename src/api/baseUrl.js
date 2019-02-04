export default function getBaseUrl(){
  const inDevelopement = window.location.hostname == 'localhost';
  return inDevelopement ? 'http://localhost:3001/' : '/';
}
