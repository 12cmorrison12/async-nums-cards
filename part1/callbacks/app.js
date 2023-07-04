let favNum = 3;
let apiURL = "http://numbersapi.com";

$.getJSON(`${apiURL}/${favNum}?json`, function(data) {
  console.log(data);
});

let favNums = [7, 11, 22];
$.getJSON(`${apiURL}/${favNums}?json`, function(data) {
  console.log(data);
});

let facts = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});