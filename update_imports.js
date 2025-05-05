import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Dapatkan __dirname dalam ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Direktori dengan komponen UI
const uiDir = path.join(__dirname, 'src', 'components', 'ui');

// Mendapatkan semua file jsx
fs.readdir(uiDir, (err, files) => {
  if (err) {
    console.error('Error membaca direktori:', err);
    return;
  }

  // Filter file jsx
  const jsxFiles = files.filter(file => file.endsWith('.jsx'));

  console.log(`Ditemukan ${jsxFiles.length} file jsx yang perlu diperbarui impornya`);

  // Perbarui import di setiap file
  jsxFiles.forEach(jsxFile => {
    const jsxPath = path.join(uiDir, jsxFile);

    fs.readFile(jsxPath, 'utf8', (err, content) => {
      if (err) {
        console.error(`Error membaca ${jsxFile}:`, err);
        return;
      }

      // Perbarui import dari @/components/ui/
      const updatedContent = content.replace(
        /from ["']@\/components\/ui\/([^"']+)["']/g, 
        'from "@/components/ui/$1.jsx"'
      );

      // Tulis kembali ke file
      fs.writeFile(jsxPath, updatedContent, 'utf8', err => {
        if (err) {
          console.error(`Error menulis ${jsxFile}:`, err);
          return;
        }
        console.log(`Import di ${jsxFile} diperbarui`);
      });
    });
  });
}); 