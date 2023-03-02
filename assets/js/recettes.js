
/* ------------------------------ Déclaration des éléments ------------------------------ */

let html = "";
let fav = "";
let searchTab = "";
let searchValue = "";

/* ------------------------------ Déclaration des recettes ------------------------------ */
class recipe {
  constructor(name, level, image, favorite){
    this.name = name,
    this.level = level,
    this.image = image,
    this.favorite = favorite
  }
}

const recipe1 = new recipe("Colombo de Poulet", "débutant", "assets/images/Recettes/ColomboDePoulet.jpg", false);
const recipe2 = new recipe("Udon au boeuf", "intermédiaire", "assets/images/Recettes/UdonBoeuf.jpg", true);
const recipe3 = new recipe("Brownie", "débutant", "assets/images/Recettes/Brownie.jpg", false);
const recipe4 = new recipe("Tarte au citron", "intermédiaire", "assets/images/Recettes/TarteAuCitron.jpg", true);

let recipes= [recipe1, recipe2, recipe3, recipe4]

for (const el of recipes) {
  arrToHTML(el);
}


if(document.body.classList.contains("accueil")){
  const homeRecipes = document.querySelector("#Recettes").querySelector(".displayRecipes")
  const homeCarnet = document.querySelector("#Carnet").querySelector(".displayRecipes")
  homeRecipes.querySelector("ul").innerHTML = html;
  homeCarnet.querySelector("ul").innerHTML = fav;
}



if(document.body.classList.contains("recettes")){
  const Recipes = document.querySelector(".displayRecipes")
  const search = document.querySelector("input[name='search']")
  Recipes.querySelector("ul").innerHTML = html;
  
  search.addEventListener("keydown", (e)=>{ // Event lorsqu'une touche est préssée
    searchTab = "";
    searchToString(e)
    if(searchValue === "") { // Si la valeur du champ de recherche est nulle
      Recipes.querySelector("ul").innerHTML = html;
    }else if(searchValue !== "") { // Si la valeur du champ de recherche contient quelque chose
      for (const el of recipes) {
        let str = el.name.toLowerCase()
        if( str.includes(searchValue.toLowerCase())){ // Si la valeur du champ de recherche correspond au nom d'une recette
          searchTab +=  `<li>
              <a href="">
                <div class="top"><p>${el.name}</p><p>${el.level}</p></div>
                <div class="sub"><img src="${el.image}" alt=""></div>
              </a>
            </li>
            `;
        }
      }
      Recipes.querySelector("ul").innerHTML = searchTab;
    }
  })
}



if(document.body.classList.contains("carnet")){
  const Carnet = document.querySelector(".displayRecipes")
  Carnet.querySelector("ul").innerHTML = fav;
  
}



if(document.body.classList.contains("connexion")){
  const connecter = document.querySelector("#connecter")
  const inscription = document.querySelector("#inscription")
  const ongletConnexion = document.querySelector("#connexion")
  const ongletInscription = document.querySelector("#inscrire")
  const tab = document.querySelector("#buttonBack")

  connecter.addEventListener("click", ()=>{
    tab.style.left = "407px"
    ongletConnexion.classList.remove("hide")
    ongletInscription.classList.add("hide")
  })
  inscription.addEventListener("click", ()=>{
    tab.style.left = "740px"
    ongletConnexion.classList.add("hide")
    ongletInscription.classList.remove("hide")
  })
  
}



/* ------------------------------ Fonctions ------------------------------ */


/* ---------- Fonction qui ajoute toutes les recettes à l'onglet "Recettes" et les favorites à l'onglet "Carnet" ---------- */
function arrToHTML(arr) { 
  html +=  `<li>
              <a href="">
                <div class="top"><p>${arr.name}</p><p>${arr.level}</p></div>
                <div class="sub"><img src="${arr.image}" alt=""></div>
              </a>
            </li>
            `;
  if(arr.favorite === true) {
      fav +=  `<li>
                  <a href="">
                    <div class="top"><p>${arr.name}</p><p>${arr.level}</p></div>
                    <div class="sub"><img src="${arr.image}" alt=""></div>
                  </a>
                </li>
                `
  }
}

function searchToString(event) {
  if(event.key === "Backspace"){
    searchValue = searchValue.slice(0, -1);
  }else if(event.key === "Shift" || event.key === "Enter"){

  }else{
    searchValue += event.key;
  }
}