"use strict";

//global variables for dad jokes
//url would be
const DAD_JOKES_SEARCH_URL = "https://icanhazdadjoke.com/search";

//controlling function
//when button to search is clicked, return first 10 jokes if there are 10 jokes
//or return everything and add to jokes section
async function handleSearchClick(e) {
  e.preventDefault();
  $(".jokesSection").empty();
  //invoke findSearchedGiphy
  const foundJokes = await findSearchedJokes();
  appendJokes(foundJokes);
}

let response;
//find Jokes for search term
async function findSearchedJokes() {
  let jokeTerm = $("form input").val();
  //console.log(jokeTerm);
  //To get the data, had to enter make a config
  //const params = { term: jokeTerm, limit: 10 };
  //can also just put as params in the config
  let config = {
    headers: {
      Accept: "application/json",
    },
    params: { term: jokeTerm, limit: 10 },
  };
  //  response = await axios({
  //     method: "GET",
  //     config:{headers: },
  //     url: `${DAD_JOKES_SEARCH_URL}`,
  //     params: { term: jokeTerm, limit: 10 },
  //   }); question about how to enter headers
  //?term=${jokeTerm}&limit=10
  response = await axios.get(`${DAD_JOKES_SEARCH_URL}`, config);

  let jokes = response.data.results;

  //   let tenJokes = jokes.map((jokeInfo) => {
  //     return {
  //       joke,
  //     };
  //   });
  //   let arr = [];
  //   for (let item of result) {
  //     arr.push(item.joke);
  //   }
  //   console.log(arr);
  return response.data.results;
}

/** Insert an array of objects with jokes. Append each jokes into the DOM */
function appendJokes(jokes) {
  let eachJoke = jokes.map((joke) => {
    return joke.joke;
  });
  //console.log(eachJoke, console.log);
  for (let joke of eachJoke) {
    let net_score = 0;
    let insertJoke = $(`<div class="haha">
        <li>${joke}</li>
        <li style="list-style:none">Net Score: ${net_score}</li>
        <button class="upVote" type="button">🤙</button>
        <button class="downVote" type="button">👎</button>
        </div>`);
    $(".jokesSection").append(insertJoke);
  }
}

//Append the jokes to the jokesSection
//jokes per line
//with each jokes, comes a btn for vote up / vote down and a section for net score

function increaseNetScore(e) {
  //console.log($(e.target).closest(".upVote"));
}

function decreaseNetScore(e) {
  console.log(e.target);
}

//Bonus: After every vote btn pressed, reorder jokes

//Event Listeners
$(".getJokesBtn").on("click", handleSearchClick);

//Handle Up/Down Vote
//currently .upvote returns a jQuery object
let upVoteBtn = $(".upVote")[0];
$("jokesSection").on("click", "button", function () {
  console.log("hello");
});
$("").click(function () {
  alert("The paragraph was clicked.");
});

$("jokesSection .downVote").on("click", decreaseNetScore);
