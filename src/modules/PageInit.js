function pageInit() {
    
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


const main = document.createElement("div");
main.classList.add("home-main");
content.appendChild(main)

const container = document.createElement("div");
container.classList.add("home-container");
main.appendChild(container)

const top = document.createElement("div");
top.classList.add("top")
container.appendChild(top)

const image = document.createElement("img")
image.setAttribute("src", "/assets/world-pizza-hut-png-logo-9.png")
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
}


export default pageInit;