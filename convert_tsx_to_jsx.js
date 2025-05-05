import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Dapatkan __dirname dalam ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Direktori dengan komponen UI
const uiDir = path.join(__dirname, 'src', 'components', 'ui');

// File yang sudah dikonversi
const alreadyConverted = [
  'accordion.tsx',
  'button.tsx',
  'checkbox.tsx',
  'dialog.tsx',
  'input.tsx',
  'label.tsx',
  'textarea.tsx',
  'toast.tsx',
  'toaster.tsx',
  'sonner.tsx',
  'tooltip.tsx',
  'toggle.tsx',
  'toggle-group.tsx',
  'card.tsx',
  'avatar.tsx',
];

// Menyalin konten file tsx ke jsx
fs.readdir(uiDir, (err, files) => {
  if (err) {
    console.error('Error membaca direktori:', err);
    return;
  }

  // Filter file tsx yang belum dikonversi
  const tsxFiles = files.filter(file => 
    file.endsWith('.tsx') && !alreadyConverted.includes(file)
  );

  console.log(`Ditemukan ${tsxFiles.length} file tsx yang perlu dikonversi`);

  // Salin setiap file
  tsxFiles.forEach(tsxFile => {
    const jsxFile = tsxFile.replace('.tsx', '.jsx');
    const tsxPath = path.join(uiDir, tsxFile);
    const jsxPath = path.join(uiDir, jsxFile);

    fs.readFile(tsxPath, 'utf8', (err, content) => {
      if (err) {
        console.error(`Error membaca ${tsxFile}:`, err);
        return;
      }

      // Tulis ke file jsx
      fs.writeFile(jsxPath, content, 'utf8', err => {
        if (err) {
          console.error(`Error menulis ${jsxFile}:`, err);
          return;
        }
        console.log(`${tsxFile} -> ${jsxFile} selesai`);
      });
    });
  });
}); 