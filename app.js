// Enhanced movie database with more titles and ratings
const movies = {
  romance: [
    { title: "Through My Window", year: "2022", rating: "7.0" },
    { title: "The Notebook", year: "2004", rating: "7.8" },
    { title: "Titanic", year: "1997", rating: "7.8" },
    { title: "Pride and Prejudice", year: "2005", rating: "7.8" },
    { title: "La La Land", year: "2016", rating: "8.0" },
    { title: "The Fault in Our Stars", year: "2014", rating: "7.7" },
    { title: "Me Before You", year: "2016", rating: "7.4" },
    { title: "A Star Is Born", year: "2018", rating: "7.6" },
    { title: "Crazy Rich Asians", year: "2018", rating: "6.9" },
    { title: "To All the Boys I've Loved Before", year: "2018", rating: "7.0" },
  ],
  drama: [
    { title: "The Shawshank Redemption", year: "1994", rating: "9.3" },
    { title: "Forrest Gump", year: "1994", rating: "8.8" },
    { title: "The Godfather", year: "1972", rating: "9.2" },
    { title: "Schindler's List", year: "1993", rating: "8.9" },
    { title: "12 Years a Slave", year: "2013", rating: "8.1" },
    { title: "The Pursuit of Happyness", year: "2006", rating: "8.0" },
    { title: "One Flew Over the Cuckoo's Nest", year: "1975", rating: "8.7" },
    { title: "Good Will Hunting", year: "1997", rating: "8.3" },
    { title: "The Green Mile", year: "1999", rating: "8.6" },
    { title: "A Beautiful Mind", year: "2001", rating: "8.2" },
  ],
  comedy: [
    { title: "The Grand Budapest Hotel", year: "2014", rating: "8.1" },
    { title: "Superbad", year: "2007", rating: "7.6" },
    { title: "Anchorman", year: "2004", rating: "7.2" },
    { title: "Bridesmaids", year: "2011", rating: "6.8" },
    { title: "The Hangover", year: "2009", rating: "7.7" },
    { title: "Groundhog Day", year: "1993", rating: "8.0" },
    { title: "Mean Girls", year: "2004", rating: "7.0" },
    { title: "Zoolander", year: "2001", rating: "6.5" },
    { title: "Napoleon Dynamite", year: "2004", rating: "6.9" },
    { title: "Step Brothers", year: "2008", rating: "6.9" },
  ],
  action: [
    { title: "Mad Max: Fury Road", year: "2015", rating: "8.1" },
    { title: "John Wick", year: "2014", rating: "7.4" },
    { title: "Die Hard", year: "1988", rating: "8.2" },
    { title: "The Dark Knight", year: "2008", rating: "9.0" },
    { title: "Terminator 2", year: "1991", rating: "8.5" },
    { title: "Mission: Impossible", year: "1996", rating: "7.1" },
    { title: "The Matrix", year: "1999", rating: "8.7" },
    { title: "Speed", year: "1994", rating: "7.2" },
    { title: "Lethal Weapon", year: "1987", rating: "7.6" },
    { title: "Casino Royale", year: "2006", rating: "8.0" },
  ],
};

// App state
let recommendationCount = parseInt(
  localStorage.getItem("recommendationCount") || "0"
);
let currentGenre = null;

// DOM elements
const romanceButton = document.getElementById("romance-button");
const dramaButton = document.getElementById("drama-button");
const comedyButton = document.getElementById("comedy-button");
const actionButton = document.getElementById("action-button");
const movieResult = document.getElementById("movie-result");
const resultSubtitle = document.getElementById("result-subtitle");
const movieTitle = document.getElementById("movie-title");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const loadingSpinner = document.getElementById("loading-spinner");
const recommendationCountElement = document.getElementById(
  "recommendation-count"
);

// Update recommendation count display
function updateRecommendationCount() {
  recommendationCountElement.textContent = recommendationCount.toLocaleString();
}

// Enhanced movie display function
function displayRandomMovie(genre) {
  currentGenre = genre;
  const movieList = movies[genre];
  const randomMovie = movieList[Math.floor(Math.random() * movieList.length)];

  // Show overlay and loading
  overlay.classList.add("show");
  movieResult.classList.add("show");
  loadingSpinner.style.display = "block";
  resultSubtitle.textContent = "";
  movieTitle.textContent = "";

  // Simulate loading time for better UX
  setTimeout(() => {
    loadingSpinner.style.display = "none";
    resultSubtitle.textContent = `Perfect ${
      genre.charAt(0).toUpperCase() + genre.slice(1)
    } Pick!`;
    movieTitle.innerHTML = `
            ${randomMovie.title}
            <div style="font-size: 0.6em; color: #ffeb3b; margin-top: 0.5rem;">
                ${randomMovie.year} • ⭐ ${randomMovie.rating}/10
            </div>
        `;

    // Update recommendation count
    recommendationCount++;
    localStorage.setItem("recommendationCount", recommendationCount.toString());
    updateRecommendationCount();

    // Add celebration animation
    movieTitle.style.animation = "pulse 0.6s ease-in-out";
  }, 800);
}

// Close movie result
function closeMovieResult() {
  movieResult.classList.remove("show");
  overlay.classList.remove("show");
  movieTitle.style.animation = "";
}

// Event listeners
romanceButton.addEventListener("click", () => displayRandomMovie("romance"));
dramaButton.addEventListener("click", () => displayRandomMovie("drama"));
comedyButton.addEventListener("click", () => displayRandomMovie("comedy"));
actionButton.addEventListener("click", () => displayRandomMovie("action"));

closeBtn.addEventListener("click", () => {
  if (currentGenre) {
    displayRandomMovie(currentGenre);
  } else {
    closeMovieResult();
  }
});

overlay.addEventListener("click", closeMovieResult);

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && movieResult.classList.contains("show")) {
    closeMovieResult();
  }
});

// Initialize app
updateRecommendationCount();

// Add interactive button effects
const buttons = document.querySelectorAll(".genre-btn");
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px) rotateY(5deg)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) rotateY(0)";
  });
});

// Fun loading messages
const loadingMessages = [
  "Searching through our movie vault...",
  "Consulting with film critics...",
  "Analyzing your taste preferences...",
  "Finding the perfect match...",
  "Almost there...",
];

// Add dynamic loading message
function updateLoadingMessage() {
  const randomMessage =
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  if (loadingSpinner.style.display !== "none") {
    resultSubtitle.textContent = randomMessage;
  }
}

// Update loading message every 300ms during loading
setInterval(updateLoadingMessage, 300);
