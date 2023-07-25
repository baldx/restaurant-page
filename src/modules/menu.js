import pageInit from "./PageInit";

function menu() {
   const menuBtn = document.querySelector(".menu");
   const content = document.querySelector(".content");

    menuBtn.addEventListener("click", () => {
        content.innerHTML = "" 
        const header = document.createElement("div");
        header.classList.add("header")
        content.append(header)

        const img = document.createElement("img");
        img.setAttribute("src", "/assets/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png")
        header.appendChild(img);

        const ul = document.createElement("ul");
        header.appendChild(ul)
        const liHome = document.createElement("li");
        const liMenu = document.createElement("li");
        const liContact = document.createElement("li");
        ul.appendChild(liHome)
        ul.appendChild(liMenu)
        ul.appendChild(liContact)

        const btnHome = document.createElement("button");
        const btnMenu = document.createElement("button");
        const btnContact = document.createElement("button");
        btnMenu.classList.add("activeBtn")

        liHome.appendChild(btnHome);
        btnHome.textContent = "Home"
        btnHome.classList.add("home")

        liMenu.appendChild(btnMenu);
        btnMenu.textContent = "Menu"
        btnMenu.classList.add("menu")

        liContact.appendChild(btnContact);
        btnContact.textContent = "Contact"
        btnContact.classList.add("contact")   


        const main = document.createElement("div")
        main.classList.add("main")
        content.appendChild(main)

        const containerMenu = document.createElement("div")
        containerMenu.classList.add("container-menu")
        main.appendChild(containerMenu)

        const card1 = document.createElement("div")
        const card2 = document.createElement("div")
        const card3 = document.createElement("div")
        const card4 = document.createElement("div")
        card1.classList.add("card")
        card2.classList.add("card")
        card3.classList.add("card")
        card4.classList.add("card")

        containerMenu.appendChild(card1)
        containerMenu.appendChild(card2)
        containerMenu.appendChild(card3)
        containerMenu.appendChild(card4)

        const image1 = document.createElement("img")
        const image2 = document.createElement("img")
        const image3 = document.createElement("img")
        const image4 = document.createElement("img")

        card1.appendChild(image1)
        image1.setAttribute("src", "/assets/grekisk_pizza_med_kronartskocka__fetaost_och_oregano.jpg")
        card2.appendChild(image2)
        image2.setAttribute("src", "/assets/Header_GF_Recipe_Glutenfree_pizza_1558x694.jpg")
        card3.appendChild(image3)
        image3.setAttribute("src", "/assets/Pizza-hawaii-foto-Nurlan-Emir-Original-2048x2048.jpg")
        card4.appendChild(image4)
        image4.setAttribute("src", "/assets/download.jpg")
        
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        const p4 = document.createElement("p")

        p1.innerHTML = "Greek pizza"
        p2.innerHTML = "Italian pizza"
        p3.innerHTML = "Hawaii pizza"
        p4.innerHTML = "Mixed pizza"

        card1.appendChild(p1)
        card2.appendChild(p2)
        card3.appendChild(p3)
        card4.appendChild(p4)
        const footer = document.createElement("footer")
        footer.innerHTML = `Made by <a href="#">baldx</a>`
        content.appendChild(footer)

        const homeBtn = document.querySelector(".home");

        homeBtn.classList.remove("home")

        homeBtn.addEventListener("click", () => {
        const content = document.querySelector(".content");
        content.innerHTML = ""
        pageInit()
        })
   })
}

export default menu;