fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {

        let section1 = document.getElementById("section1")
        let div = document.createElement("div")
        section1.appendChild(div)
        div.className="header"

        let h1 = document.createElement("h1");
        h1.textContent = data.nomCommercial;
        div.appendChild(h1)

        let h2 = document.createElement("h2")
        h2.textContent = data.phraseAccroche;
        div.appendChild(h2)

        let button = document.createElement("button");
        button.textContent = data.texteAppelAction
        div.appendChild(button)

     let sectionB =document.getElementById("section-benefices");

     data.beneficesClients.forEach(element => {
        let h3 = document.createElement("h3");
        h3.textContent= element;
        sectionB.appendChild(h3);

        
    });

    
    data.realisations.forEach(real => {

        let sectionA = document.getElementById("section-realisations");
        let div2 = document.getElementById("realisations-container");
       

        let hDeux = document.createElement("h2");
        div2.appendChild(hDeux);
        hDeux.textContent= real.titre;

        let p = document.createElement("p")
        div2.appendChild(p)
        p.textContent= real.description

        let image = document.createElement("img")
        div2.appendChild(image)
        image.src = real["image-url"]
    
    });

        data.temoignages.forEach(temoignage => {

            let sectionD = document.getElementById("section-temoignages");
            let div3 = document.getElementById("temoignages-container");

            let h4a = document.createElement("h4");
            h4a.textContent= temoignage.prenom;
            div3.appendChild(h4a);

            let tem = document.createElement("h5");
            tem.textContent= temoignage.typePrestation;
            div3.appendChild(tem)

            let p = document.createElement("p");
            p.textContent = temoignage.commentaire;
            div3.appendChild(p);

            let notes = document.createElement("p");
            notes.textContent = temoignage.note + " /5 ";
            div3.appendChild(notes);


        });
        
    
    
        
        
    
    console.log(data);

       //ici vous ecrivez votre code
       
    })
     .catch(error => console.error('Error:', error));
