document.addEventListener("DOMContentLoaded", () => {
  let translation = {};

  async function loadLanguage(lang) {
    try {
      const response = await fetch(`/projects/lr10/js/${lang}.json`);

      if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
      translation = await response.json();
      updateText();
    } catch (error) {
      console.error("Error loading translations:", error);
      alert("An error occurred while loading translations.");
    }
  }

  function updateText() {
    document.getElementById("greeting").textContent =
      translation.title || "Greeting missing";
    document.getElementById("content").textContent =
      translation.content || "Content missing";
  }

  document
    .getElementById("languageSelector")
    .addEventListener("change", (event) => {
      const selectedLang = event.target.value;
      loadLanguage(selectedLang);
    });

  loadLanguage("en");
});
document.addEventListener("DOMContentLoaded", () => {
  let translation = {};

  async function loadLanguage(lang) {
    try {
      const response = await fetch(`/projects/lr10/js/${lang}.json`);

      if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
      translation = await response.json();
      updateText();
    } catch (error) {
      console.error("Error loading translations:", error);
      alert("An error occurred while loading translations.");
    }
  }

  function updateText() {
    document.getElementById("greeting").textContent =
      translation.title || "Greeting missing";
    document.getElementById("content").textContent =
      translation.content || "Content missing";
  }

  document
    .getElementById("languageSelector")
    .addEventListener("change", (event) => {
      const selectedLang = event.target.value;
      loadLanguage(selectedLang);
    });

  // Load default language
  loadLanguage("en");
});
