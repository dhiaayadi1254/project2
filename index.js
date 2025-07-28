if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const menuData = {
  shisha: [
    { name: "Double Apple", description: "Classic flavor", price: "15 TND", image: "https://source.unsplash.com/300x200/?shisha" },
    { name: "Blue Mist", description: "Mint & blueberry mix", price: "18 TND", image: "https://source.unsplash.com/300x200/?hookah" }
  ],
  food: [
    { name: "Grilled Chicken", description: "Served with fries", price: "25 TND", image: "https://source.unsplash.com/300x200/?grilled-chicken" },
    { name: "Burger Deluxe", description: "With double cheese", price: "20 TND", image: "https://source.unsplash.com/300x200/?burger" }
  ],
  pizza: [
    { name: "Margherita", description: "Fresh mozzarella & basil", price: "20 TND", image: "https://source.unsplash.com/300x200/?pizza" },
    { name: "Pepperoni", description: "Spicy & tasty", price: "22 TND", image: "https://source.unsplash.com/300x200/?pepperoni-pizza" }
  ],
  drinks: [
    { name: "Mojito", description: "Fresh mint & lime", price: "10 TND", image: "https://source.unsplash.com/300x200/?mojito" },
    { name: "Orange Juice", description: "Freshly squeezed", price: "8 TND", image: "https://source.unsplash.com/300x200/?orange-juice" }
  ],
  desserts: [
    { name: "Chocolate Cake", description: "Rich and moist", price: "12 TND", image: "https://source.unsplash.com/300x200/?chocolate-cake" },
    { name: "Fruit Salad", description: "Seasonal fruits", price: "10 TND", image: "https://source.unsplash.com/300x200/?fruit-salad" }
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
        <img loading="lazy" src="${item.image}" alt="${item.name}" />
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
      case 'shisha': return '💨';
      case 'food': return '🍽️';
      case 'pizza': return '🍕';
      case 'drinks': return '🥤';
      case 'desserts': return '🍰';
      default: return '🍴';
    }
  }
});

/* أضف زر التحديث في ملف index.html وليس هنا */
