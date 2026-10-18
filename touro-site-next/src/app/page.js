'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LOGO_SRC = '/Logo de Touro Vermelho Hibachi.png';

const CONFIG = {
  lang: 'pt',
  whatsapp: '2389915474',
  facebook: '',
  instagram: 'https://www.instagram.com/touro_restaurant_and_lounge/',
  maps: 'https://www.google.com/maps/place/TOURO/@14.9036211,-23.5200908,748m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935990af379f8ad:0xa8d48ea92c4b9a81!8m2!3d14.9036211!4d-23.5200908!16s%2Fg%2F11nv7krx7f?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',
  reviews: 'https://www.google.com/maps/place/TOURO/@14.9036211,-23.5200908,748m/data=!3m1!1e3!4m8!3m7!1s0x935990af379f8ad:0xa8d48ea92c4b9a81!8m2!3d14.9036211!4d-23.5200908!9m1!1b1!16s%2Fg%2F11nv7krx7f?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D',
  clock: { enabled: false, timezone: '', label: { pt: 'Agora', en: 'Now' } },
};

function getUrls() {
  const wa = CONFIG.whatsapp ? CONFIG.whatsapp.replace(/\D/g, '') : '';
  const waFull = wa && wa.length === 7 ? '238' + wa : wa;
  return {
    whatsapp: waFull ? 'https://wa.me/' + waFull : '',
    facebook: CONFIG.facebook,
    instagram: CONFIG.instagram,
    maps: CONFIG.maps,
    reviews: CONFIG.reviews || CONFIG.maps,
  };
}

const URLS = getUrls();

function extLink(key) {
  return URLS[key] || null;
}

