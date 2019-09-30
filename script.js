// Få åtkomst till body i html:
let body1 = document.getElementById('body-1');

// Hämta JSON data för länder:
fetch('land.json') 
    .then(function(response) {
        return response.json();
    })

    // Skapa lista med länder:
    .then(function(lander) {

        let ul1 = document.createElement('ul');
        body1.appendChild(ul1);

        liElement1 = "";
        for (i=0; i<lander.length; i++) {
            liElement1 += "<li id=\"lie-" + lander[i].id + "\"> " + lander[i].countryname + " </li>";
        } // Slut på loop

        ul1.innerHTML = liElement1;
    })

    // Hämta JSON data för städer:
    .then(function() {
        fetch('stad.json')
            .then(function(response) {
            return response.json();
        })

        /* Skapa lista med städer, sortera efter befolkninsgmängd 
        och lägg städer under varsitt land i listan med länder:*/ 
        .then(function(stader) {

            // Sorterar JSON data efter befolkningsmängd:
            stader.sort(function (a, b) {
                return b.population - a.population;
          });

            for (j=0; j<stader.length; j++) {
                
                if (stader[j].countryid === 1) {

                    let lie1 = document.getElementById('lie-1');
                    ul11 = document.createElement('ul');
                    lie1.appendChild(ul11);

                    liElement11 = "";
                    liElement11 += "<li> " + stader[j].stadname + "</li>";

                    ul11.innerHTML = liElement11;

                } // SLut på if

                if (stader[j].countryid === 2) {

                    let lie2 = document.getElementById('lie-2');
                    ul22 = document.createElement('ul');
                    lie2.appendChild(ul22);

                    liElement22 = "";
                    liElement22 += "<li> " + stader[j].stadname + "</li>";

                    ul22.innerHTML = liElement22;

                } // SLut på if

                if (stader[j].countryid === 3) {

                    let lie3 = document.getElementById('lie-3');
                    ul33 = document.createElement('ul');
                    lie3.appendChild(ul33);

                    liElement33 = "";
                    liElement33 += "<li> " + stader[j].stadname + "</li>";

                    ul33.innerHTML = liElement33;

                } // SLut på if 
            } // Slut på loop
        })
    })

    // catch funktion som fångar upp fel om ingen data hämtas:
    .catch(function(err1) {
        console.log(JSON.stringify(err1));
    });
