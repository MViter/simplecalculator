const THEMES = {
  THEME_1: 'theme_1',
  THEME_2: 'theme_2',
  THEME_3: 'theme_3',
}

const TEXT_COLOR = {
  THEME_1: 'white',
  THEME_2: 'black',
  THEME_3: '#FFED3D',
}

const textElements = document.querySelectorAll("[class*=text]")
const radioButtons = document.querySelectorAll('input[name="theme"]')
const formGroup = document.querySelector(".radio-wrapper")

// apply pre-selected theme from localstorage, or default one (from :root) will be used
const themeName = localStorage.getItem("theme");
applyTheme(themeName)

function applyTheme(themeName, textColor = 'white') {
  Object.values(THEMES).forEach(theme => document.body.classList.remove(theme))
  document.body.classList.add(themeName)
  localStorage.setItem("theme", themeName);
  textElements.forEach(el => {
    el.style.color = TEXT_COLOR[themeName.toUpperCase()]
  })
    
  const themeController = document.querySelector(`#radio-theme-${themeName.charAt(themeName.length-1)}`)
  themeController?.setAttribute("checked", true)
} 

formGroup.addEventListener("click", () => {
  const selectedTheme = Array.prototype.slice.call(radioButtons).find(button => button.checked)
    
  if (selectedTheme.id === 'radio-theme-1') {
    applyTheme(THEMES.THEME_1, 'white')
  } 
  
  if (selectedTheme.id === 'radio-theme-2') {
    applyTheme(THEMES.THEME_2, 'black')
  }
  
  if (selectedTheme.id === 'radio-theme-3') {
    applyTheme(THEMES.THEME_3, '#FFED3D')
  }
});
