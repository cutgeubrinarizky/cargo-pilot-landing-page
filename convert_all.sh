#!/bin/bash

# Direktori komponen UI
UI_DIR="src/components/ui"

# Hapus file tsx yang sudah dikonversi menjadi jsx
rm -f $UI_DIR/toggle.tsx $UI_DIR/toggle-group.tsx $UI_DIR/card.tsx $UI_DIR/avatar.tsx

# Daftar semua file tsx yang tersisa
for tsx_file in $UI_DIR/*.tsx; do
  if [ -f "$tsx_file" ]; then
    # Nama file output jsx
    jsx_file="${tsx_file%.tsx}.jsx"
    
    # Konversi tipe TypeScript
    echo "Mengkonversi $tsx_file ke $jsx_file"
    
    # Baca file, hapus TypeScript annotations, dan simpan ke file jsx
    sed -E 's/<[^>]*>//g;                   # Hapus generic types
            s/: React\.[^,)]+//g;           # Hapus type annotations pada parameter
            s/: [a-zA-Z0-9_]+(\[\])?//g;    # Hapus type annotations seperti string, number, dll
            s/\| [a-zA-Z0-9_"]+//g;         # Hapus type union (|)
            s/\? //g;                       # Hapus optional params
            s/readonly //g;                 # Hapus keyword readonly
            s/, [a-zA-Z]+\??:[^,)}=]+//g;   # Hapus parameter dengan tipe
            s/type [a-zA-Z]+Props =[^;]+;//g; # Hapus type definitions
            s/interface [^{]+{[^}]+}//g;     # Hapus interface definitions
            s/import.*{[^}]*type [^}]*} from.*//g; # Hapus type imports
            s/as const//g;                  # Hapus const assertions
            s/export type.*$//g;            # Hapus export types
            s/type VariantProps =.*$//g;    # Hapus VariantProps' "$tsx_file" > "$jsx_file"
            
    # Update import paths yang mereferensikan komponen UI lain
    sed -i '' 's/from "@\/components\/ui\/\([^"]*\)"/from "@\/components\/ui\/\1.jsx"/g' "$jsx_file"
  fi
done

echo "Konversi selesai!" 