export type PortfolioCategory = 'Komersial' | 'Hospitalitas' | 'Residensial';

export interface Project {
  slug: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  scope: string;
  summary: string;
  brief: string;
  approach: string;
  materials: string[];
  image: string;
  imageAlt: string;
  references: { src: string; alt: string; caption: string }[];
  isConcept: true;
}

export const services = [
  {
    slug: 'komersial',
    title: 'Ruang untuk bekerja.',
    name: 'Kantor & komersial',
    description: 'Tempat fokus, bertemu, dan melayani pelanggan. Tata ruang mengikuti aktivitas tim dan cara pengunjung datang.',
    scope: ['Penataan area kerja dan pertemuan', 'Area penerima tamu dan display', 'Pemilihan material dan pencahayaan'],
    category: 'Komersial' as PortfolioCategory,
    project: 'ruang-ranting',
  },
  {
    slug: 'hospitalitas',
    title: 'Ruang untuk singgah.',
    name: 'Hospitality',
    description: 'Suasana yang menyambut tamu, dengan alur pelayanan yang tetap leluasa. Untuk kafe, restoran, dan penginapan.',
    scope: ['Area makan, lounge, dan kamar', 'Alur tamu dan pelayanan', 'Material, furnitur, dan suasana cahaya'],
    category: 'Hospitalitas' as PortfolioCategory,
    project: 'arca-house',
  },
  {
    slug: 'residensial',
    title: 'Ruang untuk tinggal.',
    name: 'Rumah & apartemen',
    description: 'Rumah yang mengikuti kebiasaan penghuninya. Mulai dari penyimpanan, ruang berkumpul, sampai sudut untuk beristirahat.',
    scope: ['Penataan ruang dan penyimpanan', 'Dapur, kamar, dan ruang keluarga', 'Warna, material, dan furnitur'],
    category: 'Residensial' as PortfolioCategory,
    project: 'teras-pagi',
  },
  {
    slug: 'tirai',
    title: 'Cahaya yang bisa diatur.',
    name: 'Tirai & penutup jendela',
    description: 'Saring cahaya, jaga privasi, dan lengkapi suasana ruang. Pilihan treatment mengikuti bukaan dan aktivitas di dalamnya.',
    scope: ['Gorden dan sheer', 'Roller, vertical, dan venetian blind', 'Penyesuaian warna, tekstur, dan bukaan'],
    category: 'Residensial' as PortfolioCategory,
    project: 'cahaya-timur',
  },
] as const;

function references(slug: string, items: [string, string][]) {
  return items.map(([alt, caption], index) => ({
    src: '/assets/concepts/' + slug + '-' + (index + 1) + '.webp',
    alt,
    caption,
  }));
}

