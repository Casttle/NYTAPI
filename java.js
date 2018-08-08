var firstUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "api-keyf1f5266670b64bfdaab0e26524e74684";
var search;
var beginDate;
var endDate;
var pages;

var url = "https//:api.nytimes.com/svc/search/v2/articlesearch.json?q=cats&api-key=f1f5266670b64bfdaab0e26524e74684";

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "f1f5266670b64bfdaab0e26524e74684",
//   'q': "cats",
//   'begin_date': "20001112",
//   'end_date': "20100620",
//   'page': 5
// });
function search(){
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});



$(".col").append(".form-group")
}

search();























$('#search').on('click', function(){console.log("frisbee")}) ;
$('#search').on('click', function(){console.log("frisbee")}) ;

