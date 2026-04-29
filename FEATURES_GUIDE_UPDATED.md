# 🎵 Spotify Player - Fitur Lengkap & User Guide

## ✨ Fitur-Fitur Utama

### 🏠 **Home View**
- **Recently Played** - Menampilkan 8 lagu terakhir yang diputar
- **Your Music** - Menampilkan 12 lagu terbaru yang di-import
- **Play Button** - Klik di atas lagu untuk memutar
- **Add to Playlist Button** (+) - Klik untuk menambahkan ke playlist

### 🔍 **Search View**
- **Search Bar** - Cari lagu berdasarkan title, artist, atau album
- **Browse All** - Tampilkan hingga 50 lagu jika belum ada pencarian
- **Quick Actions** - Play dan Add to Playlist tersedia di setiap lagu

### 📚 **Library View**
- **Playlist List** - Klik untuk membuka playlist
- **Add Songs Button** - Tambahkan lagu ke playlist dari library
- **Remove Songs** - Hapus lagu dari playlist dengan tombol trash
- **Playlist Info** - Tampilkan jumlah lagu di setiap playlist

### 🎮 **Player Controls**
```
┌─────────────────────────────────┐
│ 🎵 Song Info  [Progress Bar]    │
├─────────────────────────────────┤
│ 🔀 ◀️  ⏯️  ▶️  🔁  [🔊 Volume]  │
└─────────────────────────────────┘
```

**Tombol Kontrol:**
- 🔀 **Shuffle** - Random order (click untuk toggle ON/OFF)
- ◀️ **Previous** - Lagu sebelumnya
- ⏯️ **Play/Pause** - Putar/pause musik
- ▶️ **Next** - Lagu berikutnya
- 🔁 **Repeat** - Cycle: OFF → ALL → ONE → OFF
- 🔊 **Volume** - Kontrol volume

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Space** | Play / Pause |
| **→** | Next Song |
| **←** | Previous Song |

---

## 🎯 Cara Menggunakan

### 📥 Import Musik
1. Klik tombol **"Import Music"** di Sidebar
2. Pilih folder yang berisi file musik
3. Musik akan langsung ditambahkan ke library

### ➕ Membuat Playlist Baru
1. Buka menu **"Playlists"** di Sidebar
2. Klik **"New Playlist"**
3. Masukkan nama playlist
4. Playlist siap digunakan!

### 🎵 Menambahkan Lagu ke Playlist

**Dari Home View:**
1. Hover di atas lagu
2. Klik tombol **"+"** (biru)
3. Pilih playlist dari dropdown
4. Selesai! Lagu sudah ditambahkan

**Dari Search View:**
1. Cari lagu yang diinginkan
2. Hover di atas hasil pencarian
3. Klik tombol **"+"** 
4. Pilih playlist dari dropdown

**Dari Library View:**
1. Buka playlist yang ingin ditambahkan
2. Klik tombol **"Add Songs"** (hijau)
3. Dropdown akan menampilkan semua lagu di library
4. Klik tombol **"+"** pada lagu yang ingin ditambahkan
5. Selesai!

### 🎶 Memutar Lagu
1. **Dari Home** - Klik lagu atau tombol Play
2. **Dari Search** - Klik lagu atau tombol Play
3. **Dari Playlist** - Klik lagu atau tombol Play

### 🗑️ Menghapus Lagu dari Playlist
1. Buka playlist
2. Hover di atas lagu
3. Klik tombol **Trash** (merah)
4. Lagu terhapus dari playlist

---

## 💾 Data Persistence

Aplikasi ini **otomatis menyimpan** data berikut:
- ✅ Semua playlist yang dibuat
- ✅ Lagu-lagu dalam setiap playlist
- ✅ Pengaturan volume
- ✅ Mode shuffle & repeat
- ✅ Recently played history

**Data disimpan di:** Browser's Local Storage  
**Auto-save:** Setiap perubahan disimpan otomatis  
**Durasi:** Data tetap tersimpan sampai cache browser dihapus

---

## 🎨 UI Elements Guide

### Warna & Makna
- **Hijau (#22c55e)** - Play button, active state
- **Biru (#3b82f6)** - Add to playlist button
- **Merah (#ef4444)** - Delete/remove button
- **Purple** - Playlist icons
- **Gray** - Inactive/secondary elements

### Button States
- **Hover** - Tombol muncul/berubah warna
- **Active** - Highlight dengan warna utama
- **Disabled** - Opacity berkurang

---

## 🚀 Fitur Advanced

### Shuffle Mode
- ON: Musik diputar secara acak dari queue
- OFF: Musik diputar berurutan sesuai order

### Repeat Modes
- **OFF** - Tidak ada pengulangan
- **ALL** - Ulangi semua lagu dalam queue
- **ONE** - Ulangi lagu yang sedang diputar

### Recently Played
- Otomatis mencatat setiap lagu yang diputar
- Disimpan hingga 50 lagu terakhir
- Dapat di-clear dari menu

---

## 🔧 Fitur Teknis

### Supported Audio Formats
- ✅ MP3
- ✅ WAV
- ✅ OGG
- ✅ M4A
- ✅ FLAC
- ✅ AAC
- ✅ WEBM

### Performance
- Lazy loading untuk list lagu
- Smooth animations dengan Framer Motion
- Optimized re-renders dengan React hooks
- Progressive loading untuk search results

---

## 📊 File Structure Updated

```
src/
├── components/
│   ├── AddToPlaylistMenu.jsx      [NEW] ⭐
│   ├── App.jsx
│   ├── Sidebar.jsx
│   ├── Player.jsx
│   ├── MainContent.jsx
│   ├── SongList.jsx               [UPDATED]
│   └── views/
│       ├── HomeView.jsx           [UPDATED]
│       ├── SearchView.jsx         [UPDATED]
│       └── LibraryView.jsx        [UPDATED]
├── hooks/
│   ├── useAudio.js
│   └── useAudioPlayer.js
├── store/
│   └── useMusicStore.js
└── utils.js
```

---

## ✅ Checklist Fitur

- [x] Play/Pause functionality
- [x] Next/Previous track
- [x] Volume control
- [x] Shuffle mode
- [x] Repeat modes
- [x] Search functionality
- [x] Recently played
- [x] Create playlists
- [x] Add songs to playlist ⭐ [FIXED]
- [x] Remove songs from playlist
- [x] Persistent storage
- [x] Keyboard shortcuts
- [x] Beautiful UI with animations
- [x] Responsive design

---

## 🎯 Tips & Tricks

1. **Cepat mencari lagu** - Gunakan Search View untuk filtering
2. **Organize musik** - Buat beberapa playlist untuk kategori berbeda
3. **Quick access** - Recently Played di Home View untuk akses cepat
4. **Shuffle practice** - Gunakan Shuffle untuk menemukan lagu favorit baru
5. **Keyboard control** - Gunakan keyboard shortcuts saat bekerja di app lain

---

**Last Updated:** 29 April 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
