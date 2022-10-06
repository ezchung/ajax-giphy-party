"use strict";

//global variables for dad jokes
//url would be
const DAD_JOKES_SEARCH_URL = "https://icanhazdadjoke.com/search";

//controlling function
//when button to search is clicked, return first 10 jokes if there are 10 jokes
//or return everything and add to jokes section
let response;
//find Jokes for search term
async function findSearchedJokes(e) {
  //can edit this out later. Default is
  e.preventDefault();
  let jokeTerm = $("form input").val();
  let response = await axios.get(
    `${DAD_JOKES_SEARCH_URL}`,
    {
      headers: { Accept: "application/json" },
    },
    {
      params: { term: jokeTerm },
    }
  );
  //console.log("response is", response);
  return response;
}

//Append the jokes to the jokesSection
//jokes per line
//with each jokes, comes a btn for vote up / vote down and a section for net score

//Bonus: After every vote btn pressed, reorder jokes

//Event Listeners
$(".getJokesBtn").on("click", findSearchedJokes);
