# Curtain Visualizer POC

## Temuan dan arah POC

Gunakan satu bukaan jendela dan empat treatment yang perbedaannya langsung terlihat: gorden kain, roller blind, vertical blind, dan venetian blind. Fokusnya adalah membandingkan treatment, bukan menjelajahi ruangan 3D.

Sketchfab baik untuk mencari model yang sudah jadi, tetapi halaman tag tidak cukup sebagai izin pakai. Sebelum model dibundel, pilih satu model unduhan dengan lisensi yang jelas, simpan atribusi, lalu masukkan berkas GLB secara lokal. Poliigon punya kategori kain (termasuk curtain fabric) yang cocok sebagai acuan material; tekstur unduhan juga harus mengikuti lisensi akun yang mengunduhnya.

## Why these three

- Gorden kain: lipatan dan bukaan dua panel memberi pembacaan kain yang paling natural.
- Roller blind: satu panel kain; paling jelas untuk membandingkan warna dan coverage.
- Vertical blind: cocok untuk bukaan lebar dan menunjukkan kontrol cahaya melalui louver vertikal.
- Venetian blind: bilah horizontal membuat arah bukaan dan finishing kayu lebih terbaca.

## POC interaction

- Kamera orbit untuk melihat jendela dari beberapa sisi.
- Pilihan jenis mengubah geometri, bukan sekadar label.
- Finishing mengubah respons cahaya melalui colour, roughness, dan metalness.
- Slider bukaan menggeser panel kain, menaikkan roller, atau memiringkan louver/slat.

## Technical choices

- React Three Fiber `Canvas` provides the scene root, camera, rendering, and event layer.
- Drei `OrbitControls` provides lightweight camera exploration.
- Gunakan demand rendering setelah POC memakai model GLB atau tekstur resolusi tinggi; adegan saat ini sengaja procedural dan ringan.

## Sources

- [React Three Fiber Canvas](https://r3f.docs.pmnd.rs/api/canvas)
- [React Three Fiber events](https://r3f.docs.pmnd.rs/api/events)
- [Drei controls](https://drei.docs.pmnd.rs/controls/introduction)
- [British Blind and Shutter Association product guidance](https://bbsa.org.uk/product-characteristic-guidance/)
- [Sketchfab licenses](https://sketchfab.com/licenses)
- [Poliigon fabric textures](https://www.poliigon.com/id/textures/fabric)
