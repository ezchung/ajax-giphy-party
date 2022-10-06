"use strict";
console.log("Let's get this party started!");

const GIPHY_BASE_URL = "http://api.giphy.com/v1";
//"api_key"
const GIPHY_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

let response;

/** in findSearchedGiphy, get the url of the searched giphy and return the gif */
async function findSearchedGiphy() {
  //Get form input's value
  let searchTerm = $("form input").val();
  //response. go to await axios and go to url and query for parameters search term and api key
  response = await axios.get(`${GIPHY_BASE_URL}/gifs/search`, {
    params: { q: searchTerm, api_key: GIPHY_KEY },
  });
  let lengthOfgifs = response.data.data.length;
  let randomPictureNum = Math.floor(Math.random() * lengthOfgifs); //get length of data
  let url = response.data.data[randomPictureNum].images.original.url;
  //console.log(url);
  return url;
}

/** Control Function */
//async done with findSearchedGiphy so needs an async here as well to retrieve the
//answer to the promise of url
async function handleSubmitBtn(e) {
  e.preventDefault();
  //invoke findSearchedGiphy
  const foundGiphy = await findSearchedGiphy();
  //invoke appendGiphy
  appendGif(foundGiphy);
  //gif from findSearchedGiphy passed in
}

/** Append Function */
function appendGif(url) {
  let $gif = $(`<img src="${url}"></img>`);
  $(".giphyes").append($gif);
}

//addEventlistener to searchBtn and invoke the control function
$(".searchBtn").on("click", handleSubmitBtn);

$(".eraseBtn").on("click", thanosSnap);

function thanosSnap() {
  $(".giphyes").empty();
}

//first iteration
// /** in findSearchedGiphy, get the url of the searched giphy and return the gif */
// async function findSearchedGiphy(e){
//     e.preventDefault();
//     //Get form input's value
//     let searchTerm = $("form input").val();
//     //response. go to await axios and go to url and query for parameters search term and api key
//     response = await axios.get(`${GIPHY_BASE_URL}/gifs/search`, {params: {q:searchTerm, api_key:GIPHY_KEY}});
//     //console.log(response.data);
//     // $("<img class='giphy'></img>")
//     //     .attr("src",`${response.data.data[0].embed_url}`)
//     //     .append($(".giphyes"));
//     let lengthOfgifs = response.data.data.length;
//     let randomPictureNum = Math.floor(Math.random() * lengthOfgifs); //get length of data
//     let url = response.data.data[randomPictureNum].images.original.url;
//     let $gif = $(`<img src="${url}"></img>`);
//     //function append
//     $(".giphyes").append($gif);
// }

// /** Control Function */
// async function displaySearchedGiphy(e){
//     e.preventDefault();
//     //invoke findSearchedGiphy

//     //invoke appendGiphy
//         //gif from findSearchedGiphy passed in
// }

// /** Append Function */
// function appendGif(){

// }

// //addEventlistener to searchBtn and invoke the control function
// $(".searchBtn")
//     .on("click", findSearchedGiphy);

// $(".eraseBtn").on("click", thanosSnap);

// function thanosSnap(){
//     $(".giphyes").empty();
// }
