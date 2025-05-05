import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Dapatkan __dirname dalam ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Direktori dengan komponen UI
const uiDir = path.join(__dirname, 'src', 'components', 'ui');

// File yang sudah dikonversi secara manual
const alreadyConverted = [
  'accordion.jsx',
  'button.jsx',
  'checkbox.jsx',
  'dialog.jsx',
  'input.jsx',
  'label.jsx',
  'textarea.jsx',
  'toast.jsx',
  'toaster.jsx',
  'sonner.jsx',
  'tooltip.jsx',
  'toggle.jsx',
  'toggle-group.jsx',
  'card.jsx',
  'avatar.jsx',
];

// Mendapatkan semua file jsx
fs.readdir(uiDir, (err, files) => {
  if (err) {
    console.error('Error membaca direktori:', err);
    return;
  }

  // Filter file jsx yang belum dikonversi secara manual
  const jsxFiles = files.filter(file => 
    file.endsWith('.jsx') && !alreadyConverted.includes(file)
  );

  console.log(`Ditemukan ${jsxFiles.length} file jsx yang perlu dibersihkan tipe TypeScript`);

  // Bersihkan TypeScript di setiap file
  jsxFiles.forEach(jsxFile => {
    const jsxPath = path.join(uiDir, jsxFile);

    fs.readFile(jsxPath, 'utf8', (err, content) => {
      if (err) {
        console.error(`Error membaca ${jsxFile}:`, err);
        return;
      }

      // Hapus imports yang berisi "type" 
      let updatedContent = content.replace(/import\s+.*?\btype\b.*?from\s+["'].*?["'];?\s*/g, '');
      
      // Hapus "type VariantProps" import
      updatedContent = updatedContent.replace(/import\s+{.*?VariantProps.*?}\s+from\s+["'].*?["'];?\s*/g, 'import { cva } from "class-variance-authority";\n');
      
      // Hapus type annotations dan generics untuk React.forwardRef
      updatedContent = updatedContent.replace(/React\.forwardRef<.*?>/g, 'React.forwardRef');
      
      // Hapus generics dari component references
      updatedContent = updatedContent.replace(/<.*?>/g, '');
      
      // Hapus export type statements
      updatedContent = updatedContent.replace(/export\s+type\s+.*?;/g, '');
      
      // Hapus tipe dari parameter fungsi
      updatedContent = updatedContent.replace(/(\w+)\s*:\s*\w+(\[\])?(,|\))/g, '$1$3');
      
      // Hapus tipe const assertions
      updatedContent = updatedContent.replace(/\s+as\s+const/g, '');
      
      // Hapus interface dan type definitions
      updatedContent = updatedContent.replace(/interface\s+\w+\s*{[^}]*}/g, '');
      updatedContent = updatedContent.replace(/type\s+\w+\s*=\s*[^;]*;/g, '');

      // Tulis kembali ke file
      fs.writeFile(jsxPath, updatedContent, 'utf8', err => {
        if (err) {
          console.error(`Error menulis ${jsxFile}:`, err);
          return;
        }
        console.log(`TypeScript di ${jsxFile} dibersihkan`);
      });
    });
  });
}); 