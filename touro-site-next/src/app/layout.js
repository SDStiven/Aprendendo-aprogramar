import './globals.css';

export const metadata = {
  title: {
    pt: 'Touro Steakhouse Premium | Praia, Cabo Verde',
    en: 'Touro Premium Steakhouse | Praia, Cape Verde',
    default: 'Touro Steakhouse Premium | Praia, Cabo Verde',
  },
  description: 'Steakhouse premium na Praia, Cabo Verde: carnes grelhadas de alta qualidade, seleção de vinhos, pratos de marisco e opções vegetarianas.',
  openGraph: {
    title: 'Touro Steakhouse Premium',
    description: 'Steakhouse premium na Praia, Cabo Verde: carnes grelhadas de alta qualidade, seleção de vinhos, pratos de marisco e opções vegetarianas.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>123{children}</body>
    </html>
  );
}