export const projects: readonly Project[] = [
  {
    slug: 'paviliun-senja', title: 'Paviliun Senja', category: 'Hospitalitas',
    location: 'Bandung', scope: 'Lobi & area singgah',
    summary: 'Ruang singgah yang memberi tamu waktu untuk melambat.',
    brief: 'Studi lobi penginapan dengan area tunggu yang juga nyaman dipakai berbincang. Jalur menuju resepsionis perlu mudah dibaca tanpa memotong kelompok tempat duduk.',
    approach: 'Tempat duduk dikelompokkan di dekat bukaan. Material mineral menjadi dasar yang tenang, sementara kayu dan tekstil memberi kehangatan pada area yang disentuh tamu.',
    materials: ['Batu bertekstur', 'Kayu bernada hangat', 'Tekstil netral'],
    image: '/assets/portfolio/paviliun-senja.png',
    imageAlt: 'Visual konsep lobi dengan sofa rendah, lantai batu, dan bukaan menghadap pepohonan.',
    references: references('paviliun-senja', [
      ['Lobi dengan jendela tinggi dan susunan meja di atas lantai berpola.', 'Ritme bukaan dan pembagian area singgah.'],
      ['Tempat duduk lounge di dekat jendela besar menghadap tanaman.', 'Cahaya alami sebagai bagian dari pengalaman menunggu.'],
      ['Lobi melengkung dengan elemen air dan pencahayaan hangat.', 'Referensi material mineral pada ruang penerima.'],
    ]), isConcept: true,
  },
  {
    slug: 'ruang-ranting', title: 'Ruang Ranting', category: 'Komersial',
    location: 'Jakarta', scope: 'Kantor kolaboratif',
    summary: 'Bertemu dengan mudah, bekerja dengan cukup tenang.',
    brief: 'Konsep kantor untuk tim yang bergantian bekerja sendiri dan berdiskusi. Area bersama perlu mudah dijangkau tanpa membuat seluruh ruang kerja menjadi jalur lalu-lalang.',
    approach: 'Area pertemuan ditempatkan di tepi sirkulasi, sedangkan meja fokus berada lebih dalam. Partisi transparan menjaga hubungan visual dan membantu cahaya menjangkau ruang.',
    materials: ['Kayu natural', 'Kaca berbingkai gelap', 'Tekstil akustik'],
    image: '/assets/portfolio/ruang-ranting.png',
    imageAlt: 'Visual konsep kantor dengan meja kolaborasi, tanaman, dan jendela lebar.',
    references: references('ruang-ranting', [
      ['Meja diskusi kayu dengan kursi di ruang kantor berdinding kaca.', 'Area diskusi yang terhubung secara visual.'],
      ['Laptop di meja panjang dekat jendela dan tanaman.', 'Meja kerja di sepanjang sumber cahaya.'],
      ['Koridor kantor dengan ruang pertemuan berpartisi kaca.', 'Sirkulasi yang terbaca tanpa banyak penanda.'],
    ]), isConcept: true,
  },
  {
    slug: 'teras-pagi', title: 'Teras Pagi', category: 'Residensial',
    location: 'Yogyakarta', scope: 'Ruang keluarga & dapur',
    summary: 'Kegiatan keluarga bertemu di satu ruang yang terbuka.',
    brief: 'Studi rumah dengan kegiatan memasak, makan, dan berkumpul yang saling berdekatan. Penyimpanan perlu cukup tanpa membuat ruang bersama terasa penuh.',
    approach: 'Furnitur rendah menjaga pandangan ke teras. Dapur dan meja makan diposisikan sebagai penghubung, dengan tekstil untuk menyaring cahaya pada jam terik.',
    materials: ['Kayu terang', 'Kain bertekstur', 'Permukaan mineral'],
    image: '/assets/portfolio/teras-pagi.png',
    imageAlt: 'Visual konsep ruang keluarga hangat dengan furnitur kayu dan akses ke teras.',
    references: references('teras-pagi', [
      ['Ruang keluarga dengan sofa dan furnitur kayu di dekat jendela.', 'Referensi penataan ruang keluarga.'],
      ['Sofa dekat jendela dengan cahaya yang disaring tirai.', 'Hubungan cahaya, tekstil, dan area duduk.'],
      ['Ruang keluarga terang dengan sofa netral dan bukaan besar.', 'Bukaan yang menjaga ruang tetap terasa lapang.'],
    ]), isConcept: true,
  },
  {
    slug: 'arca-house', title: 'Arca House', category: 'Hospitalitas',
    location: 'Surabaya', scope: 'Restoran & ruang makan privat',
    summary: 'Suasana makan yang hangat, dengan ruang untuk percakapan.',
    brief: 'Konsep restoran dengan kebutuhan meja kelompok dan sudut yang lebih privat. Alur pelayanan harus berjalan tanpa mengganggu percakapan tamu.',
    approach: 'Jarak antarkelompok meja menjadi prioritas. Cahaya diarahkan ke permukaan meja, sementara bidang kayu membantu membentuk suasana yang lebih intim.',
    materials: ['Kayu gelap', 'Batu natural', 'Metal berwarna hangat'],
    image: '/assets/portfolio/arca-house.png',
    imageAlt: 'Visual konsep restoran dengan meja kayu dan cahaya hangat di area makan.',
    references: references('arca-house', [
      ['Restoran dengan kursi kayu, sofa gelap, dan jendela besar.', 'Kelompok tempat duduk untuk kebutuhan tamu yang berbeda.'],
      ['Ruang makan dengan material kayu dan lampu gantung.', 'Skala pencahayaan pada meja makan.'],
      ['Area makan terbuka menghadap air dengan naungan dan tirai.', 'Referensi suasana makan yang terhubung ke luar.'],
    ]), isConcept: true,
  },
  {
    slug: 'kawasan-21', title: 'Kawasan 21', category: 'Komersial',
    location: 'Tangerang', scope: 'Showroom furnitur',
    summary: 'Memberi produk ruang untuk dilihat dan dicoba.',
    brief: 'Studi showroom yang menampilkan furnitur dalam susunan ruang sehari-hari. Pengunjung perlu bisa mendekati produk dan berbicara dengan pendamping tanpa menghalangi jalur utama.',
    approach: 'Display disusun sebagai kelompok suasana, bukan deretan barang. Area konsultasi berada di sela kelompok produk, dengan palet dasar yang tidak bersaing dengan furnitur.',
    materials: ['Lantai netral', 'Panel kayu', 'Pencahayaan terarah'],
    image: '/assets/portfolio/kawasan-21.png',
    imageAlt: 'Visual konsep showroom dengan display furnitur dan jalur pengunjung yang lapang.',
    references: references('kawasan-21', [
      ['Meja dan kursi dalam ruang display furnitur.', 'Produk ditampilkan dalam konteks pemakaian.'],
      ['Showroom furnitur dengan susunan sofa dan kursi.', 'Jarak pandang untuk membaca bahan dan bentuk.'],
      ['Kelompok sofa abu-abu dalam showroom furnitur.', 'Pengelompokan produk berdasarkan suasana ruang.'],
    ]), isConcept: true,
  },
  {
    slug: 'temu-studio', title: 'Temu Studio', category: 'Komersial',
    location: 'Bandung', scope: 'Studio kerja bersama',
    summary: 'Meja bersama, pilihan cara bekerja yang berbeda.',
    brief: 'Konsep coworking untuk pengunjung dengan durasi dan kebiasaan kerja yang beragam. Meja komunal perlu dilengkapi tempat untuk percakapan kecil dan kerja mandiri.',
    approach: 'Area komunal menjadi titik temu. Sudut kerja yang lebih tenang berada di tepi, sementara bahan yang tahan pakai dipilih untuk permukaan dengan aktivitas tinggi.',
    materials: ['Kayu bertekstur', 'Rangka metal', 'Tekstil netral'],
    image: '/assets/concepts/temu-studio-1.webp',
    imageAlt: 'Referensi studio kerja dengan meja dan kursi yang ditata untuk bekerja bersama.',
    references: references('temu-studio', [
      ['Kantor terbuka dengan deretan meja kerja.', 'Susunan meja bersama yang mudah digunakan.'],
      ['Meja kerja dan tanaman di dekat jendela kantor.', 'Pilihan posisi untuk kerja mandiri.'],
      ['Meja komunal kayu dengan kursi di ruang terbuka.', 'Ruang untuk bertukar ide di antara sesi kerja.'],
    ]), isConcept: true,
  },
  {
    slug: 'kedai-akar', title: 'Kedai Akar', category: 'Hospitalitas',
    location: 'Malang', scope: 'Kafe & meja komunal',
    summary: 'Tempat untuk kopi sebentar atau percakapan lebih panjang.',
    brief: 'Studi kafe yang melayani pengunjung singgah dan pengunjung yang ingin duduk lebih lama. Jalur memesan perlu terpisah dari area duduk.',
    approach: 'Bar menjadi orientasi saat masuk. Meja beragam ukuran mengakomodasi pengunjung sendiri dan berkelompok, dengan tanaman sebagai penghubung suasana luar dan dalam.',
    materials: ['Kayu natural', 'Ubin bermotif', 'Tanaman interior'],
    image: '/assets/concepts/kedai-akar-3.webp',
    imageAlt: 'Referensi kafe dengan meja kayu, tanaman, dan rak di area bar.',
    references: references('kedai-akar', [
      ['Area bar kafe dengan lampu gantung dan rak terbuka.', 'Bar sebagai titik orientasi pengunjung.'],
      ['Meja dan kursi kafe di atas lantai berpola.', 'Pilihan tempat duduk dan jalur pelayanan.'],
      ['Interior kafe hangat dengan meja kayu dan tanaman.', 'Suasana duduk yang dekat dengan elemen natural.'],
    ]), isConcept: true,
  },
  {
    slug: 'sela-store', title: 'Sela Store', category: 'Komersial',
    location: 'Semarang', scope: 'Toko & area display',
    summary: 'Pengunjung bisa melihat pilihan tanpa merasa berdesakan.',
    brief: 'Konsep toko dengan koleksi yang berganti secara berkala. Display perlu mudah disusun ulang, sementara jalur masuk dan area transaksi tetap terbaca.',
    approach: 'Rak dan gantungan membentuk kelompok produk dengan ruang kosong di antaranya. Pencahayaan diarahkan pada barang, dengan area konsultasi di ujung alur kunjungan.',
    materials: ['Kayu', 'Rangka besi', 'Permukaan matte'],
    image: '/assets/concepts/sela-store-2.webp',
    imageAlt: 'Referensi toko dengan gantungan pakaian dan jalur pengunjung di antaranya.',
    references: references('sela-store', [
      ['Toko pakaian dengan rak dan pencahayaan hangat.', 'Cahaya yang membantu membaca warna produk.'],
      ['Gantungan pakaian berbingkai metal dengan ruang di antaranya.', 'Display yang bisa disusun sesuai koleksi.'],
      ['Interior toko dengan rak buku dan meja display.', 'Referensi sirkulasi di antara kelompok barang.'],
    ]), isConcept: true,
  },
  {
    slug: 'apartemen-laras', title: 'Apartemen Laras', category: 'Residensial',
    location: 'Jakarta', scope: 'Apartemen & ruang makan',
    summary: 'Ruang terbatas dengan tempat untuk kebiasaan sehari-hari.',
    brief: 'Studi apartemen untuk penghuni yang bekerja dari rumah dan sering menerima teman. Ruang makan, kerja, dan duduk perlu berbagi area tanpa kehilangan fungsinya.',
    approach: 'Furnitur dipilih berdasarkan ukuran dan frekuensi pemakaian. Cahaya dari jendela dijaga tetap terbuka, dengan penyimpanan ditempatkan di bidang dinding.',
    materials: ['Kayu terang', 'Tekstil natural', 'Warna dasar hangat'],
    image: '/assets/concepts/apartemen-laras-1.webp',
    imageAlt: 'Referensi apartemen dengan meja makan kayu dan area duduk dekat jendela.',
    references: references('apartemen-laras', [
      ['Meja makan bundar dan area duduk dalam apartemen terang.', 'Beberapa aktivitas dalam satu area terbuka.'],
      ['Sofa kecil di dekat meja dan tanaman dalam pot.', 'Skala furnitur untuk ruang yang kompak.'],
      ['Area duduk apartemen dengan jendela besar dan sofa netral.', 'Cahaya alami sebagai dasar penataan ruang.'],
    ]), isConcept: true,
  },
  {
    slug: 'kamar-sore', title: 'Kamar Sore', category: 'Hospitalitas',
    location: 'Batu', scope: 'Kamar penginapan',
    summary: 'Kamar untuk beristirahat setelah seharian di luar.',
    brief: 'Konsep kamar penginapan dengan area tidur, meja kecil, dan tempat meletakkan barang. Tamu perlu dapat mengatur cahaya tanpa harus membuat kamar sepenuhnya gelap.',
    approach: 'Headboard menyatukan area tidur. Lampu baca dan cahaya suasana dipisah, sedangkan tirai berlapis memberi pilihan privasi dan tingkat terang.',
    materials: ['Panel kayu', 'Tekstil berlapis', 'Pencahayaan hangat'],
    image: '/assets/concepts/kamar-sore-1.webp',
    imageAlt: 'Referensi kamar penginapan dengan headboard kayu, tirai, dan kursi dekat jendela.',
    references: references('kamar-sore', [
      ['Kamar dengan headboard kayu melengkung dan tirai hijau.', 'Headboard sebagai pengikat komposisi kamar.'],
      ['Kamar hotel dengan tempat tidur dan jendela menghadap kota.', 'Pembagian area tidur dan duduk.'],
      ['Kamar dengan dua tempat tidur dan tirai berlapis.', 'Lapisan tekstil untuk mengatur privasi.'],
    ]), isConcept: true,
  },
  {
    slug: 'ruang-jeda', title: 'Ruang Jeda', category: 'Komersial',
    location: 'Surabaya', scope: 'Ruang konsultasi & pertemuan',
    summary: 'Percakapan yang butuh perhatian mendapat ruangnya sendiri.',
    brief: 'Studi ruang konsultasi dengan kebutuhan privasi dan suasana yang tidak kaku. Meja kerja dan area berbincang perlu sama-sama nyaman digunakan.',
    approach: 'Susunan kursi menjaga jarak percakapan yang wajar. Warna dan bentuk furnitur ditahan sederhana agar perhatian tetap pada orang yang sedang berbicara.',
    materials: ['Kayu matte', 'Tekstil lembut', 'Partisi kaca'],
    image: '/assets/concepts/ruang-jeda-2.webp',
    imageAlt: 'Referensi ruang konsultasi dengan meja kerja dan sepasang kursi abu-abu.',
    references: references('ruang-jeda', [
      ['Meja putih dan kursi di ruangan dengan warna netral.', 'Kesederhanaan bidang untuk mengurangi distraksi.'],
      ['Meja kantor dengan kursi tamu di dekat jendela.', 'Area kerja yang juga bisa menerima percakapan.'],
      ['Ruang pertemuan dengan meja panjang dan partisi kaca.', 'Privasi ruang dengan hubungan visual ke luar.'],
    ]), isConcept: true,
  },
  {
    slug: 'cahaya-timur', title: 'Cahaya Timur', category: 'Residensial',
    location: 'Malang', scope: 'Kamar utama & penutup jendela',
    summary: 'Cahaya pagi yang bisa dinikmati, privasi yang bisa dijaga.',
    brief: 'Konsep kamar utama dengan bukaan besar. Kebutuhan membaca dan beristirahat memerlukan tingkat pencahayaan yang berbeda sepanjang hari.',
    approach: 'Area duduk didekatkan ke jendela. Sheer menyaring cahaya, lapisan penutup memberi privasi, dan furnitur rendah menjaga kamar terasa lega.',
    materials: ['Tekstil linen', 'Kayu natural', 'Warna netral'],
    image: '/assets/concepts/cahaya-timur-1.webp',
    imageAlt: 'Referensi kamar terang dengan tempat tidur, bangku kayu, dan jendela bertirai.',
    references: references('cahaya-timur', [
      ['Kamar tidur terang dengan bangku dan jendela besar.', 'Hubungan area tidur dengan cahaya pagi.'],
      ['Kamar berdinding gelap dengan tempat tidur dan karpet.', 'Alternatif suasana yang lebih tenang.'],
      ['Tempat tidur putih di dekat jendela bertirai.', 'Lapisan tekstil untuk melembutkan cahaya.'],
    ]), isConcept: true,
  },
  {
    slug: 'serambi-lounge', title: 'Serambi Lounge', category: 'Hospitalitas',
    location: 'Yogyakarta', scope: 'Lounge & area pertemuan informal',
    summary: 'Tempat menunggu yang juga enak untuk bertemu.',
    brief: 'Studi lounge dengan pengunjung yang datang sendiri, berpasangan, atau berkelompok. Area ini perlu mendukung percakapan tanpa menghalangi pergerakan.',
    approach: 'Kelompok kursi dengan orientasi berbeda memberi pilihan tingkat keterbukaan. Cahaya lokal membantu setiap kelompok terasa sebagai tempat yang utuh.',
    materials: ['Tekstil bertekstur', 'Kayu gelap', 'Batu berwarna hangat'],
    image: '/assets/concepts/serambi-lounge-1.webp',
    imageAlt: 'Referensi lounge dengan kursi berkelompok dan pencahayaan hangat.',
    references: references('serambi-lounge', [
      ['Lounge dengan kursi berkelompok dan lampu plafon hangat.', 'Kelompok duduk dengan skala percakapan.'],
      ['Area lounge dengan sofa, kursi, dan lantai berpola.', 'Pilihan orientasi tempat duduk.'],
      ['Lounge modern dengan sofa dan pencahayaan dinding.', 'Cahaya lokal yang memberi batas suasana.'],
    ]), isConcept: true,
  },
  {
    slug: 'dapur-teduh', title: 'Dapur Teduh', category: 'Residensial',
    location: 'Solo', scope: 'Dapur & area makan',
    summary: 'Memasak dan berkumpul dalam alur yang lebih rapi.',
    brief: 'Konsep dapur yang dipakai setiap hari dan terhubung dengan ruang makan. Permukaan kerja perlu cukup, dengan penyimpanan yang mengikuti urutan kegiatan.',
    approach: 'Area persiapan berada di antara penyimpanan dan memasak. Meja pulau menjadi batas ringan ke ruang makan, sementara lampu kerja ditempatkan pada bidang yang diperlukan.',
    materials: ['Kabinet matte', 'Permukaan mineral', 'Kayu terang'],
    image: '/assets/concepts/dapur-teduh-2.webp',
    imageAlt: 'Referensi dapur terang dengan kabinet putih, meja pulau, dan lampu gantung.',
    references: references('dapur-teduh', [
      ['Dapur berkabinet abu-abu dengan meja pulau dan lampu gantung.', 'Pembagian area kerja dan area duduk.'],
      ['Dapur putih dengan meja pulau dan bangku tinggi.', 'Meja pulau sebagai tempat aktivitas bersama.'],
      ['Dapur dengan kabinet gelap dan pencahayaan di bawah kabinet.', 'Pencahayaan yang mengikuti permukaan kerja.'],
    ]), isConcept: true,
  },
  {
    slug: 'rumah-sela', title: 'Rumah Sela', category: 'Residensial',
    location: 'Semarang', scope: 'Ruang tinggal kompak',
    summary: 'Ukuran ruang dijaga, kebutuhan sehari-hari tetap mendapat tempat.',
    brief: 'Studi ruang tinggal dengan area keluarga dan makan yang berdekatan. Furnitur dan penyimpanan perlu cukup tanpa memenuhi setiap sisi ruangan.',
    approach: 'Jalur gerak menjadi acuan ukuran furnitur. Meja rendah dan bidang dinding yang terang membantu ruang terasa terbuka, dengan penyimpanan dekat titik pemakaian.',
    materials: ['Kayu natural', 'Kain netral', 'Anyaman'],
    image: '/assets/concepts/rumah-sela-1.webp',
    imageAlt: 'Referensi ruang keluarga dengan sofa netral, meja bundar, dan cermin anyaman.',
    references: references('rumah-sela', [
      ['Ruang keluarga dengan sofa putih dan cermin bundar berbingkai anyaman.', 'Furnitur rendah dan bahan natural.'],
      ['Sofa dan meja kayu yang terhubung dengan area makan.', 'Keterhubungan kegiatan di ruang yang kompak.'],
      ['Sofa abu-abu dan meja kayu di dekat jendela.', 'Jalur gerak yang tetap leluasa di sekitar furnitur.'],
    ]), isConcept: true,
  },
];

export const portfolioCategories = ['Semua', 'Komersial', 'Hospitalitas', 'Residensial'] as const;
export const featuredSlugs = ['paviliun-senja', 'ruang-ranting', 'teras-pagi', 'arca-house'] as const;
