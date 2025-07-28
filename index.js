if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const menuData = {
  
  
  
  pizza: [
    { name: "pizza Margherita", description: "souce tomate+fromage+olive", price: "10 TND",},
    { name: "pizza neptune", description: "souce tomate+fromage+olive+thon", price: "12 TND",},
    { name: "pizza regina", description: "sauce tomate+fromage+jambon+champignon", price: "14 TND",},
    { name: "pizza campione", description: "souce tomate +fromage +vinde hachée+champignon", price: "20 TND",},
    { name: "pizza vegetarienne", description: "souce tomate+fromage+poivront+aubergune", price: "14 TND",},
    { name: "pizza napolitaine", description: "souce tomate+fromage+capres+anchois+olive", price: "17 TND",},
    { name: "pizza 4 fromage", description: "souce tomate +fromage+gruyere+gorgonzola+parmesan", price: "20 TND",},
    { name: "pizza 4 saisons", description: "souce tomate+fromage+thon+jambon+champignon+legume", price: "16 TND",},
    { name: "pizza pepperoni", description: "souce tomate+chorizo+parmesan", price: "15 TND",},
    { name: "pizza fruit de mer", description: "souce tomate+fromage+calamre+molle+chevrette", price: "20 TND",},
    { name: "pizza oscar", description: "souce tomate+fromage+thon+chawarma+escalope+champignon+double patte", price: "20 TND",},
    { name: "pizza moyene", description: "souce tomate+fromage+thon+olive", price: "10 TND",},
    { name: "pizza mini", description: "souce tomate+fromage+thon+olive", price: "6 TND",}
 


  ],
  drinks: [
    { name: "Mojito", description: "Fresh mint & lime", price: "10 TND", image: "https://source.unsplash.com/300x200/?mojito" },
    { name: "Orange Juice", description: "Freshly squeezed", price: "8 TND", image: "https://source.unsplash.com/300x200/?orange-juice" }
  ],
  
  
  makloub: [
    { name: "Makloub Poulet", description: "Makloub au poulet grillé", price: "12 TND", image: "https://source.unsplash.com/300x200/?makloub" }
  ],
  sandwich: [
    { name: "Sandwich Thon", description: "Sandwich au thon et salade", price: "8 TND", image: "https://source.unsplash.com/300x200/?sandwich" }
  ],
  libanais: [
    { name: "Tacos Libanais", description: "Tacos à la libanaise", price: "14 TND", image: "https://source.unsplash.com/300x200/?shawarma" }
  ],
  bagutte: [
    { name: "Baguette Farcie", description: "Baguette garnie", price: "10 TND", image: "https://source.unsplash.com/300x200/?baguette" }
  ],
  cornet: [
    { name: "Cornet Viande", description: "Cornet à la viande", price: "11 TND", image: "https://source.unsplash.com/300x200/?wrap" }
  ],
  plats: [
    { name: "Plat Escalope", description: "Escalope panée, frites", price: "18 TND", image: "https://source.unsplash.com/300x200/?escalope" }
  ],
  entree: [
    { name: "Salade Mechouia", description: "Entrée tunisienne", price: "7 TND", image: "https://source.unsplash.com/300x200/?salad" }
  ],
  pate : [
    { name: "Pâtes Carbonara", description: "Pâtes à la carbonara", price: "15 TND", image: "https://source.unsplash.com/300x200/?pasta" }
  ]
};

window.addEventListener('DOMContentLoaded', () => {
  const landing = document.getElementById('landing');
  const categories = document.getElementById('categories');
  const menu = document.getElementById('menu');
  const menuItems = document.getElementById('menuItems');
  const backBtn = document.getElementById('backBtn');
  const darkToggle = document.getElementById('darkModeToggle');
  const floatingBackBtn = document.getElementById('floatingBackBtn');
  const loader = document.getElementById('loader');

  // Show categories after 2 sec landing
  setTimeout(() => {
    landing.classList.add('hidden');
    categories.classList.remove('hidden');
    populateCategories();
  }, 2000);

  // Populate category buttons with fade stagger
  function populateCategories() {
    categories.innerHTML = '';
    Object.keys(menuData).forEach((cat, idx) => {
      const btn = document.createElement('button');
      btn.className = 'category-card fade-in';
      btn.textContent = capitalize(cat);
      btn.setAttribute('data-category', cat);
      btn.style.animationDelay = `${idx * 0.12}s`; // تأخير متدرج
      btn.addEventListener('click', () => {
        fadeOutCategoriesThenShowMenu(cat);
      });
      categories.appendChild(btn);
    });
  }

  function fadeOutCategoriesThenShowMenu(category) {
    const categoryCards = document.querySelectorAll('.category-card');
    let finishedCount = 0;
    categoryCards.forEach((card, idx) => {
      setTimeout(() => {
        card.classList.add('fade-out');
        card.classList.remove('fade-in');
      }, idx * 80);

      card.addEventListener('animationend', () => {
        card.style.display = 'none';
        finishedCount++;
        if (finishedCount === categoryCards.length) {
          categories.classList.add('hidden');
          showMenu(category);
        }
      }, { once: true });
    });
  }

  // Show menu items for selected category with stagger animation
  function showMenu(category) {
    categories.classList.add('hidden');
    menu.classList.remove('hidden');
    menuItems.innerHTML = '';
    menuData[category].forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'menu-item fade-in';
      div.style.animationDelay = `${idx * 0.10}s`; // تأخير متدرج
      div.innerHTML = `
       
        <div class="content">
          <div class="title">${item.name}</div>
          <div class="desc">${item.description}</div>
          <div class="price">${item.price}</div>
        </div>
      `;
      menuItems.appendChild(div);
    });

    // Show floating back button on mobile
    if(window.innerWidth <= 600) {
      floatingBackBtn.style.display = 'block';
    } else {
      floatingBackBtn.style.display = 'none';
    }

    // في JS عند التنقل بين القوائم
    loader.classList.remove('hidden');
    setTimeout(() => loader.classList.add('hidden'), 800);
  }

  // Back to categories
  function backToCategories() {
    menu.classList.add('hidden');
    floatingBackBtn.style.display = 'none';
    categories.classList.remove('hidden');
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, idx) => {
      card.style.display = 'block';
      card.classList.remove('fade-out');
      card.classList.add('fade-in');
      card.style.animationDelay = `${idx * 0.12}s`;
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  backBtn.addEventListener('click', backToCategories);
  floatingBackBtn.addEventListener('click', backToCategories);

  // Dark mode toggle with icon switch
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      darkToggle.textContent = '☀️';
    } else {
      darkToggle.textContent = '🌙';
    }
  });

  // Helper to capitalize first letter
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function iconFor(cat) {
    switch(cat) {
    
      case 'pizza': return '🍕';
      case 'drinks': return '🥤';
       case 'makloub': return '🌯';
      case 'sandwich': return '🥪';
      case 'libanais': return '🧆';
      case 'bagutte': return '🥖';
      case 'cornet': return '🌮';
      case 'plats': return '🍲';
      case 'entree': return '🥗';
      case 'pate': return '🍝';
      default: return '🍴';
    }
  }
});


