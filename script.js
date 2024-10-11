const API_URL = 'https://superheroapi.com/api.php/5d53b0f1e71ed89f6c22d6873e8d5b21'; // Reemplaza con tu token de SuperHero API

// Lista de héroes populares de Marvel
const marvelHeroes = [
  'Spider-Man', 
  'Iron Man', 
  'Thor', 
  'Hulk', 
  'Black Widow', 
  'Captain America', 
  'Doctor Strange', 
  'Wolverine', 
  'Deadpool', 
  'Ant-Man', 
  'Scarlet Witch', 
  'Vision', 
  'Hawkeye', 
  'Falcon', 
  'Black Panther', 
  'Star-Lord', 
  'Gamora', 
  'Rocket Raccoon', 
  'Groot', 
  'Drax the Destroyer', 
  'Loki', 
  'Nick Fury', 
  'Silver Surfer', 
  'Ghost Rider', 
  'Daredevil', 
  'Jessica Jones', 
  'Luke Cage', 
  'Iron Fist', 
  'Punisher', 
  'Venom', 
  'Thanos', 
  'Ultron', 
  'Red Skull', 
  'Magneto', 
  'Storm', 
  'Beast', 
  'Jean Grey', 
  'Cyclops', 
  'Professor X', 
  'Colossus', 
  'Nightcrawler', 
  'Quicksilver', 
  'Rogue', 
  'Sabretooth', 
  'Mystique', 
  'Kingpin', 
  'Green Goblin', 
  'Sandman', 
  'Electro', 
  'Doctor Octopus', 
  'Shang-Chi', 
  'Moon Knight', 
  'The Thing', 
  'Human Torch', 
  'Invisible Woman', 
  'Mister Fantastic', 
  'She-Hulk', 
  'War Machine', 
  'Winter Soldier', 
  'Bucky Barnes'
];


// Mostrar héroes en tarjetas
function displayHeroes(heroes) {
  const heroList = document.getElementById("hero-list");
  heroList.innerHTML = ''; // Limpiar la lista anterior

  if (heroes.length === 0) {
    heroList.innerHTML = '<p>No se encontraron héroes.</p>';
    return;
  }

  heroes.forEach(hero => {
    const heroCard = document.createElement("div");
    heroCard.classList.add("hero-card");

    heroCard.innerHTML = `
      <img src="${hero.image.url}" alt="${hero.name}" class="hero-image" />
      <h3>${hero.name}</h3>
      <p><strong>Nombre completo:</strong> ${hero.biography['full-name']}</p>
      <p><strong>Lugar de nacimiento:</strong> ${hero.biography['place-of-birth']}</p>
    `;

    heroList.appendChild(heroCard);
  });
}

// Función para buscar héroes de Marvel
async function getMarvelHeroes() {
  const heroesData = [];

  for (const hero of marvelHeroes) {
    try {
      const response = await fetch(`${API_URL}/search/${hero}`);
      const data = await response.json();

      if (data.response === 'success') {
        heroesData.push(data.results[0]); // Añadir el primer resultado encontrado para el héroe
      }
    } catch (error) {
      console.error(`Error fetching hero ${hero}`, error);
    }
  }

  displayHeroes(heroesData);
}

// Ejecutar la búsqueda de héroes de Marvel al cargar la página
document.addEventListener("DOMContentLoaded", getMarvelHeroes);
