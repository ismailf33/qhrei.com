import { Footer, Header } from '..';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <>
      <Toaster />
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
