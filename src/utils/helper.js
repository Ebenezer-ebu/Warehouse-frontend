import jwtdecode from "jwt-decode";
// Get token from cookies
export function whichUser() {
  try {
    let pass = document.cookie.split("=")[1];
    let decoded = jwtdecode(pass);
    console.log(decoded);
    return decoded.isUser.role;
    // valid token format
  } catch (error) {
    // invalid token format
    return undefined;
  }
}

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfTheWeek = days[d.getDay()];
  return (
    dayOfTheWeek +
    " " +
    time.substr(0, 5) +
    time.slice(-2) +
    " | " +
    d.toLocaleDateString()
  );
}
