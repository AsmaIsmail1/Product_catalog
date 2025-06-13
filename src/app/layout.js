import './styles/globals.css';
import ReduxProvider from '../app/components/ReduxProvider';

export const metadata = {
  title: 'Product Catalog',
  description: 'Built with Next.js, Redux Toolkit, and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
