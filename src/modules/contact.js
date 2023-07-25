function contact() {
    const content = document.querySelector(".content")


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
}

export default contact();