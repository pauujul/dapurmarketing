# Dapurmarketing

Buatkan ulang web profil "Dapur Marketing" supaya lebih rapi, ringkas, dan profesional. Teks boleh dirapikan, dipersingkat, atau ditulis ulang, tapi identitas Dapur Marketing harus tetap konsisten.

WEB LAMA (acuan isi dan identitas):
https://dapur-marketing.vercel.app/

REFERENSI TAMPILAN:
https://kembang-digital.vercel.app/
Jadikan inspirasi untuk gaya, layout, susunan bagian, dan animasinya. Jangan salin teks, logo, atau fotonya.

IDENTITAS YANG HARUS TETAP:
- Nama dan logo "DM Dapur Marketing"
- Creative digital agency khusus bisnis F&B (makanan dan minuman)
- Tagline "Processing taste into visuals, turning audiences into buyers."
- Headline utama "We Turn Your Taste Into Content That Sells."
- Konsep dapur: "Our Creative Kitchen", "What's cooking", paket "Starter", "Growth", "Full Kitchen"
- Empat layanan: Content Creation, Social Media Management, Content Strategy, Performance & Optimization
- Lima langkah kerja: Discover, Plan, Create, Publish, Optimize
- Warna brand, font Manrope, dan nuansa hangat khas makanan dari web lama
- Foto: https://dapur-marketing.vercel.app/assets/dapur-hero-9Sr0Ao8s.jpg, https://dapur-marketing.vercel.app/assets/dapur-dessert-CC75jmVg.jpg, https://dapur-marketing.vercel.app/assets/dapur-coffee-CLgj0RK4.jpg

BOLEH DIBUANG ATAU DIPERBAIKI:
- Hapus bagian placeholder: strip kategori klien bertanda bintang, "Case Study Template", dan testimoni kosong. Jangan ganti dengan klaim atau angka karangan.
- Gabungkan bagian yang mirip (Why Us dan F&B Specialists, Content Philosophy ke dalam About).
- Seragamkan bahasa: heading dan tombol bahasa Indonesia yang natural, kecuali tagline dan nama brand tetap Inggris.
- Jangan pakai satu foto yang sama berulang. Pakai tiga foto di atas secara bergantian dan seimbang.
- Tulis teks singkat dan jelas, tanpa kalimat bertele-tele.

STRUKTUR AKHIR (satu halaman):
Hero, Masalah klien, Layanan, Proses, Karya (3 contoh, ditandai "Contoh konsep"), Paket, Tentang, CTA, Footer.

GAYA TAMPILAN:
- Navbar melayang berbentuk pil putih transparan blur dengan bayangan
- Sudut sangat bulat, tombol pill penuh
- Dua bola warna blur di latar hero, hero dua kolom
- Kalimat berwarna di headline diberi garis lengkung di bawahnya
- Kartu layanan besar dengan warna berbeda tiap kartu
- Bagian karya dan paket berlatar gelap, CTA terakhir berwarna penuh
- Satu animasi masuk halus saat scroll
- Responsif di HP

KONTAK (dibuat fleksibel):
Buat satu file konfigurasi kontak (contoh: src/config/contact.ts) berisi:
- instagram: "https://instagram.com/dapur.marketing"
- whatsapp: "" (kosong dulu, nanti diisi nomor format 628xxxxxxxxxx)
- email: "" (kosong dulu)
- tiktok: "" (kosong dulu)

Aturan tampilan, semua otomatis dari file konfigurasi:
- Tombol atau ikon kontak hanya muncul kalau isinya terisi. Yang kosong disembunyikan sepenuhnya, tanpa tombol mati dan tanpa teks placeholder.
- Semua tombol ajakan ("Mulai Proyek", "Hubungi Kami", "Konsultasi Kebutuhan", dan sejenisnya) mengarah ke WhatsApp kalau terisi. Kalau kosong, mengarah ke Instagram.
- Bagian CTA dan footer menampilkan deretan tombol kontak (Instagram, WhatsApp, Email, TikTok) sesuai yang terisi. Untuk sekarang hanya Instagram yang muncul.
- Link WhatsApp dibuat otomatis jadi https://wa.me/ diikuti nomor, link email jadi mailto:.
- Jangan buat form kontak.
Tambahkan komentar di file konfigurasi yang menjelaskan cara mengisinya.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dapurmarketing.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/04139734-c69d-4ef1-8cf1-f38132b88c3f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
