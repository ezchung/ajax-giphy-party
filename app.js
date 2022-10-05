"use strict";
console.log("Let's get this party started!");

const GIPHY_BASE_URL = "http://api.giphy.com/v1";
//"api_key"
const GIPHY_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

/**  */
let response;
async function findSearchedGiphy(e){
    e.preventDefault();
    let searchTerm = $("form input").val();
    response = await axios.get(`${GIPHY_BASE_URL}/gifs/search`, {params: {q:searchTerm, api_key:GIPHY_KEY}});
    //console.log(response.data);
    // $("<img class='giphy'></img>")
    //     .attr("src",`${response.data.data[0].embed_url}`)
    //     .append($(".giphyes"));
    let randomPictureNum = Math.floor(Math.random() * 50); //get length of data
    let url = response.data.data[randomPictureNum].images.original.url;
    let $gif = $(`<img src="${url}"></img>`);
    //gif.src = url;
    $(".giphyes").append($gif);
}

$(".searchBtn")
    .on("click", findSearchedGiphy);

$(".eraseBtn").on("click", thanosSnap);

function thanosSnap(){
    $(".giphyes").empty();
}
