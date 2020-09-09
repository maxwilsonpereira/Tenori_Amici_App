// npm i axios
import axios from "axios";

// Firebase: https://console.firebase.google.com/
const instance = axios.create({
  baseURL: "https://vitaactivadb.firebaseio.com/",
});
export default instance;

// FIREBASE: Create a new Schema:
// Go "your project" --> "Add Project"
// Choose "Realtime Database"
// On "Rules", change "read" and "write" to true:

// "rules": {
//     ".read": true,
//     ".write": true
//   }

// Press "Publish".
// DONE!
