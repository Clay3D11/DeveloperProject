async function getRandomQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      document.getElementById("quote-text").innerText = data.content;
      document.getElementById("quote-author").innerText = `- ${data.author}`;
      // Reset container height to handle variable content
      document.getElementById("quote-container").style.height = "auto";
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }
  // Initial quote on page load
  getRandomQuote();