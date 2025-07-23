document.addEventListener("DOMContentLoaded", () => {
  const newsContainer = document.getElementById("news-container");

  const sampleNews = [
    { title: "New tech hub opens in Bangalore", source: "Times of India" },
    { title: "Asian summit focuses on AI and cybersecurity", source: "Hindustan Times" },
    { title: "Misinformation on floods circulating on social media", source: "The Hindu" }
  ];

  sampleNews.forEach(news => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <h4>${news.title}</h4>
      <p><strong>Source:</strong> ${news.source}</p>
    `;
    newsContainer.appendChild(card);
  });
});
function detectNews() {
  const input = document.getElementById("newsInput").value;
  const resultContainer = document.getElementById("resultContainer");

  if (input.trim() === "") {
    alert("Please enter a news headline.");
    return;
  }

  // For now, simulate a fake news check
  const fakeExamples = ["Aliens landed", "Modi resigns", "COVID vaccine turns people into zombies"];
  const isFake = fakeExamples.includes(input.trim());

  resultContainer.style.display = "block";

  if (isFake) {
    resultContainer.innerHTML = `
      <h3>❌ Fake News Detected</h3>
      <p>This news is identified as fake based on known misinformation patterns.</p>
      <p><strong>Reason:</strong> Spread via WhatsApp forwards and social media rumors.</p>
    `;
  } else {
    resultContainer.innerHTML = `
      <h3>✅ This news appears to be real</h3>
      <p>Based on our sources, this news is either verified or not flagged.</p>
    `;
  }
}

function detectFakeNews() {
  const inputText = document.getElementById("newsInput").value;
  const resultDiv = document.getElementById("result");

  if (inputText.trim() === "") {
    resultDiv.style.color = "orange";
    resultDiv.innerText = "⚠️ Please enter some text.";
    return;
  }

  // Dummy detection logic
  if (inputText.toLowerCase().includes("click here" || "share fast")) {
    resultDiv.style.color = "red";
    resultDiv.innerText = "🚫 Fake News Detected!";
  } else {
    resultDiv.style.color = "green";
    resultDiv.innerText = "✅ This appears to be Real News!";
  }
}