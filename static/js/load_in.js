async function getEvents() {
  // Get data from API
  const response = await fetch("/api/events");
  // Parse the data from the API as JSON
  const events = await response.json();


  // Now that we have the data, get a reference to the event list div so we can populate it
  const evList = document.getElementById("eventslist");
  if(!evList) {
    console.log("Couldn't find eventlist!");
    // exit the function, don't do anything else
    return;
  }

  // Iterate over the list of events we got from the API
  for (const ev of events.evs) {

    // For each event in the list, make a new event div and populate it with details

    // This section is a super basic react component
    // Create the new div
    const newev = document.createElement("div");
    newev.className = "event";
    // Fill the content 
    newev.innerHTML = "<h3>"+ev.name+"</h3><div class='evdescription'><span class='date'>"+ev.date+"</span></div>";

    // Put the element in the event list on the page
    evList.appendChild(newev);
  }
}

window.onload = function initSite() {
  // Once the page is loaded, go and grab the data we need to display the site
  getEvents();
}