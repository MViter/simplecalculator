const THEMES = {
   THEME_1: 'theme_1',
   THEME_2: 'theme_2',
   THEME_3: 'theme_3',
}

const textElements = document.querySelectorAll("[class*=text]")
const radioButtons = document.querySelectorAll('input[name="theme"]')
const formGroup = document.querySelector(".radio-wrapper")

const themeName = localStorage.getItem("theme");
applyTheme(themeName)

function applyTheme(themeName, textColor = 'white') {
    Object.values(THEMES).forEach(theme => document.body.classList.remove(theme))
    document.body.classList.add(themeName)
    localStorage.setItem("theme", themeName);
    textElements.forEach(el => {
        el.style.color = textColor
    })
    
    const themeController = document.querySelector(`#radio-theme-${themeName.charAt(themeName.length-1)}`)
    themeController?.setAttribute("checked", true)
} 

formGroup.addEventListener("click", () => {
  const selectedTheme = Array.prototype.slice.call(radioButtons).find(button => button.checked)
    
  if (selectedTheme.id === `radio-${THEMES.THEME_1}`) {
    applyTheme(THEMES.THEME_1, 'white')
  } 
  
  if (selectedTheme.id === `radio-${THEMES.THEME_2}`) {
    applyTheme(THEMES.THEME_2, 'black')
  }
  
  if (selectedTheme.id === `radio-${THEMES.THEME_3}`) {
    applyTheme(THEMES.THEME_3, '#FFED3D')
  }
});
