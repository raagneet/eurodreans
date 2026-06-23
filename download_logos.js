const fs = require('fs');
const https = require('https');

const logos = [
  { name: 'sapienza.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Sapienza_University_of_Rome_logo.svg' },
  { name: 'bologna.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Sigillum_Universitatis_Bononiensis.svg' },
  { name: 'polimi.png', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Logo_Politecnico_Milano.png' },
  { name: 'milan.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_dell%27Universit%C3%A0_degli_Studi_di_Milano.svg' },
  { name: 'padua.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/UniPD_Logo.svg' },
  { name: 'turin.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Universit%C3%A0_degli_Studi_di_Torino_logo.svg' },
  { name: 'florence.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Universit%C3%A0_degli_Studi_di_Firenze_logo.svg' },
  { name: 'pisa.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Universit%C3%A0_di_Pisa_logo.svg' },
  { name: 'naples.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Universit%C3%A0_degli_Studi_di_Napoli_Federico_II_logo.svg' },
  { name: 'genoa.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Universit%C3%A0_degli_Studi_di_Genova_logo.svg' }
];

const options = {
  headers: {
    'User-Agent': 'Eurodreams-dev-script/1.0 (contact@eurodreams.com)'
  }
};

logos.forEach(logo => {
  const file = fs.createWriteStream('public/logos/' + logo.name);
  https.get(logo.url, options, response => {
    response.pipe(file);
  });
});
