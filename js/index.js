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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]['img-src'])

let midImg = document.getElementById("middle-img")
midImg.setAttribute('src', siteContent["main-content"]['middle-img-src'])

let navbarLength = document.getElementsByTagName('a');
//console.log(navbarLength.length)
for(i = 1; i <= navbarLength.length; i++){
  let navbar = document.getElementsByTagName('a')[i-1];
 
  navbar.textContent = siteContent["nav"][`nav-item-${i}`];
  console.log(navbar)
};

let h1 = document.querySelector('.cta-text h1');
console.log(h1);
h1.textContent = siteContent["cta"]['h1'];
//console.log(h1);
let button = document.querySelector('.cta-text button');
button.textContent = siteContent["cta"]['button'];


let Features = document.querySelectorAll('.top-content .text-content h4')[0];
Features.textContent = siteContent["main-content"]["features-h4"]

let FeaturesP = document.querySelectorAll('.top-content .text-content p')[0]
FeaturesP.textContent = siteContent["main-content"]["features-content"]

let About = document.querySelectorAll('.top-content .text-content h4')[1];
About.textContent = siteContent["main-content"]["about-h4"];

let AboutP = document.querySelectorAll('.top-content .text-content p')[1];
AboutP.textContent = siteContent["main-content"]["about-content"];

//---------------------------
let Services = document.querySelectorAll('.bottom-content .text-content h4')[0];
Services.textContent = siteContent['main-content']['services-h4'];

let ServicesP = document.querySelectorAll('.bottom-content .text-content p')[0];
ServicesP.textContent = siteContent['main-content']['services-content'];

let Product = document.querySelectorAll('.bottom-content .text-content h4')[1]
Product.textContent = siteContent['main-content']['product-h4'];

let ProductP = document.querySelectorAll('.bottom-content .text-content p')[1];
ProductP.textContent = siteContent['main-content']['product-content'];

let Vision = document.querySelectorAll('.bottom-content .text-content h4')[2];
Vision.textContent = siteContent['main-content']['vision-h4'];

let VisionP = document.querySelectorAll('.bottom-content .text-content p')[2];
VisionP.textContent = siteContent['main-content']['vision-content'];

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];


let contactAd = document.querySelectorAll('.contact p')[0];
contactAd.textContent = siteContent['contact']['address']

let contactPh = document.querySelectorAll('.contact p')[1];
contactPh.textContent = siteContent['contact']['phone'];

let contactEm = document.querySelectorAll('.contact p')[2];
contactEm.textContent = siteContent['contact']['email'];

let Footer = document.querySelector('footer p');
Footer.textContent = siteContent['footer']['copyright'];
console.log(Footer);

//------------------task 3 below-----------------

let navColor = document.querySelectorAll('a');
// for(i=0; i< navColor.length; i++){
//   navColor[i].style.color = "green";
//   console.log(navColor[i]);
// }
navColor.forEach( (item) => { return item.style.color = "green";})

let myNav = document.getElementsByTagName('nav')[0];
let NavItem1 = document.createElement('a')
NavItem1.textContent="Ver.2.0"
myNav.prepend(NavItem1);

let NavItem2 = document.createElement('h2');
NavItem2.textContent = 'Code!';
NavItem2.style.color= "darkblue";
NavItem2.style.fontSize= "1rem";
myNav.appendChild(NavItem2);

