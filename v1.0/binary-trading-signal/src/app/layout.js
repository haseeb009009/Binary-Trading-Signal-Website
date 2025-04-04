import './globals.css';

export const metadata = {
  title: 'Binary Trading Signal',
  description: 'Live trading signals using candlestick patterns.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
