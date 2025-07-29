if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const menuData = {
  pizza: [
    { name: "pizza Margherita", description: "souce tomate+fromage+olive", price: "10 TND", },
    { name: "pizza neptune", description: "souce tomate+fromage+olive+thon", price: "13 TND", },
    { name: "pizza regina", description: "sauce tomate+fromage+jambon+champignon", price: "14 TND", },
    { name: "pizza campione", description: "souce tomate +fromage +vinde hachée+champignon", price: "20 TND", },
    { name: "pizza vegetarienne", description: "souce tomate+fromage+poivront+aubergune", price: "14 TND", },
    { name: "pizza napolitaine", description: "souce tomate+fromage+capres+anchois+olive", price: "17 TND", },
    { name: "pizza 4 fromage", description: "souce tomate +fromage+gruyere+gorgonzola+parmesan", price: "20 TND", },
    { name: "pizza 4 saisons", description: "souce tomate+fromage+thon+jambon+champignon+legume", price: "16 TND", },
    { name: "pizza pepperoni", description: "souce tomate+chorizo+parmesan", price: "15 TND", },
    { name: "pizza fruit de mer", description: "souce tomate+fromage+calamre+molle+chevrette", price: "20 TND", },
    { name: "pizza oscar", description: "souce tomate+fromage+thon+chawarma+escalope+champignon+double patte", price: "20 TND", },
    { name: "pizza moyene", description: "souce tomate+fromage+thon+olive", price: "10 TND", },
    { name: "pizza mini", description: "souce tomate+fromage+thon+olive", price: "6 TND", }
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
    { name: "Baguette thon", description: "", price: "10 TND", },
    { name: "Baguette chawarma", description: "", price: "10 TND", },
    { name: "Baguette escalope", description: "", price: "12 TND", },
    { name: "Baguette oscar", description: "", price: "17 TND", }
  ],
  cornet: [
    { name: "Cornet escalope ", description: "", price: "12 TND", },
    { name: "Cornet chawarma ", description: "", price: "10 TND", },
    { name: "Cornet thon ", description: "", price: "10 TND", }
  ],
  plats: [
    { name: "Plat kebab de viande", description: "", price: "20 TND", },
    { name: "Plat kebab de poulet", description: "", price: "16 TND", },
    { name: "Plat brochette de poulet", description: "", price: "15 TND", },
    { name: "filet de poissons", description: "", price: "23 TND", },
    { name: "filet de sole", description: "", price: "20 TND", },
    { name: "filet sauce champion", description: "", price: "25 TND", },
    { name: "filet a la mexicain", description: "", price: "20 TND", },
    { name: "filet grille", description: "", price: "20 TND", },
    { name: "filet 5 fromage", description: "", price: "30 TND", },
    { name: "agneau a la vapeur", description: "", price: "23 TND", },
    { name: "griade mixte", description: "", price: "20 TND", },
    { name: "cottlete grille", description: "", price: "20 TND", },
    { name: "foie grille", description: "", price: "20 TND", },
    { name: "dorade grille", description: "", price: "20 TND", },
    { name: "crevette soutee", description: "", price: "20 TND", },
    { name: "cordon bleu", description: "", price: "20 TND", },
    { name: "cordon a la creme", description: "", price: "20 TND", },
    { name: "2 cuisse de poulet", description: "", price: "16 TND", },
    { name: "escalope gratinee fromage", description: "", price: "17 TND", },
    { name: "escalope rolle farcie", description: "", price: "18 TND", },
    { name: "escalope a la mexicain", description: "", price: "16 TND", },
    { name: "escalope a la sause chamignon", description: "", price: "16 TND", },
    { name: "escalope a la creme ", description: "", price: "14 TND", },
    { name: "escalope panne", description: "", price: "14 TND", },
    { name: "escalope grille", description: "", price: "12 TND", },





  ],
  entree: [
    { name: "salade cesar", description: "", price: "10 TND", },
    { name: "salade niçoise", description: "", price: "10 TND", },
    { name: "salade fruit de mer", description: "", price: "15 TND", },
    { name: "salade tunisien", description: "", price: "7 TND", },
    { name: "salade variee", description: "", price: "8 TND", },
    { name: "biske de crevette", description: "", price: "10 TND", },
    { name: "brike thon ", description: "", price: "4 TND", },
    { name: "brike chevrette", description: "", price: "6 TND", },
    { name: "omlette thon ", description: "", price: "4 TND", },
    { name: "omlette chevrette", description: "", price: "6 TND", },
    { name: "ojja merguez", description: "", price: "12 TND", },
    { name: "ojja fruit de mer", description: "", price: "16 TND", },
    { name: "ojja escalope", description: "", price: "14 TND", },
    { name: "ojja royale", description: "", price: "20 TND", },

  ],
  pate: [
    { name: "spaghetti fruit de mer", description: "", price: "20 TND", },
    { name: "spaghetti bolognese", description: "", price: "17 TND", },
    { name: "spaghetti polonne 5 fromage", description: "", price: "20 TND", },
    { name: "spaghetti tagliatelle chevrette", description: "", price: "20 TND", },
    { name: "lazagna", description: "", price: "16 TND", },
    { name: "casarettchee", description: "", price: "25 TND", },
    { name: "paella complet", description: "", price: "30 TND", },
  ]
};

