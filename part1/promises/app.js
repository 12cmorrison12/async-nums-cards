let favNum = 3;
let apiURL = "http://numbersapi.com";

$.getJSON(`${apiURL}/${favNum}?json`).then(data => {
  console.log(data);
});

let favNums = [3, 12, 24];
$.getJSON(`${apiURL}/${favNums}?json`).then(data => {
  console.log(data);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${apiURL}/${favNum}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
