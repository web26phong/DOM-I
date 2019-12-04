const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//////////////////////
//nav section
const links = document.querySelectorAll("a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

//create new link items using prepend and appendChild
const parentLinks = document.querySelector("header nav");
const appendedLink = document.createElement("a");
const prependedLink = document.createElement("a");
appendedLink.setAttribute("href", "https://www.google.com");
prependedLink.setAttribute("href", "https://www.youtube.com");
appendedLink.textContent = "google.com";
prependedLink.textContent = "youtube.com";
parentLinks.appendChild(appendedLink);
parentLinks.prepend(prependedLink);

//turns all links green in color
const greenNav = document.querySelectorAll('a');
greenNav.forEach(element =>{
  element.style.color = 'green';
});

////////////////////////
//cta section
const slogan = document.querySelector(".cta-text h1");
slogan.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const codeSnippetImg = document.getElementById("cta-img");
codeSnippetImg.setAttribute("src", siteContent["cta"]["img-src"]);

///////////////////////////
//main-content section
const featuresH4 = document.querySelector(".top-content .text-content h4:nth-child(1)");
featuresH4.textContent = siteContent["main-content"]["features-h4"];

const featuresP = document.querySelector(".top-content .text-content p:nth-child(2)");
featuresP.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector(".top-content .text-content:nth-child(2) h4:nth-child(1)");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutP = document.querySelector(".top-content .text-content:nth-child(2) p:nth-child(2)");
aboutP.textContent = siteContent["main-content"]["about-content"];

const contentImg = document.getElementById("middle-img");
contentImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const servicesH4 = document.querySelector(".bottom-content .text-content h4:nth-child(1)");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesP = document.querySelector(".bottom-content .text-content p:nth-child(2)");
servicesP.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4:nth-child(1)");
productH4.textContent = siteContent["main-content"]["product-h4"];

const productP = document.querySelector(".bottom-content .text-content:nth-child(2) p:nth-child(2)");
productP.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4:nth-child(1)");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionP = document.querySelector(".bottom-content .text-content:nth-child(3) p:nth-child(2)");
visionP.textContent = siteContent["main-content"]["vision-content"];

////////////////////
//contact section
const contactH4 = document.querySelector(".contact h4:nth-child(1)");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactP1 = document.querySelector(".contact p:nth-child(2)");

let newContactP1 = siteContent["contact"]["address"];
contactP1.style.maxWidth = "220px";
// contactP1.innerHTML = "123 Way 456 Street <br />Somewhere, USA";
contactP1.textContent = newContactP1;


const contactP2 = document.querySelector(".contact p:nth-child(3)");
contactP2.textContent = siteContent["contact"]["phone"];

const contactP3 = document.querySelector(".contact p:nth-child(4)");
contactP3.textContent = siteContent["contact"]["email"];

/////////////////////
//footer section
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
