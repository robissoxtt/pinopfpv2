// Seleciona os elementos principais
const generateBtn = document.getElementById('generate-btn');
const defaultBtn = document.getElementById('default-btn');
const downloadBtn = document.getElementById('download-btn');
const avatarDisplay = document.getElementById('avatar-display');
const avatarImage = document.getElementById('avatar-image');
const matrixBackground = document.querySelector('.matrix-background');


avatarImage.onerror = function() {
    console.error("Erro ao carregar a imagem:", avatarImage.src);
    avatarImage.src = 'images/default/fallback_image.png';
};

// Inicializa as opções de acessórios
const accessories = {
  front: ['front (1).png', 'front (2).png', 'front (4).png', 'front (5).png', 
          'front (6).png', 'front (7).png', 'front (8).png', 'front (9).png', 
          ],
  
  hats: ['hat (1).png', 'hat (2).png', 'hat (3).png', 'hat (4).png', 'hat (5).png', 
         'hat (6).png', 'hat (7).png','hat (8).png', 'hat (9).png','hat (10).png',
         'hat (11).png','hat (12).png', 'hat (13).png', 'hat (14).png', 'hat (15).png', 
         'hat (16).png', 'hat (17).png', 'hat (18).png', 'hat (19).png', 'hat (20).png', 
         'hat (21).png', 'hat (22).png', 'hat (23).png', 'hat (24).png', 'hat (25).png', 
         'hat (26).png', 'hat (27).png', 'hat (28).png', 'hat (29).png'],
  
  glasses: ['glasses (1).png', 'glasses (2).png', 'glasses (3).png', 'glasses (4).png', 
            'glasses (5).png', 'glasses (6).png', 'glasses (7).png', 'glasses (8).png', 
            'glasses (9).png', 'glasses (10).png', 'glasses (11).png', 'glasses (12).png', 
            'glasses (13).png', 'glasses (14).png', 'glasses (15).png'],
  
  clothes: ['clothes (1).png', 'clothes (2).png', 'clothes (3).png', 'clothes (4).png', 
            'clothes (5).png', 'clothes (6).png', 'clothes (7).png', 'clothes (8).png', 
            'clothes (9).png','clothes (10).png','clothes (11).png','clothes (12).png', 
            'clothes (13).png','clothes (14).png', 'clothes (15).png','clothes (16).png', 
            'clothes (17).png','clothes (18).png','clothes (19).png','clothes (20).png',
            'clothes (21).png','clothes (22).png','clothes (23).png','clothes (24).png',
            'clothes (25).png','clothes (26).png','clothes (27).png','clothes (28).png',
            'clothes (29).png','clothes (30).png','clothes (31).png','clothes (32).png',
            'clothes (33).png'],
  
  mouth: ['mouth (1).png', 'mouth (2).png', 'mouth (3).png', 'mouth (4).png', 'mouth (5).png', 
          'mouth (6).png'],
  
  cores: ['base (1).png', 'base (2).png', 'base (3).png', 'base (4).png', 'base (5).png', 
          'base (6).png', 'base (7).png', 'base (8).png', 'base (9).png', 'base (10).png', 'base (11).png', 'base (12).png'],
  
  based: ['aesthetic (1).png', 'aesthetic (2).png', 'aesthetic (3).png', 'aesthetic (4).png', 
          'aesthetic (5).png', 'aesthetic (6).png']
};

// Set default avatar, background, front layer, and based layer
function setDefaultAvatar() {
  // Set the default avatar image
  document.getElementById('avatar-image').src = "images/default/default_pino.png";

  // Remove all accessory layers except the front and based layers
  document.querySelectorAll('.layer').forEach(layer => {
    if (layer.id !== 'front-layer' && layer.id !== 'based-layer') {
      layer.remove();
    }
  });

  // Set the default background
  addOrReplaceCategoryImage('background-layer', "images/default/default_background.png", -3);

  // Add the default front layer
  addOrReplaceCategoryImage('front-layer', "images/front/front (1).png", -1);

  // Add the default based layer
  addOrReplaceCategoryImage('based-layer', "images/based/aesthetic (1).png", -2);
}

