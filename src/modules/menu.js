
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

        liHome.appendChild(btnHome);
        btnHome.textContent = "Home"
        btnHome.classList.add("home")

        liMenu.appendChild(btnMenu);
        btnMenu.textContent = "Menu"
        btnMenu.classList.add("menu")

        liContact.appendChild(btnContact);
        btnContact.textContent = "Contact"
        btnContact.classList.add("contact")   
   })
}

export default menu;