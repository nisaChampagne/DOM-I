const siteContent = {
  "nav": {
    "nav-item-1": 'Services',
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


/////header and nav stuff//
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navvies = document.querySelectorAll('a');

navvies[0].textContent = 'Services';
navvies[1].textContent = 'Product';
navvies[2].textContent = 'Vision';
navvies[3].textContent = 'Features';
navvies[4].textContent = 'About';
navvies[5].textContent = 'Contact';

navvies.forEach(function(currentValue){
  currentValue.style.color = 'green';
});


const navvies2 = document.querySelector('a');
const newATag = document.createElement('a');
const otherNewATag = document.createElement('a');
const questionsText = document.createTextNode('Common Questions');
const subscribeText = document.createTextNode('Subscribe');

newATag.appendChild(questionsText);
navvies2.appendChild(newATag);
otherNewATag.appendChild(subscribeText);
navvies2.appendChild(otherNewATag);

const allNavLinks = document.querySelectorAll('nav a');
allNavLinks.forEach((link)  => {
  link.style.color ='green';
})


////

const header = document.querySelector('#cta-img');
header.src = siteContent.cta['img-src'];

const button = document.querySelector('button');
button.textContent= 'Get Started';
button.style.color = 'black';


const Title = document.querySelector('.cta-text h1');
Title.textContent = "DOM IS AWESOME";


///middle stuff

const featureH4 = document.querySelector ('.text-content h4');
featureH4.textContent = 'Features';

const featureContent = document.querySelector('.text-content p');
featureContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';

const midImg = document.querySelector('.main-content img');
midImg.src = siteContent['main-content']['middle-img-src'];

const bottom = document.querySelectorAll('.bottom-content .text-content h4')
bottom[0].textContent = 'Services';
bottom[1].textContent = 'Product';
bottom[2].textContent = 'Vision';

const bottom2 = document.querySelectorAll('.bottom-content .text-content p');

bottom2[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottom2[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottom2[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


///contact and footer
const contactInfo = document.querySelector('.contact h4');

contactInfo.textContent = 'Contact';

const contactInfo2 = document.querySelectorAll('.contact p');

contactInfo2[0].textContent ="123 Way 456 Street, Somewhere, USA";
contactInfo2[1].textContent = "1 (888) 888 8888";
contactInfo2[2].textContent = "sales@greatidea.io";

const foot = document.querySelector ('footer p');

foot.textContent = siteContent.footer.copyright;