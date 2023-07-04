let favNum = 3;
let apiURL = "http://numbersapi.com";

async function part1() {
    let data = await $.getJSON(`${apiURL}/${favNum}?json`);
    console.log(data);
}
part1();

const favNums = [3, 9, 12];
async function part2() {
    let data = await $.getJSON(`${apiURL}/${favNums}?json`);
    console.log(data);
}
part2();

async function part3() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${apiURL}/${favNum}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  part3();