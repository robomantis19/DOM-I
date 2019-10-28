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



let nav = document.querySelectorAll('a')
 

nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']





let h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent["cta"]['h1']

let button = document.querySelector('.cta-text button')
button.textContent = siteContent['cta']['button']

let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src'])


let features = document.querySelectorAll('.text-content h4');
features[0].textContent = siteContent['main-content']['features-h4']

let featuresContent = document.querySelector('.text-content p');
featuresContent.textContent = siteContent['main-content']['features-content']

let about = document.querySelectorAll('.text-content h4');
about[1].textContent = siteContent['main-content']["about-h4"]

let aboutContent = document.querySelectorAll('.text-content p');
aboutContent[1].textContent = siteContent['main-content']["about-content"]


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let services = document.querySelector('.bottom-content .text-content h4');
services.textContent = siteContent["main-content"]["services-h4"]

let servicesContent = document.querySelector('.bottom-content .text-content p');
servicesContent.textContent = siteContent['main-content']['services-content']

let product = document.querySelectorAll('.bottom-content .text-content h4');
product[1].textContent = siteContent["main-content"]["product-h4"]

let productContent = document.querySelectorAll('.bottom-content .text-content p');
productContent[1].textContent = siteContent['main-content']['product-content']


let vision = document.querySelectorAll('.bottom-content .text-content h4');
product[2].textContent = siteContent["main-content"]["vision-h4"]

let visionContent = document.querySelectorAll('.bottom-content .text-content p');
productContent[2].textContent = siteContent['main-content']['vision-content']

let contact  = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

let address  = document.querySelectorAll('.contact p');
address[0].textContent = siteContent['contact']['address'];

let phone = document.querySelectorAll('.contact p');
phone[1].textContent = siteContent['contact']['phone']

let email = document.querySelectorAll('.contact p')
email[2].textContent = siteContent['contact']['email']

let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

footer.style.marginBottom = '50px';


