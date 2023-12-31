import menu from "./menu";


function pageInit() {
    
    const content = document.querySelector(".content")


    const header = document.createElement("div");
    header.classList.add("header")
    content.append(header)

    const img = document.createElement("img");
    img.setAttribute("src", "/assets/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png")
    img.setAttribute("alt", "Pizza Hut Logo") 
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

    liHome.appendChild(btnHome);
    btnHome.textContent = "Home"
    btnHome.classList.add("home")
    btnHome.classList.add("activeBtn")


    liMenu.appendChild(btnMenu);
    btnMenu.textContent = "Menu"
    btnMenu.classList.add("menu")

    liContact.appendChild(btnContact);
    btnContact.textContent = "Contact"
    btnContact.setAttribute("id", "contact")

    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main)

    const container = document.createElement("div");
    container.classList.add("container");
    main.appendChild(container)

    const top = document.createElement("div");
    top.classList.add("top")
    container.appendChild(top)

    const image = document.createElement("img")
    image.setAttribute("src", "/assets/world-pizza-hut-png-logo-9.png")
    image.setAttribute("alt", "Pizza Hut Logo") 
    top.appendChild(image);

    const info = document.createElement("div")
    info.classList.add("info")
    info.innerHTML = "At Pizza Hut we bake authentic Pan Pizza, the famous original and our pride since 1958.<br> As pizza experts, we naturally also serve thin pizzas made with sourdough that we call San Fransisco Style pizza as well as the world's cheesiest Cheesy crust. Should you not find your favorite pizza, you can of course put together your own! <br> In addition to our fantastically good pizzas, you can also find many other good things on the menu such as chicken wings, nacho plate, pasta, garlic bread and our popular soft ice cream. <br> Of course, we also have full rights with beer and wine.<br> Pizza lovers or not, our restaurants offer something for everyone! <br> A warm welcome to us, regardless of whether you want to enjoy our good food on site or at home on the TV sofa with family, friends or in your own company!"
    container.appendChild(info)

    const hours = document.createElement("div")
    hours.classList.add("hours");
    hours.innerHTML = "Open all days from 09:00 to 19:00"
    container.appendChild(hours)

    const footer = document.createElement("footer")
    footer.innerHTML = `Made by <a href="#">baldx</a>`
    content.appendChild(footer)

    const menuBtn = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menu()
    })

    const contactBtn = document.querySelector("#contact") 

    contactBtn.addEventListener("click", () => {
        contact()
    })
}

function contact() {
    const content = document.querySelector(".content");
     content.innerHTML = ""
 
     const header = document.createElement("div");
     header.classList.add("header")
     content.append(header)
 
     const img = document.createElement("img");
     img.setAttribute("src", "/assets/pizza-hut-logo-DBFE2E48AF-seeklogo.com.jpg")
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

export default pageInit;