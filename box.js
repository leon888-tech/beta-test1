// box.js
const boxRewards = [
  {
    type: 'currency',
    displayName: 'Монети',
    imagePath: 'Img/coin.png',
    minAmount: 10,
    maxAmount: 30,
    chance: 0.4 // 40%
  },
  {
    type: 'currency',
    displayName: 'Кристали',
    imagePath: 'Img/gem.png',
    minAmount: 2,
    maxAmount: 5,
    chance: 0.1 // 10%
  },
  {
    type: 'brawler',
    displayName: 'Ніта',
    imagePath: 'Img/image1920.png',
    brawlerToUnlock: 'nita',
    menuImage: 'Img/image1920.png',
    cardImage: 'Img/brawler_nita.jpg',
    chance: 0.12 // Рідкісний, 12%
  },
  {
    type: 'brawler',
    displayName: 'Кольт',
    imagePath: 'Img/image1921.png',
    brawlerToUnlock: 'colt',
    menuImage: 'Img/image1921.png',
    cardImage: 'Img/brawler_colt.jpg',
    chance: 0.12 // Рідкісний, 12%
  },
  {
    type: 'brawler',
    displayName: 'Брок',
    imagePath: 'Img/image1878.png',
    brawlerToUnlock: 'brock',
    menuImage: 'Img/image1878.png',
    cardImage: 'Img/brawler_brock.jpg',
    chance: 0.05 // Надрідкісний, 5%
  },
  {
    type: 'brawler',
    displayName: 'Дерріл',
    imagePath: 'Img/image1879.png',
    brawlerToUnlock: 'darryl',
    menuImage: 'Img/image1879.png',
    cardImage: 'Img/brawler_darryl.jpg',
    chance: 0.05 // Надрідкісний, 5%
  },
  {
    type: 'brawler',
    displayName: 'Френк',
    imagePath: 'Img/model_frank.png',
    brawlerToUnlock: 'frank',
    menuImage: 'Img/model_frank.png',
    cardImage: 'Img/brawler_frank.jpg',
    chance: 0.04 // Епічний, 4%
  }
];

function getRandomBoxReward() {
  const random = Math.random();
  let cumulativeChance = 0;
  
  for (const reward of boxRewards) {
    cumulativeChance += reward.chance;
    if (random <= cumulativeChance) {
      return reward;
    }
  }
  
  // Fallback to the most common reward if something goes wrong
  return boxRewards[0];
}

function unlockBrawler(brawlerName) {
  const unlockedBrawlers = JSON.parse(localStorage.getItem('unlockedBrawlers') || '["shelly"]');
  if (!unlockedBrawlers.includes(brawlerName)) {
    unlockedBrawlers.push(brawlerName);
    localStorage.setItem('unlockedBrawlers', JSON.stringify(unlockedBrawlers));
  }
}

function isBrawlerUnlocked(brawlerName) {
  const unlockedBrawlers = JSON.parse(localStorage.getItem('unlockedBrawlers') || '["shelly"]');
  return unlockedBrawlers.includes(brawlerName);
}

function getMenuImageForBrawler(brawlerName) {
  switch(brawlerName) {
    case 'shelly':
      return 'Img/image1874.png';
    case 'nita':
      return 'Img/image1920.png';
    case 'colt':
      return 'Img/image1921.png';
    case 'darryl':
      return 'Img/image1879.png';
    case 'brock':
      return 'Img/image1878.png';
    case 'frank':
      return 'Img/model_frank.png';
    default:
      return 'Img/image1874.png';
  }
}

function getBrawlerCardImage(brawlerName) {
  switch(brawlerName) {
    case 'shelly':
      return 'Img/brawler_shelly.jpg';
    case 'nita':
      return 'Img/brawler_nita.jpg';
    case 'colt':
      return 'Img/brawler_colt.jpg';
    case 'darryl':
      return 'Img/brawler_darryl.jpg';
    case 'brock':
      return 'Img/brawler_brock.jpg';
    case 'frank':
      return 'Img/brawler_frank.jpg';
    default:
      return 'Img/brawler_shelly.jpg';
  }
}