// ─── Translations ───────────────────────────────────────────────────────────
const T = {
  pt: {
    sobre: 'Sobre',
    menu: 'Menu',
    opinioes: 'Opiniões',
    contacto: 'Contacto',
    heroTitle: 'Steakhouse Premium',
    heroSub: 'Carnes grelhadas de alta qualidade, seleção de vinhos e ambiente elegante',
    reservar: 'Reservar agora',
    verMenu: 'Ver menu',
    sobreTitle: 'Sobre o Touro',
    sobreP1: 'Steakhouse premium especializado em carnes grelhadas de alta qualidade, com uma seleção de vinhos e alguns pratos de marisco, num ambiente elegante e acolhedor.',
    sobreP2: 'Perfeito para celebrações, reuniões de negócios ou simplesmente desfrutar de uma excelente refeição com as melhores carnes e vinhos.',
    especialidades: 'Nossas especialidades',
    comida: 'Comida',
    bebidas: 'Bebidas',
    opVerMais: 'Ver mais avaliações',
    oQDizem: 'O que dizem de nós',
    vemConhecer: 'Vem conhecer',
    aberto: 'Aberto diariamente · Praia Shopping, Praia 7600',
    preco: '500-1000 CVE por pessoa',
    verMaps: 'Ver no Google Maps',
    whatsapp: 'Falar no WhatsApp',
    inicio: 'Início',
    allRights: 'Todos os direitos reservados.',
    soups: 'Sopas e Saladas',
    appetizers: 'Aperitivos',
    seafood: 'Pratos de Marisco',
    seafoodSub: 'Opções frescas e saborosas',
    pasta: 'Massas',
    meats: 'Carnes Grelhadas',
    meatsSub: 'Cortes premium grelhados na perfeição',
    veg: 'Opções Vegetarianas',
    vegSub: 'Para todos os gostos e regimes',
    desserts: 'Sobremesas',
    extras: 'Extras e Acompanhamentos',
    pizzas: 'Pizzas',
    pizzaText: 'Escolha os seus ingredientes',
    wineLink: 'Seleção de Vinhos',
    wineLinkSub: 'Vinhos escolhidos a dedo para acompanhar',
    cocktails: 'Cocktails',
    scotch: 'Scotch',
    rum: 'Rum',
    malt: 'Malt',
    vodka: 'Vodka',
    gin: 'Gin',
    tequila: 'Tequila',
    licores: 'Licores',
    conhaque: 'Conhaque · Brandy',
    sangria: 'Sangria',
    vinhoCopo: 'Vinho a Copo',
    vinhoBranco: 'Vinho Branco',
    vinhoRose: 'Vinho Rosé',
    vinhoVerde: 'Vinho Verde',
    vinhoTinto: 'Vinho Tinto',
    espumantes: 'Espumantes',
    champagne: 'Champanhe',
  },
  en: {
    sobre: 'About',
    menu: 'Menu',
    opinioes: 'Reviews',
    contacto: 'Contact',
    heroTitle: 'Premium Steakhouse',
    heroSub: 'Grilled high-quality meats, a wine selection and an elegant atmosphere',
    reservar: 'Book now',
    verMenu: 'View menu',
    sobreTitle: 'About Touro',
    sobreP1: 'Premium steakhouse specializing in high-quality grilled meats, with a wine selection and a few seafood dishes, in an elegant and welcoming setting.',
    sobreP2: 'Perfect for celebrations, business meetings or simply enjoying an excellent meal with the best meats and wines.',
    especialidades: 'Our specialties',
    comida: 'Food',
    bebidas: 'Drinks',
    opVerMais: 'See more reviews',
    oQDizem: 'What people say about us',
    vemConhecer: 'Come visit',
    aberto: 'Open daily · Praia Shopping, Praia 7600',
    preco: '500-1000 CVE per person',
    verMaps: 'See on Google Maps',
    whatsapp: 'Talk on WhatsApp',
    inicio: 'Home',
    allRights: 'All rights reserved.',
    soups: 'Soups and Salads',
    appetizers: 'Appetizers',
    seafood: 'Seafood Dishes',
    seafoodSub: 'Fresh, tasty options',
    pasta: 'Pasta',
    meats: 'Grilled Meats',
    meatsSub: 'Premium cuts grilled to perfection',
    veg: 'Vegetarian Options',
    vegSub: 'For every taste and diet',
    desserts: 'Desserts',
    extras: 'Extras and Sides',
    pizzas: 'Pizzas',
    pizzaText: 'Choose your ingredients',
    wineLink: 'Wine Selection',
    wineLinkSub: 'Hand-picked wines to match',
    cocktails: 'Cocktails',
    scotch: 'Scotch',
    rum: 'Rum',
    malt: 'Malt',
    vodka: 'Vodka',
    gin: 'Gin',
    tequila: 'Tequila',
    licores: 'Liqueurs',
    conhaque: 'Cognac and Brandy',
    sangria: 'Sangria',
    vinhoCopo: 'Wine by the Glass',
    vinhoBranco: 'White Wine',
    vinhoRose: 'Rosé Wine',
    vinhoVerde: 'Green Wine',
    vinhoTinto: 'Red Wine',
    espumantes: 'Sparkling Wine',
    champagne: 'Champagne',
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────
const foodGroups = (t) => [
  {
    key: 'soups', title: t.soups, items: [
      { name: 'Sopa de legumes', price: '490 CVE' },
      { name: 'Bisque de camarão', price: '650 CVE' },
      { name: 'Bisque de lagosta', price: '950 CVE' },
      { name: 'Salada c/ queijo parmesão', price: 'Média 650 · Grande 950 CVE' },
    ]
  },
  {
    key: 'app', title: t.appetizers, items: [
      { name: 'Asas picantes', price: '650 CVE' },
      { name: 'Nuggets de frango BBQ', price: '590 CVE' },
      { name: 'Trio salgados 6 uni (camarão, carne, bacalhau)', price: '890 CVE' },
      { name: 'Chouriço à bombeiro', price: '850 CVE' },
      { name: 'Pastel chinês na frigideira', price: '650 CVE' },
      { name: 'Camarão salteado em azeite virgem e alho', price: '1.450 CVE' },
    ]
  },
  {
    key: 'sea', title: t.seafood, sub: t.seafoodSub, items: [
      { name: 'Atum ou peixe do dia grelhado com molho de camarão', price: '1.590 CVE' },
      { name: 'Polvo à lagareiro', price: '1.950 CVE' },
      { name: 'Arroz de tamboril c/ camarão e amêijoas (2 pessoas)', price: '2.990 CVE' },
      { name: 'Arroz malandrinho de polvo e camarão', price: '1.600 CVE' },
      { name: 'Arroz oriental de marisco (2 pessoas)', price: '3.900 CVE' },
      { name: 'Filetes de garoupa branca na grelha', price: '1.490 CVE' },
      { name: 'Dourada grelhada', price: 'Regular 1.290 · Média 1.590 · Grande 1.990 CVE' },
      { name: 'Lulas à lagareiro', price: '1.490 CVE' },
      { name: 'Gambas à plancha', price: '2.490 CVE' },
      { name: 'Linguado grelhado', price: 'a partir de 1.490 CVE' },
      { name: 'Rabo de lagosta béarnaise', price: '2.990 CVE' },
      { name: 'Chocos na caçarola', price: '1.590 CVE' },
    ]
  },
  {
    key: 'pasta', title: t.pasta, items: [
      { name: 'Pasta c/ gambas, alcaparras, tomate e azeite virgem', price: '1.950 CVE' },
      { name: 'Pasta em creme de bisque de lagosta', price: '2.490 CVE' },
      { name: 'Alfredo de frango c/ brócolis', price: '1.490 CVE' },
    ]
  },
  {
    key: 'meats', title: t.meats, sub: t.meatsSub, items: [
      { name: 'Hambúrguer bacon cheddar', price: '950 CVE' },
      { name: 'Frango no churrasco', price: '950 CVE' },
      { name: 'Bitoque', price: '1.200 CVE' },
      { name: 'Bifé à portuguesa (filet mignon)', price: '1.590 CVE' },
      { name: 'NY Strip Cervejaria', price: '1.800 CVE' },
      { name: 'Filé mignon com molho de pimenta', price: '2.200 CVE' },
      { name: 'Filé mignon de porco au poivre', price: '1.490 CVE' },
      { name: 'Picanha Angus', price: '1.990 CVE' },
      { name: 'Ribeye Angus béarnaise', price: '2.990 CVE' },
      { name: 'Ribeye & lobster tail', price: '4.500 CVE' },
      { name: 'Tomahawk', price: '10.000 CVE' },
    ]
  },
  {
    key: 'veg', title: t.veg, sub: t.vegSub, items: [
      { name: 'Caril de grão c/ arroz branco', price: '850 CVE' },
      { name: 'Chilli de feijão c/ arroz branco', price: '850 CVE' },
      { name: 'Bolonhesa de lentilhas', price: '850 CVE' },
      { name: 'Arroz oriental de tofu', price: '950 CVE' },
    ]
  },
  {
    key: 'des', title: t.desserts, items: [
      { name: 'Bolo de bolacha', price: '450 CVE' },
      { name: 'Pudim de leite', price: '450 CVE' },
      { name: 'Brownie com gelado', price: '590 CVE' },
    ]
  },
  {
    key: 'ext', title: t.extras, items: [
      { name: 'Batata frita terra', price: '390 CVE' },
      { name: 'Arroz oriental', price: '650 CVE' },
      { name: 'Legumes grelhados', price: '590 CVE' },
      { name: 'Arroz branco', price: '250 CVE' },
      { name: 'Arroz dourado', price: '350 CVE' },
      { name: 'Molho', price: '190 CVE' },
    ]
  },
  {
    key: 'piz', title: t.pizzas, items: [
      { name: t.pizzaText, price: '' },
    ]
  },
];

const drinksGroups = (t) => [
  {
    key: 'ckt', title: t.cocktails, items: [
      { name: 'Caipirinha', price: '600 CVE' }, { name: 'Caipiroska', price: '600 CVE' },
      { name: 'Caipiblack', price: '600 CVE' }, { name: 'Caipila', price: '600 CVE' },
      { name: 'Caipifari', price: '600 CVE' }, { name: 'Morangoska', price: '600 CVE' },
      { name: 'Maracujão', price: '600 CVE' }, { name: 'Margarita', price: '600 CVE' },
      { name: 'Mojito', price: '600 CVE' }, { name: 'Piña Colada', price: '600 CVE' },
      { name: 'Sex on the Beach', price: '600 CVE' }, { name: 'Summer Daiquiri', price: '850 CVE' },
      { name: 'Strawberry Daiquiri', price: '600 CVE' }, { name: 'Blue Lagoon', price: '600 CVE' },
      { name: 'Strawberry Margarita', price: '600 CVE' }, { name: 'Mango Margarita', price: '600 CVE' },
      { name: 'Screwdriver', price: '600 CVE' }, { name: 'Tequila Sunrise', price: '600 CVE' },
      { name: 'Long Island Ice Tea', price: '850 CVE' },
    ]
  },
  {
    key: 'sco', title: t.scotch, items: [
      { name: 'Johnnie Walker Red Label', price: '550 CVE' },
      { name: 'Johnnie Walker Black Label', price: '800 CVE' },
      { name: 'Johnnie Walker Double Black', price: '800 CVE' },
      { name: 'Johnnie Walker Green 15', price: '950 CVE' },
      { name: 'Johnnie Walker 18 Gold', price: '1.000 CVE' },
      { name: 'Johnnie Walker Swing', price: '1.000 CVE' },
      { name: 'Johnnie Walker Explorer', price: '1.200 CVE' },
      { name: 'Johnnie Walker Platinum 18', price: '1.400 CVE' },
      { name: 'Johnnie Walker Blue Label', price: '1.600 CVE' },
      { name: 'J&B', price: '600 CVE' }, { name: 'Logan', price: '750 CVE' },
      { name: 'Jameson Black', price: '900 CVE' }, { name: 'Jameson', price: '700 CVE' },
      { name: 'Grants', price: '500 CVE' }, { name: 'Jack Daniels', price: '800 CVE' },
      { name: 'Chivas', price: '800 CVE' }, { name: 'Chivas 21', price: '1.500 CVE' },
    ]
  },
  {
    key: 'rum', title: t.rum, items: [
      { name: 'Havana Club Especial', price: '500 CVE' },
      { name: 'Havana Club Reserva', price: '500 CVE' },
      { name: 'Havana Club 7 Años', price: '600 CVE' },
      { name: 'Malibu', price: '500 CVE' },
      { name: 'Rum Captain Morgan', price: '' },
      { name: 'Rum de Casa', price: '400 CVE' },
    ]
  },
  {
    key: 'malt', title: t.malt, items: [
      { name: 'Cardhu 12', price: '1.200 CVE' },
      { name: 'Bushmills 1608', price: '900 CVE' },
    ]
  },
  {
    key: 'vdk', title: t.vodka, items: [
      { name: 'Ciroc', price: '800 CVE' }, { name: 'Absolut', price: '600 CVE' },
      { name: 'Smirnoff', price: '500 CVE' }, { name: 'Vodka Casa', price: '400 CVE' },
    ]
  },
  {
    key: 'gin', title: t.gin, items: [
      { name: 'Gordons Lemon', price: '600 CVE' }, { name: 'Bombay', price: '600 CVE' },
      { name: 'Tanqueray', price: '600 CVE' }, { name: 'Gordons Rosé', price: '600 CVE' },
      { name: 'Gordons', price: '500 CVE' }, { name: 'Hendricks', price: '' },
      { name: 'Bulldog', price: '700 CVE' }, { name: 'Beefeater', price: '600 CVE' },
      { name: 'Beefeater 24', price: '800 CVE' }, { name: 'Gin Casa', price: '400 CVE' },
    ]
  },
  {
    key: 'teq', title: t.tequila, items: [
      { name: 'Patron Reposado', price: '1.300 CVE' }, { name: 'Patron Silver', price: '900 CVE' },
      { name: 'Patron Añejo', price: '1.400 CVE' }, { name: 'Jose Cuervo', price: '500 CVE' },
      { name: 'Jose Cuervo Reposado', price: '600 CVE' }, { name: 'Tequila Casa', price: '400 CVE' },
    ]
  },
  {
    key: 'lic', title: t.licores, items: [
      { name: 'Safari', price: '500 CVE' }, { name: 'Drambuie', price: '700 CVE' },
      { name: 'Amarula', price: '600 CVE' }, { name: 'Amaretto', price: '600 CVE' },
      { name: 'Beirão', price: '500 CVE' }, { name: 'Baileys', price: '600 CVE' },
      { name: 'Grand Marnier', price: '800 CVE' }, { name: 'Cointreau', price: '700 CVE' },
      { name: 'Kahlúa', price: '600 CVE' }, { name: 'Sambuca', price: '500 CVE' },
    ]
  },
  {
    key: 'con', title: t.conhaque, items: [
      { name: 'Courvoisier VSOP', price: '800 CVE' }, { name: 'Hennessy VS', price: '700 CVE' },
      { name: 'Dusse', price: '900 CVE' }, { name: 'Martell', price: '900 CVE' },
      { name: 'Rémy Martin VSOP', price: '1.000 CVE' }, { name: 'Rémy Martin Premier', price: '1.200 CVE' },
      { name: 'Napoleon', price: '450 CVE' }, { name: 'Hennessy White', price: '900 CVE' },
      { name: 'Brandy Casa', price: '400 CVE' },
    ]
  },
  {
    key: 'san', title: t.sangria, items: [
      { name: 'Tinto 2L', price: '1.790 CVE' }, { name: 'Branco 2L', price: '1.790 CVE' },
    ]
  },
  {
    key: 'vcp', title: t.vinhoCopo, items: [
      { name: 'Tinto', price: '300 CVE' }, { name: 'Tinto Premium', price: '450 CVE' },
      { name: 'Branco', price: '300 CVE' }, { name: 'Branco Premium', price: '450 CVE' },
      { name: 'Rosé', price: '300 CVE' },
    ]
  },
  {
    key: 'vbr', title: t.vinhoBranco, items: [
      { name: 'Duarte Durão', price: '1.490 CVE' }, { name: 'Chã Branco', price: '2.800 CVE' },
      { name: 'Cabriz', price: '1.990 CVE' },
    ]
  },
  {
    key: 'vro', title: t.vinhoRose, items: [
      { name: 'Mateus', price: '1.790 CVE' }, { name: 'Duarte Durão', price: '1.490 CVE' },
    ]
  },
  {
    key: 'vve', title: t.vinhoVerde, items: [
      { name: 'Alvarinho', price: '2.490 CVE' }, { name: 'Casal Garcia', price: '1.790 CVE' },
      { name: 'Casal Garcia Sweet', price: '1.790 CVE' }, { name: 'Gazela', price: '1.790 CVE' },
      { name: 'Luz Loureiro', price: '1.790 CVE' }, { name: 'Luz Verde', price: '1.790 CVE' },
    ]
  },
  {
    key: 'vti', title: t.vinhoTinto, items: [
      { name: 'Chã Tinto', price: '2.800 CVE' }, { name: 'Segredos São Miguel', price: '1.490 CVE' },
      { name: 'Saramago', price: '1.790 CVE' }, { name: 'Saramago Reserva', price: '2.490 CVE' },
      { name: 'Duarte Durão Reserva 2017', price: '2.490 CVE' }, { name: 'Cartuxa', price: '' },
      { name: 'Ea Cartuxa', price: '2.790 CVE' },
    ]
  },
  {
    key: 'esp', title: t.espumantes, items: [
      { name: 'Corte Real', price: '1.500 CVE' }, { name: 'Raposeira Reserva', price: '2.490 CVE' },
      { name: 'Gancia Asti', price: '2.900 CVE' },
    ]
  },
  {
    key: 'cha', title: t.champagne, items: [
      { name: 'Laurent Perrier', price: '12.000 CVE' },
      { name: 'Moët & Chandon Imperial Brut', price: '12.900 CVE' },
      { name: 'Moët & Chandon Ice', price: '16.800 CVE' },
      { name: 'Moët & Chandon Imperial Rosé', price: '16.900 CVE' },
      { name: 'Moët & Chandon Imperial Rosé Ice', price: '17.900 CVE' },
      { name: 'Chandon Spritz', price: '5.900 CVE' },
      { name: 'Veuve Clicquot Rosé', price: '14.900 CVE' },
      { name: 'Veuve Clicquot Yellow', price: '14.900 CVE' },
      { name: 'Mumm Brut', price: '11.900 CVE' },
    ]
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function MenuGroup({ title, sub, items }) {
  return (
    <details className="grp" name="menu">
      <summary>
        <b>{title}</b>
        {sub && <span className="d">{sub}</span>}
      </summary>
      <ul className="dishes">
        {items.map((item, i) => (
          <li key={i}>
            <span>{item.name}</span>
            {item.price && <b>{item.price}</b>}
          </li>
        ))}
      </ul>
    </details>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  const langRef = useRef('pt');
  const navRef = useRef(null);
  const langBtnRef = useRef(null);

  // Hydration-safe lang init
  useEffect(() => {
    let saved = 'pt';
    try { saved = localStorage.getItem('lang') || CONFIG.lang; } catch (_) { }
    setLang(saved);

    // Parallax / mouse move
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasHover = matchMedia('(hover:hover)').matches;
    if (!reduced && hasHover) {
      const els = document.querySelectorAll('[data-d]');
      const wm = document.querySelector('.wm');
      const onMove = (e) => {
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        els.forEach(el => {
          const d = +el.dataset.d;
          el.style.setProperty('--x', x * d + 'px');
          el.style.setProperty('--y', y * d + 'px');
        });
        if (wm) {
          wm.style.setProperty('--x', -x * 40 + 'px');
          wm.style.setProperty('--y', -y * 40 + 'px');
        }
      };
      document.addEventListener('mousemove', onMove);
      return () => document.removeEventListener('mousemove', onMove);
    }
  }, []);

  // Scroll spy
  useEffect(() => {
    const bar = navRef.current;
    const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]:not(.brand)'));
    const sections = navLinks.map(a => {
      const id = a.getAttribute('href').slice(1);
      return document.getElementById(id);
    }).filter(Boolean);

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (bar) bar.classList.toggle('scrolled', scrollY > 30);
      let currentId = '';
      const threshold = scrollY + 160;
      const isAtBottom = (window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 60);
      if (isAtBottom && sections.length) {
        currentId = sections[sections.length - 1].id;
      } else {
        for (const sec of sections) {
          if (threshold >= sec.offsetTop && threshold < sec.offsetTop + sec.offsetHeight) {
            currentId = sec.id; break;
          }
        }
      }
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href').slice(1) === currentId);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Year in footer
  useEffect(() => {
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  }, []);

  function setLang(l) {
    langRef.current = l;
    const t = T[l];
    // Update all data-lang elements
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.dataset.lang;
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.lang = l;
    if (langBtnRef.current) langBtnRef.current.dataset.l = l;
    try { localStorage.setItem('lang', l); } catch (_) { }
  }

  function toggleLang() {
    setLang(langRef.current === 'pt' ? 'en' : 'pt');
  }

  function showTab(tab) {
    const food = document.getElementById('tab-food');
    const drinks = document.getElementById('tab-drinks');
    const tabs = document.querySelectorAll('.tabs button');
    if (food) food.hidden = tab !== 'food';
    if (drinks) drinks.hidden = tab !== 'drinks';
    tabs.forEach(b => b.classList.toggle('on', b.dataset.t === tab));
  }

  function goToDrinks() {
    showTab('drinks');
    const el = document.getElementById('tab-drinks');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const t = T.pt; // initial SSR render in PT; client will update via setLang

  return (
    <>
      {/* ===== HERO ===== */}
      <header className="hero" id="inicio">
        <div className="wm still" aria-hidden="true">
          <Image src={LOGO_SRC} alt="" className="wm-img" width={980} height={980} />
        </div>

        <nav className="main-nav" aria-label="Principal" ref={navRef}>
          <a href="#inicio" className="brand" aria-label="Touro Steakhouse">
            <span className="brand-logo still">
              <Image src={LOGO_SRC} alt="Logótipo Touro" width={56} height={56} />
            </span>
            <span className="brand-text">TOURO</span>
          </a>
          <span>
            <a href="#sobre" data-lang="sobre">{t.sobre}</a>
            <a href="#catalogo" data-lang="menu">{t.menu}</a>
            <a href="#opinioes" data-lang="opinioes">{t.opinioes}</a>
            <a href="#contacto" data-lang="contacto">{t.contacto}</a>
            <button id="lang" data-l="pt" aria-label="Mudar idioma / Change language" ref={langBtnRef} onClick={toggleLang}>
              <span className="p">PT</span> / <span className="e">EN</span>
            </button>
          </span>
        </nav>

        <div className="copy">
          <h1 data-lang="heroTitle">{t.heroTitle}</h1>
          <p data-lang="heroSub">{t.heroSub}</p>
          <div className="cta">
            <a className="btn" href={extLink('whatsapp') || '#'} target="_blank" rel="noopener" data-lang="reservar">{t.reservar}</a>
            <a className="btn ghost" href="#catalogo" data-lang="verMenu">{t.verMenu}</a>
          </div>
        </div>

        <div className="cluster">
          <div className="c c1" data-d="16">
            <Image src="/hero-carne.jpg" alt="Corte de carne grelhado com alho" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="c c2" data-d="30">
            <Image src="/hero-ostras.jpg" alt="Ostras gratinadas com malagueta" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="c c3" data-d="22" role="img" aria-label="Logótipo Touro">
            <Image src={LOGO_SRC} alt="Logótipo Touro" width={160} height={160} />
            <svg viewBox="0 0 200 200">
              <circle className="ring" pathLength="1" cx="100" cy="100" r="90" />
            </svg>
          </div>
        </div>
      </header>

      <main>
        {/* ===== SOBRE ===== */}
        <section id="sobre">
          <div className="wrap two">
            <div>
              <h2 data-lang="sobreTitle">{t.sobreTitle}</h2>
              <p data-lang="sobreP1">{t.sobreP1}</p>
              <p data-lang="sobreP2">{t.sobreP2}</p>
            </div>
            <div className="pic">
              <Image src="/fachada.jpg" alt="Entrada do restaurante Touro, Restaurant & Lounge" width={600} height={800} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </section>

        {/* ===== CATÁLOGO ===== */}
        <section className="catalog" id="catalogo">
          <div className="wrap">
            <h2 data-lang="especialidades">{t.especialidades}</h2>
            <div className="strip">
              <Image src="/hero-carne.jpg" alt="Corte de carne grelhado com alho" width={1200} height={440} style={{ width: '100%', maxHeight: '440px', objectFit: 'cover', display: 'block', borderRadius: '24px', marginTop: '1.5rem' }} />
            </div>
            <div className="tabs" role="tablist">
              <button className="on" data-t="food" data-lang="comida" onClick={() => showTab('food')}>{t.comida}</button>
              <button data-t="drinks" data-lang="bebidas" onClick={() => showTab('drinks')}>{t.bebidas}</button>
            </div>
            <div className="groups" id="tab-food">
              {foodGroups(t).map(g => (
                <MenuGroup key={g.key} title={g.title} sub={g.sub} items={g.items} />
              ))}
              <div className="grp static" role="button" tabIndex={0} onClick={goToDrinks} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToDrinks(); } }}>
                <b data-lang="wineLink">{t.wineLink}</b>
                <span className="d" data-lang="wineLinkSub">{t.wineLinkSub}</span>
              </div>
            </div>
            <div className="groups" id="tab-drinks" hidden>
              {drinksGroups(t).map(g => (
                <MenuGroup key={g.key} title={g.title} sub={g.sub} items={g.items} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== OPINIÕES ===== */}
        <section id="opinioes">
          <div className="wrap">
            <h2 data-lang="oQDizem">{t.oQDizem}</h2>
            <div className="quotes">
              <blockquote>
                <p>&quot;Tivemos uma experiência maravilhosa do início ao fim. A carne estava absolutamente deliciosa—perfeitamente cozida, macia e cheia de sabor. O atendimento foi amigável, atencioso e profissional, o que tornou a noite ainda mais agradável. A atmosfera também era excelente. Definitivamente um lugar que vale a pena visitar!&quot;</p>
                <cite>Joe M. <span aria-label="5 estrelas">★★★★★</span></cite>
              </blockquote>
              <blockquote>
                <p>&quot;Comida muito boa, a melhor que tive em Praia. Atendimento excelente e muito acolhedor&quot;</p>
                <cite>Obi O. <span aria-label="5 estrelas">★★★★★</span></cite>
              </blockquote>
              <blockquote>
                <p>&quot;Adorei este wrap de badejo. Muito bom!&quot;</p>
                <cite>Semedo M. <span aria-label="5 estrelas">★★★★★</span></cite>
              </blockquote>
            </div>
            <a className="btn dark" href={extLink('reviews') || '#'} target="_blank" rel="noopener" data-lang="opVerMais">{t.opVerMais}</a>
          </div>
        </section>

        {/* ===== CONTACTO ===== */}
        <section className="highlight" id="contacto">
          <div className="wrap">
            <div className="big">10:00–00:00</div>
            <h2 data-lang="vemConhecer">{t.vemConhecer}</h2>
            <p data-lang="aberto">{t.aberto}</p>
            <p data-lang="preco">{t.preco}</p>
            <div className="cta-contact">
              <a className="btn dark" href={extLink('maps') || '#'} target="_blank" rel="noopener" data-lang="verMaps">{t.verMaps}</a>
              <a className="btn ghost" href={extLink('whatsapp') || '#'} target="_blank" rel="noopener" data-lang="whatsapp">{t.whatsapp}</a>
            </div>
            <div className="map-wrap">
              <iframe
                src="https://maps.google.com/maps?q=14.9036211,-23.5200908+(TOURO)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do TOURO no Google Maps"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ===== RODAPÉ ===== */}
      <footer>
        <div className="f-top">
          <a href="#inicio" className="brand" aria-label="Touro Steakhouse">
            <span className="brand-logo still">
              <Image src={LOGO_SRC} alt="Logo Touro" width={56} height={56} />
            </span>
            <span className="brand-text">TOURO</span>
          </a>
          <nav className="f-links" aria-label="Rodapé">
            <a href="#inicio" data-lang="inicio">{t.inicio}</a>
            <a href="#sobre" data-lang="sobre">{t.sobre}</a>
            <a href="#catalogo" data-lang="menu">{t.menu}</a>
            <a href="#opinioes" data-lang="opinioes">{t.opinioes}</a>
            <a href="#contacto" data-lang="contacto">{t.contacto}</a>
          </nav>
          <span className="soc">
            {extLink('facebook') && (
              <a href={extLink('facebook')} target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z" />
                </svg>
              </a>
            )}
            {extLink('instagram') && (
              <a href={extLink('instagram')} target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            )}
            {extLink('whatsapp') && (
              <a href={extLink('whatsapp')} target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                  <path d="M12 3a9 9 0 1 0 4.6 16.7L21 21l-1.3-4.4A9 9 0 0 0 12 3z" />
                  <path d="M9 8c0 4 3 7 7 7l1-2-2-1-1 1c-1-.4-2.2-1.6-2.6-2.6l1-1z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            )}
          </span>
        </div>
        <hr className="f-line" />
        <div className="f-bottom">
          <p className="f-copy">© <span id="year">{new Date().getFullYear()}</span> Touro · Praia, Cabo Verde. <span data-lang="allRights">{t.allRights}</span></p>
          <a className="f-author" href="https://www.linkedin.com/in/stiven-dias-3674723b4/?isSelfProfile=true" target="_blank" rel="noopener">Made by Stiven Dias</a>
        </div>
      </footer>
    </>
  );
}
