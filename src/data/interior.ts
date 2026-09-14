export type PortfolioCategory = 'Komersial' | 'Hospitalitas' | 'Residensial';

export const services = [
  {
    title: 'Kantor dan tempat usaha',
    description: 'Biar tim lebih nyaman bekerja dan pelanggan lebih enak datang.',
  },
  {
    title: 'Kafe, restoran, dan penginapan',
    description: 'Biar tamu betah dari pertama datang sampai waktunya pulang.',
  },
  {
    title: 'Rumah',
    description: 'Biar rumah terasa pas untuk kebiasaan orang-orang yang tinggal di dalamnya.',
  },
  {
    title: 'Tirai dan penutup jendela',
    description: 'Atur cahaya dan privasi tanpa membuat ruangan kehilangan suasananya.',
  },
] as const;

export const projects = [
  {
    slug: 'paviliun-senja',
    title: 'Paviliun Senja',
    category: 'Hospitalitas',
    location: 'Bandung',
    scope: 'Lobi dan area makan',
    year: '2026',
    summary: 'Konsep ruang singgah dengan cahaya sore, material mineral, dan sirkulasi yang lapang.',
    image: '/assets/portfolio/paviliun-senja.png',
    imageAlt: 'Area lobi konsep Paviliun Senja dengan cahaya alami dan material batu.',
    isConcept: true,
  },
  {
    slug: 'ruang-ranting',
    title: 'Ruang Ranting',
    category: 'Komersial',
    location: 'Jakarta',
    scope: 'Kantor kolaboratif',
    year: '2026',
    summary: 'Konsep kantor yang membagi fokus dan kolaborasi tanpa memecah keterhubungan tim.',
    image: '/assets/portfolio/ruang-ranting.png',
    imageAlt: 'Area kerja konsep Ruang Ranting dengan meja panjang dan pencahayaan lembut.',
    isConcept: true,
  },
  {
    slug: 'teras-pagi',
    title: 'Teras Pagi',
    category: 'Residensial',
    location: 'Yogyakarta',
    scope: 'Ruang keluarga dan dapur',
    year: '2026',
    summary: 'Konsep rumah yang membuka ritme keluarga ke teras, dapur, dan cahaya pagi.',
    image: '/assets/portfolio/teras-pagi.png',
    imageAlt: 'Ruang keluarga konsep Teras Pagi yang terhubung ke dapur dan teras.',
    isConcept: true,
  },
  {
    slug: 'arca-house',
    title: 'Arca House',
    category: 'Hospitalitas',
    location: 'Surabaya',
    scope: 'Restoran dan ruang privat',
    year: '2026',
    summary: 'Konsep restoran dengan urutan ruang yang intim dan material yang terasa semakin hangat saat malam.',
    image: '/assets/portfolio/arca-house.png',
    imageAlt: 'Ruang makan konsep Arca House dengan meja kayu dan pencahayaan hangat.',
    isConcept: true,
  },
  {
    slug: 'kawasan-21',
    title: 'Kawasan 21',
    category: 'Komersial',
    location: 'Tangerang',
    scope: 'Experience center',
    year: '2026',
    summary: 'Konsep ruang presentasi yang memberi produk, percakapan, dan pengunjung ruang bernapas yang sama.',
    image: '/assets/portfolio/kawasan-21.png',
    imageAlt: 'Experience center konsep Kawasan 21 dengan area display yang lapang.',
    isConcept: true,
  },
  {
    slug: 'cahaya-timur',
    title: 'Cahaya Timur',
    category: 'Residensial',
    location: 'Malang',
    scope: 'Kamar utama dan ruang baca',
    year: '2026',
    summary: 'Konsep hunian yang mengubah cahaya pagi menjadi penanda alami untuk mulai dan mengakhiri hari.',
    image: '/assets/portfolio/teras-pagi.png',
    imageAlt: 'Kamar utama konsep Cahaya Timur dengan jendela besar dan tirai tekstil.',
    isConcept: true,
  },
] as const satisfies readonly {
  slug: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  scope: string;
  year: string;
  summary: string;
  image: string;
  imageAlt: string;
  isConcept: true;
}[];

export const portfolioCategories = ['Semua', 'Komersial', 'Hospitalitas', 'Residensial'] as const;

export const demoContact = {
  email: 'halo@inointerior.demo',
  location: 'Malang, Jawa Timur',
  consultationHref: 'https://wa.me/6285706174243?text=Halo%20INO%20Interior%2C%20saya%20ingin%20berkonsultasi.',
  consultationLabel: 'Mulai lewat WhatsApp',
} as const;
