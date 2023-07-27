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
        btnContact.setAttribute("id", "contact")


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

        const contactBtn = document.querySelector("#contact") 

         contactBtn.addEventListener("click", () => {
            contact()
         })
   })
}

function contact() {
   const content = document.querySelector(".content");
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
    const contactBtn = document.createElement("button")

    liContact.appendChild(contactBtn);
    contactBtn.textContent = "Contact"
    contactBtn.setAttribute("id", "contact")
    contactBtn.classList.add("activeBtn")
    liHome.appendChild(btnHome);
    btnHome.textContent = "Home"
    btnHome.classList.add("home")


    liMenu.appendChild(btnMenu);
    btnMenu.textContent = "Menu"
    btnMenu.classList.add("menu")

    

    const main = document.createElement("div")
    main.classList.add("main");
    content.appendChild(main);

    const container = document.createElement("div")
    container.classList.add("container");
    main.appendChild(container)

    const heading1 = document.createElement("h2")
    heading1.innerHTML = "Contact"
    container.appendChild(heading1);

    const card1 = document.createElement("div")
    const card2 = document.createElement("div")
    const card3 = document.createElement("div")
    card1.classList.add("card")
    card2.classList.add("card")
    card3.classList.add("card")
    const heading31 = document.createElement("h3")
    const heading32 = document.createElement("h3")
    const heading33 = document.createElement("h3")
    heading31.innerHTML = "Ronald"
    heading32.innerHTML = "Tom"
    heading33.innerHTML = "Arnold"
    card1.appendChild(heading31)
    card2.appendChild(heading32)
    card3.appendChild(heading33)
    const phone1 = document.createElement("p")
    const phone2 = document.createElement("p")
    const phone3 = document.createElement("p")
    const email1 = document.createElement("p")
    const email2 = document.createElement("p")
    const email3 = document.createElement("p")
    phone1.innerHTML = "Phone: 076 812 73 12"
    phone2.innerHTML = "Phone: 076 812 73 12"
    phone3.innerHTML = "Phone: 076 812 73 12"
    card1.appendChild(phone1);
    card2.appendChild(phone2);
    card3.appendChild(phone3);
    email1.innerHTML = "Email: jldsajd@gmail.com"
    email2.innerHTML = "Email: jldsajd@gmail.com"
    email3.innerHTML = "Email: jldsajd@gmail.com"
    card1.appendChild(email1)
    card2.appendChild(email2)
    card3.appendChild(email3)
    container.appendChild(card1)
    container.appendChild(card2)
    container.appendChild(card3)


    const footer = document.createElement("footer")
    footer.innerHTML = `Made by <a href="#">baldx</a>`
    content.appendChild(footer)

    const menuBtn = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menu()
    })

    const homeBtn = document.querySelector(".home");

    homeBtn.addEventListener("click", () => {
        pageInit()
    })
}

export default menu;