// Call the function on page load
window.addEventListener('load', setDefaultAvatar);

// Attach the function to the reset button
document.getElementById('default-btn').addEventListener('click', setDefaultAvatar);


// Call the function on page load
window.addEventListener('load', setDefaultAvatar);

// Attach the function to the reset button
document.getElementById('default-btn').addEventListener('click', setDefaultAvatar);


// Função para adicionar ou substituir uma imagem em uma camada
function addOrReplaceCategoryImage(category, imgSrc, zIndex = 1) {
  let existingImg = document.getElementById(category);
  
  if (!existingImg) {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.id = category;
    img.classList.add('layer');
    img.style.zIndex = zIndex;
    avatarDisplay.appendChild(img);
  } else {
    existingImg.src = imgSrc;
  }
}

// Função para configurar a funcionalidade dos sliders
function setupSlider(slider, options) {
  const prevButton = slider.querySelector('.prev');
  const nextButton = slider.querySelector('.next');
  const optionsContainer = slider.querySelector('.options');
  
  let currentIndex = 0;

  function showOptions() {
    const allOptions = optionsContainer.children;
    for (let i = 0; i < allOptions.length; i++) {
      allOptions[i].style.display = (i >= currentIndex && i < currentIndex + 50) ? 'inline-block' : 'none';
    }
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      showOptions();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < options.length - 4) {
      currentIndex += 1;
      showOptions();
    }
  });

  showOptions(); // Chamada inicial para mostrar as opções
}

// Configura os sliders para cada categoria
document.querySelectorAll('.slider').forEach(slider => {
  const options = slider.querySelector('.options').children;
  setupSlider(slider, options);
});

// Adiciona eventos de clique para cada opção
document.querySelectorAll('.front-option').forEach(option => {
  option.addEventListener('click', () => {
    addOrReplaceCategoryImage('front-layer', `images/front/${option.getAttribute('data-img')}`, 5);
  });
});

document.querySelectorAll('.hats-option').forEach(option => {
  option.addEventListener('click', () => {
    addOrReplaceCategoryImage('hat-layer', `images/hats/${option.getAttribute('data-img')}`, 4);
  });
});

document.querySelectorAll('.glasses-option').forEach(option => {
  option.addEventListener('click', () => {
    addOrReplaceCategoryImage('eye-layer', `images/glasses/${option.getAttribute('data-img')}`, 2);
  });
});

document.querySelectorAll('.clothes-option').forEach(option => {
  option.addEventListener('click', () => {
    addOrReplaceCategoryImage('clothes-layer', `images/clothes/${option.getAttribute('data-img')}`, 3);
  });
});

document.querySelectorAll('.mouth-option').forEach(option => {
  option.addEventListener('click', () => {
    addOrReplaceCategoryImage('mouth-layer', `images/mouth/${option.getAttribute('data-img')}`, 6);
  });
});

// Adiciona eventos para as seleções de cores
document.querySelectorAll('.cores-option').forEach(option => {
  option.addEventListener('click', () => {
    addOrReplaceCategoryImage('cores-layer', `images/cores/${option.getAttribute('data-img')}`, 0);
  });
});

// Adiciona eventos para as seleções estéticas
document.querySelectorAll('.based-option').forEach(option => {
  option.addEventListener('click', () => {
    addOrReplaceCategoryImage('based-layer', `images/based/${option.getAttribute('data-img')}`, 0);
  });
});

