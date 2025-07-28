if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const menuData = {
  
  
  
  pizza: [
    { name: "pizza Margherita", description: "souce tomate+fromage+olive", price: "10 TND",},
    { name: "pizza neptune", description: "souce tomate+fromage+olive+thon", price: "13 TND",},
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
   
  ],
  
  
  makloub: [
    { name: "Makloub au thon ", description: "", price: "6.5 TND", },
    { name: "Makloub jambon ", description: "", price: "6 TND", },
  { name: "Makloub chawarma ", description: "", price: "7 TND", },
  { name: "Makloub escalope ", description: "", price: "7.5 TND", },
 { name: "Makloub escalope panne ", description: "", price: "8 TND", },
    { name: "Makloub kebab poulet ", description: "", price: "8 TND", },
    { name: "Makloub kebab viande ", description: "", price: "9 TND", },
  ],
  sandwich: [
    { name: "Sandwich au thon", description: "", price: "5 TND", },
    { name: "Sandwich au fromage", description: "", price: "5 TND", },
    { name: "Sandwich jambon", description: "", price: "5 TND", },
    { name: "Sandwich chawarma", description: "", price: "6 TND", },
    { name: "Sandwich escalope", description: "", price: "6.5 TND", },
    { name: "Sandwich escalope panne", description: "", price: "7 TND", },
    { name: "Sandwich kebab poulet", description: "", price: "7.5 TND", },
    { name: "Sandwich kebab viande", description: "", price: "8.5 TND", },
    
  ],
  libanais: [
    { name: "Libanais thon", description: "", price: "6.5 TND", },
    { name: "Libanais jambon", description: "", price: "6 TND", },
    { name: "Libanais chawarma", description: "", price: "7 TND", },
    { name: "Libanais escalope", description: "", price: "7.5 TND", },
    { name: "Libanais escalope panne", description: "", price: "8 TND", },
    { name: "Libanais kebab poulet", description: "", price: "8 TND", },
    { name: "Libanais kebab viande", description: "", price: "9 TND", }
  ],
  bagutte: [
    { name: "Baguette thon", description: "", price: "10 TND",  },
    { name: "Baguette chawarma", description: "", price: "10 TND",  },
    { name: "Baguette escalope", description: "", price: "12 TND",  },
    { name: "Baguette oscar", description: "", price: "17 TND",  }
  ],
  cornet: [
    { name: "Cornet escalope ", description: "", price: "12 TND",  },
    { name: "Cornet chawarma ", description: "", price: "10 TND",  },
    { name: "Cornet thon ", description: "", price: "10 TND",  }
  ],
  plats: [
    { name: "Plat kebab de viande", description: "", price: "20 TND",  },
    { name: "Plat kebab de poulet", description: "", price: "16 TND",  },
    { name: "Plat brochette de poulet", description: "", price: "15 TND",  },
    { name: "filet de poissons", description: "", price: "23 TND",  },
    { name: "filet de sole", description: "", price: "20 TND",  },
    { name: "filet sauce champion", description: "", price: "25 TND",  },
    { name: "filet a la mexicain", description: "", price: "20 TND",  },
    { name: "filet grille", description: "", price: "20 TND",  },
    { name: "filet 5 fromage", description: "", price: "30 TND",  },
    { name: "agneau a la vapeur", description: "", price: "23 TND",  },
    { name: "griade mixte", description: "", price: "20 TND",  },
    { name: "cottlete grille", description: "", price: "20 TND",  },
    { name: "foie grille", description: "", price: "20 TND",  },
    { name: "dorade grille", description: "", price: "20 TND",  },
    { name: "crevette soutee", description: "", price: "20 TND",  },
    { name: "cordon bleu", description: "", price: "20 TND",  },
    { name: "cordon a la creme", description: "", price: "20 TND",  },
    { name: "2 cuisse de poulet", description: "", price: "16 TND",  },
    { name: "escalope gratinee fromage", description: "", price: "17 TND",  },
    { name: "escalope rolle farcie", description: "", price: "18 TND",  },
    { name: "escalope a la mexicain", description: "", price: "16 TND",  },
    { name: "escalope a la sause chamignon", description: "", price: "16 TND",  },
    { name: "escalope a la creme ", description: "", price: "14 TND",  },
    { name: "escalope panne", description: "", price: "14 TND",  },
    { name: "escalope grille", description: "", price: "12 TND",  },

    
  
  
    
  ],
  entree: [
    { name: "salade cesar", description: "", price: "10 TND",},
    { name: "salade niçoise", description: "", price: "10 TND",},
    { name: "salade fruit de mer", description: "", price: "15 TND",},
    { name: "salade tunisien", description: "", price: "7 TND",},
    { name: "salade variee", description: "", price: "8 TND",},
    { name: "biske de crevette", description: "", price: "10 TND",},
    { name: "brike thon ", description: "", price: "4 TND",},
    { name: "brike chevrette", description: "", price: "6 TND",},
    { name: "omlette thon ", description: "", price: "4 TND",},
    { name: "omlette chevrette", description: "", price: "6 TND",},
    { name: "ojja merguez", description: "", price: "12 TND",},
    { name: "ojja fruit de mer", description: "", price: "16 TND",},
    { name: "ojja escalope", description: "", price: "14 TND",},
    { name: "ojja royale", description: "", price: "20 TND",},
    
  ],
  pate : [
   { name: "spaghetti fruit de mer", description: "", price: "20 TND", },
   { name: "spaghetti bolognese", description: "", price: "17 TND", },
   { name: "spaghetti polonne 5 fromage", description: "", price: "20 TND", },
   { name: "spaghetti tagliatelle chevrette", description: "", price: "20 TND", },
   { name: "lazagna", description: "", price: "16 TND", },
   { name: "casarettchee", description: "", price: "25 TND", },
   { name: "paella complet", description: "", price: "30 TND", },
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


