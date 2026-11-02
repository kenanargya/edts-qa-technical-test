# Klik Indomaret - Guest Madu Automation

JavaScript + Playwright Test. Satu skenario UI sesuai urutan soal:
beranda -> Makanan -> Madu -> detail produk -> Keranjang, tanpa login.

## Menjalankan

Node.js dan npm diperlukan.

```sh
npm ci
npx playwright install chromium
npm run test:headed
npm run report
```

## Expected result

Setelah guest mengeklik Keranjang, modal Masuk Akun dan input nomor
handphone/email tampil. Test tidak mengisi kredensial dan tidak checkout.
Setiap test memakai browser context baru tanpa sesi login tersimpan.

## Data dan locator

Produk: Madurasa Madu Jahe Merah Lemon 160g.
Locator berdasarkan teks, heading, button, dan placeholder yang diinspeksi
pada situs. Produk harus tersedia untuk area yang dipilih oleh situs.
Jika ada pilihan lokasi atau popup tambahan, setup perlu disesuaikan dengan
UI aktual. Tidak ada pemilihan lokasi pribadi secara otomatis.

## Status verifikasi dan kendala

Alur dan modal login diamati secara manual di browser biasa.
Eksekusi automation end-to-end belum terverifikasi: browser automation
mengalami loop verifikasi Cloudflare sebelum alur dapat diselesaikan.
Tidak ada klaim PASS. Test tidak mencoba mengotomasi atau melewati CAPTCHA.
Jika terblokir, simpan screenshot/trace dan minta akses pengujian yang sesuai.

Konfigurasi menyimpan screenshot, video, dan trace saat gagal.
Report HTML dibuat setelah eksekusi. Jangan commit data sesi, token,
node_modules, atau hasil rekaman yang mengandung data pribadi.