// Evento para o botão de randomização
generateBtn.addEventListener('click', () => {
  // Função para obter um item aleatório com possibilidade de retornar nulo
  const getRandomWithChance = (category, chance = 0) => {
    // Se a chance for menor que o valor fornecido, retorna null (vazio)
    if (Math.random() < chance) {
      return null; // Deixa a categoria vazia
    }
    return category[Math.floor(Math.random() * category.length)]; // Retorna um item aleatório
  };

  // Gerar valores aleatórios para as categorias, com possibilidade de estar vazio
  const randomFront = getRandomWithChance(accessories.front, 0 );  // 20% de chance de ficar vazio (apenas "front" alterado)
  const randomHat = getRandomWithChance(accessories.hats, 0.3);    // 50% de chance de ficar vazio (para as outras categorias, por padrão)
  const randomGlasses = getRandomWithChance(accessories.glasses, 0.3);
  const randomClothes = getRandomWithChance(accessories.clothes, 0.3);
  const randomMouth = getRandomWithChance(accessories.mouth, 0.3);

  // Escolher aleatoriamente entre Aesthetic (based) ou BG Colors (cores)
  const randomBackgroundCategory = Math.random() > 0.5 ? 'based' : 'cores'; // 50% de chance para cada
  const randomBackgroundImage = accessories[randomBackgroundCategory][Math.floor(Math.random() * accessories[randomBackgroundCategory].length)];

  // Remove qualquer camada anterior
  document.querySelectorAll('.layer').forEach(layer => {
    if (!layer.id.includes('background')) {  // Não remove camada de fundo
      layer.remove();
    }
  });

  // Garantir que um fundo seja sempre atribuído
  addOrReplaceCategoryImage('background-layer', `images/${randomBackgroundCategory}/${randomBackgroundImage}`, 0);

  // Aplica as seleções aleatórias de outros acessórios, caso não sejam nulos
  if (randomFront) addOrReplaceCategoryImage('front-layer', `images/front/${randomFront}`, 1);
  if (randomHat) addOrReplaceCategoryImage('hat-layer', `images/hats/${randomHat}`, 4);
  if (randomGlasses) addOrReplaceCategoryImage('eye-layer', `images/glasses/${randomGlasses}`, 2);
  if (randomClothes) addOrReplaceCategoryImage('clothes-layer', `images/clothes/${randomClothes}`, 3);
  if (randomMouth) addOrReplaceCategoryImage('mouth-layer', `images/mouth/${randomMouth}`, 6);
});

// Função para adicionar ou substituir uma imagem em uma camada
function addOrReplaceCategoryImage(category, imgSrc, zIndex = 1) {
  let existingImg = document.getElementById(category);

  // Cria a camada se não existir
  if (!existingImg) {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.id = category;
    img.classList.add('layer');
    img.style.zIndex = zIndex;
    avatarDisplay.appendChild(img);
    return img; // Retorna a imagem criada
  } else {
    existingImg.src = imgSrc;
    return existingImg; // Retorna a imagem existente
  }
}
// Função de reset, caso o usuário clique em "reset"
defaultBtn.addEventListener('click', () => {
  setDefaultAvatar();
  // Quando o reset é chamado, garantir que o fundo padrão seja aplicado.
  addOrReplaceCategoryImage('background-layer', "images/default/default_background.png", 0);
});

document.getElementById('download-btn').addEventListener('click', async () => {
  const avatarDisplay = document.querySelector('.avatar-display');

  // Create a clone of the avatar display
  const clone = avatarDisplay.cloneNode(true);
  clone.style.position = 'absolute';
  clone.style.margin = '0';
  clone.style.borderRadius = '0';
  clone.style.top = '-9999px';     // Move it off-screen
  clone.style.left = '-9999px';
  clone.style.width = '1500px';    // Set fixed width
  clone.style.height = '500px';    // Set fixed height

  document.body.appendChild(clone); // Add the clone to the DOM

  try {
    // Capture the clone with html2canvas
    const canvas = await html2canvas(clone, {
      width: 1500,
      height: 500,
      scale: 1,                // Capture at higher scale for better quality
      useCORS: true,           // Handle cross-origin images
      backgroundColor: null,   // Maintain transparency if applicable
    });

    // Create the download link and trigger download
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'PINOZATION_COMPLETED.png';
    link.click();
  } catch (error) {
    console.error('Error capturing the image:', error);
  } finally {
    // Clean up the clone
    document.body.removeChild(clone);
  }
});




  