         //SCRIPT DU BOUTON TOP BOTTOM
         var boutonvershaut = true;
         //TODO : MAJ future pouvoir switcher entre les différents ancres du document
         function switchHautBas() {
             //on va soit en haut soit en bas de la page et on inverse l'image
             if (!boutonvershaut) {
                 document.getElementById("topcontrol").setAttribute("title", "Retour en haut");
                 document.getElementById("topcontrol").setAttribute("alt", "backtoTOPsymbole");
                 document.getElementById("topcontrol").style.transform = "rotate(0deg)";
                 window.scrollTo(0, document.body.scrollHeight);
                 //  window.location.href = "#toutenbas"
             } else {
                 document.getElementById("topcontrol").setAttribute("title", "Retour en bas");
                 document.getElementById("topcontrol").setAttribute("alt", "backtoBOTTOMsymbole");
                 document.getElementById("topcontrol").style.transform = "rotate(180deg)";
                 window.location.href = "#top";
                 // window.scrollTo(0,document.body.scrollTop);
             }
             boutonvershaut = !boutonvershaut;
         }
         // insere au chargement de la page l'image et les éléments permettant d'aller et revenir du top au bottom
         window.onload = function () {
             //crée la balise top et la positionne tout haut du body
             baliseAuTop = document.createElement("a");
             //afin de switcher entre le bas et haut on ne met pas de href
             //baliseAuTop.setAttribute("href", "#top");

             var premierEnfantDuDocument = document.body.firstChild;
             document.body.insertBefore(baliseAuTop, premierEnfantDuDocument);
             baliseAuTop.innerHTML =
                 "<div id='topcontrol' title='Retour en haut' style='position: fixed; bottom: 5px; right: 5px; opacity: 1; cursor: pointer;'><img src='images/backtotopsymbole.png' width='41' alt='backtotopsymbole' onclick='switchHautBas()' class='ancreTB'></div>";
             // Pour Future MAJ : 
             //On cree une span tout en bas du body pour le switch (mais on cibler autrement)
             //  p = document.createElement("span");
             // document.body.appendChild(p);
             // p.setAttribute("id", "toutenbas");

             //On cree l'élément link qui va donner le style CSS de la page et on le met dans le head 
             var cssMonStyleHead = document.createElement("link");
             cssMonStyleHead.setAttribute("rel", "stylesheet");
             cssMonStyleHead.setAttribute("href", "css/monStyle.css");
             document.head.appendChild(cssMonStyleHead);//on aurait pu mettre querySelector("head")
             //On se positionne a la fin de la page pour plus de commodité dans les reloads des exemples

             window.scrollTo(0, document.body.scrollHeight);
             console.log("Page chargée et prête ! ");
         };