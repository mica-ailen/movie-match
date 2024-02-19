const romanceButton = document.getElementById("romance-button");
const dramaButton = document.getElementById("drama-button");
const comedyButton = document.getElementById("comedy-button");
const actionButton = document.getElementById("action-button");
const moviesContainer = document.getElementById("movies-container");
const subtitle = document.getElementById("subtitle");
const randomMovieElement = document.getElementById("randomMovie");

// Define movie arrays
const movies = {
  romance: [
    "Through My Window",
    "Badhaai Do",
    "In Good Hands",
    "After We Fell",
    "Just Like Heaven",
    "Tall Girl 2",
    "Without Saying Goodbye",
  ],
  drama: [
    "Four Brothers",
    "Saving Private Ryan",
    "The Town",
    "Blood and Bone",
    "21 Bridges",
    "The Patriot",
    "Blade Runner 2049",
  ],
  comedy: [
    "Her",
    "The Other Guys",
    "Cloudy With a Chance of Meatballs",
    "The Mitchells vs. the Machines",
    "Murder Mystery",
    "The Edge of Seventeen",
    "Love Actually",
  ],
  action: [
    "Olympus Has Fallen",
    "The Mask of Zorro",
    "Mowgli: Legend of the Jungle",
    "Thunder Force",
    "Project Power",
    "Underground",
    "Headshot",
  ],
};

// Function to display random movie
function displayRandomMovie(movieType) {
  moviesContainer.style.display = "block";
  const randomIndex = Math.floor(Math.random() * movies[movieType].length);
  subtitle.textContent = "You can watch...";
  randomMovieElement.textContent = movies[movieType][randomIndex];
  setTimeout(() => {
    moviesContainer.style.display = "none";
  }, 3000);
}

// Event listeners for each button
romanceButton.addEventListener("click", () => displayRandomMovie("romance"));
dramaButton.addEventListener("click", () => displayRandomMovie("drama"));
comedyButton.addEventListener("click", () => displayRandomMovie("comedy"));
actionButton.addEventListener("click", () => displayRandomMovie("action"));
