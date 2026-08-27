import { Nav } from "@/components/navigation/Nav";
import Footer from "@/components/layout/Footer";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans tracking-normal antialiased wrap-anywhere">
      <Nav />
      {children}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
