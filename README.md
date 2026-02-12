# Gamifikasi Machine Learning - Ular Tangga

Project ini adalah sebuah game edukasi **Ular Tangga (Snakes & Ladders)** yang dirancang untuk membantu pembelajaran konsep-konsep dasar **Machine Learning**.

Game ini menggabungkan mekanik permainan klasik dengan kuis interaktif yang menguji pemahaman pemain tentang materi Machine Learning, seperti Supervised Learning, Unsupervised Learning, overfitting, metrik evaluasi, dan lain-lain.

## 🌟 Fitur Utama

- **Papan Permainan Interaktif**: Grid 10x10 (100 kotak) dengan ular dan tangga yang digambar secara dinamis menggunakan SVG.
- **Multiplayer**: Mendukung 1 hingga 6 pemain dalam satu sesi permainan.
- **Sistem Ronde & Kuis**:
  - **Round Tipe A (Multi-Winner)**: Pertanyaan untuk semua pemain. Semua yang menjawab benar berhak melempar dadu.
  - **Round Tipe B (Single-Winner)**: Pertanyaan rebutan atau logika, hanya satu pemenang yang berhak melempar dadu.
- **Mekanik Ular (Snake Trap)**:
  - Jika pemain mendarat di kepala ular, mereka wajib menjawab **Pertanyaan Bonus**.
  - **Jawab Benar**: Pemain selamat dan tetap di posisi.
  - **Jawab Salah**: Pemain turun mengikuti tubuh ular ke posisi ekor.
- **Visualisasi Dadu 3D**: Animasi dadu yang menarik saat pengocokan angkat.
- **Sistem Log**: Mencatat setiap aktivitas permainan (giliran, jawaban, pergerakan) dalam panel log.

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur konten web.
- **CSS3**: Styling responsif, animasi dadu 3D, dan tata letak modern.
- **JavaScript (Vanilla)**: Logika permainan, manajemen state, dan interaksi DOM.

## 🚀 Cara Menjalankan

Anda dapat menjalankan game ini langsung di browser modern manapun.

### Opsi 1: Buka Langsung
1.  **Clone** atau **Download** repository ini.
2.  Buka file `index.html` menggunakan browser (Chrome, Edge, Firefox, dll).

### Opsi 2: Menggunakan Local Server (Disarankan)
Jika Anda memiliki Python terinstall:
```bash
# Masuk ke direktori project
cd Gamifikasi-Business-Analysis

# Jalankan server
python -m http.server 8080
```
Lalu buka browser di `http://localhost:8080`

## 🎮 Cara Bermain

1.  **Setup Pemain**: Masukkan jumlah pemain (1-6) dan nama masing-masing pemain.
2.  **Mulai Permainan**: Game akan dimulai dari Ronde 1.
3.  **Jawab Pertanyaan**:
    - Ikuti instruksi tipe ronde (A atau B).
    - Pilih jawaban yang menurut Anda benar.
4.  **Verifikasi Jawaban**:
    - Klik "Show Answer" untuk melihat jawaban yang benar.
    - Centang nama pemain yang menjawab benar (untuk Tipe A) atau pilih satu pemenang (untuk Tipe B).
5.  **Lempar Dadu**: Pemain yang berhak (pemenang kuis) akan melempar dadu dan bergerak secara otomatis.
6.  **Ular & Tangga**: Perhatikan jebakan ular dan bantuan tangga di papan!
7.  **Pemenang**: Pemain pertama yang mencapai kotak 100 adalah pemenangnya.

## 🤝 Kontribusi

Silakan ajukan **Pull Request** atau buat **Issue** jika Anda menemukan bug atau ingin menambahkan fitur baru.

---
*Dibuat untuk tujuan edukasi Machine Learning.*
