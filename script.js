console.log("test");




//audio geleerd hoe je audio moet gebruiken in js door: https://www.w3schools.com/graphics/game_sound.asp//

var audio = new Audio('muziek/night-coffee-shop-114856.mp3');

audio.loop = true

function relaxlied () {
  audio.play();
}

relaxlied();



//light dark mode//
//bron: https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f//
/**
* Functie om te zien welke setting er momenteel is en om die te behouden
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  
  /**
  * Functie om de tekst op knop te updaten als je klikt
  */
  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "Light mode" : "Dark mode";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
  }
  
  /**
  * Funtie om het thema op de pagina te veranderen
  */
  function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
  }
  
  
  /**
  * Tijdens laden van de pagina:
  */
  
  /**
  * 1. Pak wat je nodig hebt van de DOM en de system settings tijdens het laden van de pagina
  */
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  /**
  * 2. Werk de huidige pagina settings uit
  */
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  /**
  * 3. Update de light dark themas en knop tekst voor de huidige settings
  */
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  /**
  * 4. Voeg een add event listener toe
  */
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  }); 


  //Scroll animatie//bron: https://codepen.io/andreassikjaer/pen/jOYwvXX

  const observer = new IntersectionObserver(entries => {
    // Ga over de inzendingen heen
    entries.forEach(entry => {
      // Als het element zichtbaar is
      if (entry.isIntersecting) {
        // Word de animatie ingezet
        entry.target.classList.add('image-animation');
      }
    });
  });

  //elementen die geanimeerd worden 
  
  const viewbox = document.querySelectorAll('.polaroid, .tekeningtekst p, .tekeningtekst h4');
  viewbox.forEach(image => {
    observer.observe(image);
  });



  