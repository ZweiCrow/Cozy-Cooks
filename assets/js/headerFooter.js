const header = document.querySelector("header")
const footer = document.querySelector("footer")

header.innerHTML = `<div id="headerTop">
                      <div id="headerL"><a href="Index.html"><img src="assets/images/Icons/LogoWhite.svg" alt=""></a></div>
                      <div id="headerR">
                        <div>
                          <ul>
                            <li><a href="connexion.html"><img src="assets/images/Icons/User.svg" alt=""><p>Connexion</p></a></li>
                          </ul>
                        </div>
                        <nav>
                          <ul>
                            <a href="Index.html"><li class="NavT">Accueil</li></a>
                            <a href="recettes.html"><li class="NavT">Nos Recettes</li></a>
                            <a href="carnet.html"><li class="NavT">Carnet</li></a>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div id="headerBottom"><img src="assets/images/Carousel1.png" alt=""></div>`

footer.innerHTML = `<div id="backTop"><a href="#header"><img src="assets/images/Icons/footerUp.svg" alt=""></a></div>
                    <div class="container">
                      <div>
                        <ul>
                          <li><p>Mentions Légales</p></li>
                          <li><a href="#">CGU</a></li>
                          <li><a href="#">RGPD</a></li>
                        </ul>
                        <ul>
                          <li><p>Plan du site</p></li>
                          <li><a href="Index.html">Accueil</a></li>
                          <li><a href="recettes.html">Nos Recettes</a></li>
                          <li><a href="carnet.html">Mon Carnet</a></li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li><p>Contacts</p></li>
                          <li><a href="#">FAQ</a></li>
                        </ul>
                        <ul>
                          <li><p></p></li>
                          <li><a href="#"><img src="assets/images/Icons/Instagram.svg" alt=""></a></li>
                          <li><a href="#"><img src="assets/images/Icons/Facebook.svg" alt=""></a></li>
                        </ul>
                      </div>
                    </div>`