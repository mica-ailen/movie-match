//variables

let romance = document.getElementById("romance-button");
let drama = document.getElementById("drama-button");
let comedy = document.getElementById("comedy-button");
let action = document.getElementById("action-button");
let container = document.getElementById("container");


//Arrays
const romanceMovies = [
  "Through My Window",
  "Badhaai Do",
  "In Good Hands",
  "After We Fell",
  "Just Like Heaven",
  "Tall Girl 2",
  "Without Saying Goodbye",
];



const dramaMovies = [
  "Four Brothers",
  "Saving Private Ryan",
  "The Town",
  "Blood and Bone",
  "21 Bridges",
  "The Patriot",
  "Blade Runner 2049",
];

console.log(dramaMovies);

const comedyMovies = 
["Her", 
"The Other Guys", 
"Cloudy With a Chance of Meatballs", 
"The Mitchells vs. the Machines",
"Murder Mystery",
"The Edge of Seventeen",
"Love Actually"
];

const actionMovies = ["Olympus Has Fallen", 
"The Mask of Zorro", 
"Mowgli: Legend of the Jungle", 
"Thunder Force", 
"Project Power", 
"Underground",
 "Headshot"];

//Functions

const disappear = () => {
  document.getElementById("movies-container").style.display = "none";
};

//Romance Movies
const getRomanceMovie = () => {
  document.getElementById("movies-container").style.display = "block";
  const random =
    romanceMovies[Math.floor(Math.random() * romanceMovies.length)];
  document.getElementById("subtitle").innerHTML = `You can watch...`;
  let randomMovie = (document.getElementById(
    "randomMovie"
  ).innerHTML = `${random}`);

  setTimeout(disappear, 3000);
};

//Drama Movies
const getDramaMovie = () => {
  document.getElementById("movies-container").style.display = "block";
  const dramaMovie = dramaMovies[~~(Math.random() * dramaMovies.length)];
  document.getElementById("subtitle").innerHTML = "You can watch...";
  let randomMovie = (document.getElementById(
    "randomMovie"
  ).innerHTML = `${dramaMovie}`);

  setTimeout(disappear, 3000);
};

//Comedy Movies

const getComedyMovie = () => {
  document.getElementById("movies-container").style.display = "block";
  const comedyMovie = comedyMovies[~~(Math.random() * comedyMovies.length)];
  document.getElementById("subtitle").innerHTML = "You can watch...";
  let randomMovie = (document.getElementById(
    "randomMovie"
  ).innerHTML = `${comedyMovie}`);

  setTimeout(disappear, 3000);
};

//Action movies
const getActionMovie = () => {
  document.getElementById("movies-container").style.display = "block";
  const actionMovie = actionMovies[~~(Math.random() * actionMovies.length)];
  document.getElementById("subtitle").innerHTML = "You can watch...";
  let randomMovie = (document.getElementById(
    "randomMovie"
  ).innerHTML = `${actionMovie}`);

  setTimeout(disappear, 3000);
};
