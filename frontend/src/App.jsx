import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Artigo from "./pages/Artigo.jsx";
import Artigos from "./pages/Artigos.jsx";
import Sobre from "./pages/Sobre.jsx";
import Parcerias from "./pages/Parcerias.jsx";
import Privacy from "./pages/Privacy.jsx";
import { Analytics } from "@vercel/analytics/react";

function PageContainer({ children }) {
  return <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigos" element={<PageContainer><Artigos /></PageContainer>} />
          <Route path="/artigos/:slug" element={<PageContainer><Artigo /></PageContainer>} />
          <Route path="/sobre" element={<PageContainer><Sobre /></PageContainer>} />
          <Route path="/parcerias" element={<PageContainer><Parcerias /></PageContainer>} />
          <Route path="/privacy" element={<PageContainer><Privacy /></PageContainer>} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
