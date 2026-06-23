const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  { file: 'sapienza.png', domain: 'uniroma1.it' },
  { file: 'bologna.png', domain: 'unibo.it' },
  { file: 'polimi.png', domain: 'polimi.it' },
  { file: 'milan.png', domain: 'unimi.it' },
  { file: 'padua.png', domain: 'unipd.it' },
  { file: 'turin.png', domain: 'unito.it' },
  { file: 'florence.png', domain: 'unifi.it' },
  { file: 'pisa.png', domain: 'unipi.it' },
  { file: 'naples.png', domain: 'unina.it' },
  { file: 'genoa.png', domain: 'unige.it' }
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

urls.forEach(item => {
  const url = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${item.domain}&size=128`;
  const filePath = path.join(dir, item.file);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
    });
  }).on('error', err => {
    console.error(`Error downloading ${item.file}:`, err);
  });
});