// Map category keys to emojis
const emojiMap = {
  pizza: '🍕',
  drinks: '🥤',
  makloub: '🌯',
  sandwich: '🥪',
  libanais: '🧆',
  bagutte: '🥖',
  cornet: '🌮',
  plats: '🍲',
  entree: '🥗',
  pate: '🍝'
};

// Map category keys to image filenames
const imageMap = {
  pizza: 'images/pizza.png',
  drinks: 'images/drinks.png',
  makloub: 'images/makloub.png',
  sandwich: 'images/sandwich.png',
  libanais: 'images/libanais.png',
  bagutte: 'images/bagutte.png',
  cornet: 'images/cornet.png',
  plats: 'images/plats.png',
  entree: 'images/entree.png',
  pate: 'images/pate.png'
};

// Map menu item names to image filenames
const itemImageMap = {
  // Pizza
  "pizza Margherita": "images/pizza_margherita.jpg",
  "pizza neptune": "images/pizza_neptune.jpeg",
  "pizza regina": "images/pizza_margherita.jpg",
  "pizza campione": "images/pizza_campione.jpg",
  "pizza vegetarienne": "images/pizza_vegetarienne.jpg",
  "pizza napolitaine": "images/pizza_napolitaine.jpg",
  "pizza 4 fromage": "images/pizza_4_fromage.jpg",
  "pizza 4 saisons": "images/pizza_4_saisons.jpg",
  "pizza pepperoni": "images/pizza_pepperoni.jpg",
  "pizza fruit de mer": "images/pizza_fruit_de_mer.jpg",
  "pizza oscar": "images/pizza_oscar.jpg",
  "pizza moyene": "images/pizza_moyene.jpg",
  "pizza mini": "images/pizza_mini.jpg",
  // Makloub
  "Makloub au thon ": "images/makloub_au_thon.jpeg",
  "Makloub jambon ": "images/makloub_jambon.jpg",
  "Makloub chawarma ": "images/makloub_chawarma.jpg",
  "Makloub escalope ": "images/makloub_escalope.jpg",
  "Makloub escalope panne ": "images/makloub_escalope_panne.jpg",
  "Makloub kebab poulet ": "images/makloub_kebab_poulet.jpg",
  "Makloub kebab viande ": "images/makloub_kebab_viande.jpg",
  // Sandwich
  "Sandwich au thon": "images/sandwich_au_thon.jpeg",
  "Sandwich au fromage": "images/sandwich_au_fromage.jpg",
  "Sandwich jambon": "images/sandwich_jambon.jpg",
  "Sandwich chawarma": "images/sandwich_chawarma.jpg",
  "Sandwich escalope": "images/sandwich_escalope.jpg",
  "Sandwich escalope panne": "images/sandwich_escalope_panne.jpg",
  "Sandwich kebab poulet": "images/sandwich_kebab_poulet.jpg",
  "Sandwich kebab viande": "images/sandwich_kebab_viande.jpg",
  // Libanais
  "Libanais thon": "images/libanais_thon.jpeg",
  "Libanais jambon": "images/libanais_jambon.jpg",
  "Libanais chawarma": "images/libanais_chawarma.jpg",
  "Libanais escalope": "images/libanais_escalope.jpg",
  "Libanais escalope panne": "images/libanais_escalope_panne.jpg",
  "Libanais kebab poulet": "images/libanais_kebab_poulet.jpg",
  "Libanais kebab viande": "images/libanais_kebab_viande.jpg",
  // Bagutte
  "Baguette thon": "images/baguette_thon.jpg",
  "Baguette chawarma": "images/baguette_chawarma.jpg",
  "Baguette escalope": "images/baguette_escalope.jpg",
  "Baguette oscar": "images/baguette_oscar.jpg",
  // Cornet
  "Cornet escalope ": "images/cornet_escalope.jpg",
  "Cornet chawarma ": "images/cornet_chawarma.jpg",
  "Cornet thon ": "images/cornet_thon.jpg",
  // Plats
  "Plat kebab de viande": "images/plat_kebab_de_viande.jpg",
  "Plat kebab de poulet": "images/plat_kebab_de_poulet.jpg",
  "Plat brochette de poulet": "images/plat_brochette_de_poulet.jpg",
  "filet de poissons": "images/filet_de_poissons.jpg",
  "filet de sole": "images/filet_de_sole.jpg",
  "filet sauce champion": "images/filet_sauce_champion.jpg",
  "filet a la mexicain": "images/filet_a_la_mexicain.jpg",
  "filet grille": "images/filet_grille.jpg",
  "filet 5 fromage": "images/filet_5_fromage.jpg",
  "agneau a la vapeur": "images/agneau_a_la_vapeur.jpg",
  "griade mixte": "images/griade_mixte.jpg",
  "cottlete grille": "images/cottlete_grille.jpg",
  "foie grille": "images/foie_grille.jpg",
  "dorade grille": "images/dorade_grille.jpg",
  "crevette soutee": "images/crevette_soutee.jpg",
  "cordon bleu": "images/cordon_bleu.jpg",
  "cordon a la creme": "images/cordon_a_la_creme.jpg",
  "2 cuisse de poulet": "images/2_cuisse_de_poulet.jpg",
  "escalope gratinee fromage": "images/escalope_gratinee_fromage.jpg",
  "escalope rolle farcie": "images/escalope_rolle_farcie.jpg",
  "escalope a la mexicain": "images/escalope_a_la_mexicain.jpg",
  "escalope a la sause chamignon": "images/escalope_a_la_sause_chamignon.jpg",
  "escalope a la creme ": "images/escalope_a_la_creme.jpg",
  "escalope panne": "images/escalope_panne.jpg",
  "escalope grille": "images/escalope_grille.jpg",
  // Entree
  "salade cesar": "images/salade_cesar.jpg",
  "salade niçoise": "images/salade_nicoise.jpg",
  "salade fruit de mer": "images/salade_fruit_de_mer.jpg",
  "salade tunisien": "images/salade_tunisien.jpg",
  "salade variee": "images/salade_variee.jpg",
  "biske de crevette": "images/biske_de_crevette.jpg",
  "brike thon ": "images/brike_thon.jpg",
  "brike chevrette": "images/brike_chevrette.jpg",
  "omlette thon ": "images/omlette_thon.jpg",
  "omlette chevrette": "images/omlette_chevrette.jpg",
  "ojja merguez": "images/ojja_merguez.jpg",
  "ojja fruit de mer": "images/ojja_fruit_de_mer.jpg",
  "ojja escalope": "images/ojja_escalope.jpg",
  "ojja royale": "images/ojja_royale.jpg",
  // Pate
  "spaghetti fruit de mer": "images/spaghetti_fruit_de_mer.jpg",
  "spaghetti bolognese": "images/spaghetti_bolognese.jpg",
  "spaghetti polonne 5 fromage": "images/spaghetti_polonne_5_fromage.jpg",
  "spaghetti tagliatelle chevrette": "images/spaghetti_tagliatelle_chevrette.jpg",
  "lazagna": "images/lazagna.jpg",
  "casarettchee": "images/casarettchee.jpg",
  "paella complet": "images/paella_complet.jpg",
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
      btn.setAttribute('data-category', cat);
      btn.style.animationDelay = `${idx * 0.12}s`;

      // Only show formatted label with emoji (no image, no duplicate text)
      btn.textContent = `${capitalize(cat)} ${emojiMap[cat] || ''}`;

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
      div.style.animationDelay = `${idx * 0.10}s`;
      div.innerHTML = `
  <div class="content">
    <img src="${itemImageMap[item.name] || 'images/placeholder.jpg'}" alt="${item.name}" class="menu-item-img" />
    <div class="title">${item.name}</div>
    <div class="desc">${item.description}</div>
    <div class="price">${item.price}</div>
  </div>
`;

      menuItems.appendChild(div);
    });

    // Show floating back button on mobile
    if (window.innerWidth <= 600) {
      floatingBackBtn.style.display = 'block';
    } else {
      floatingBackBtn.style.display = 'none';
    }


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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // function iconFor(cat) {
  //   switch (cat) {

  //     case 'pizza🍕': return '🍕';
  //     case 'drinks 🥤': return '🥤';
  //     case 'makloub 🌯': return '🌯';
  //     case 'sandwich 🥪': return '🥪';
  //     case 'libanais 🧆': return '🧆';
  //     case 'bagutte 🥖': return '🥖';
  //     case 'cornet 🌮': return '🌮';
  //     case 'plats 🍲': return '🍲';
  //     case 'entree 🥗': return '🥗';
  //     case 'pate 🍝': return '🍝';
  //     default: return '🍴';
  //   }
  // }
  const clickSound = new Audio('');

  document.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});


