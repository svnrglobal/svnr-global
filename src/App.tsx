import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";

// Service pages
import ClientAcquisition from "./pages/services/ClientAcquisition";
import AIReceptionist from "./pages/services/AIReceptionist";
import RevenueOperations from "./pages/services/RevenueOperations";
import IntelligenceResearch from "./pages/services/IntelligenceResearch";
import SectorWorkflows from "./pages/services/SectorWorkflows";
import BrandOutreach from "./pages/services/BrandOutreach";
import DealflowInvestors from "./pages/services/DealflowInvestors";
import ChannelPartnership from "./pages/services/ChannelPartnership";

// Sector pages
import LuxuryRugs from "./pages/sectors/LuxuryRugs";
import PremiumRealEstate from "./pages/sectors/PremiumRealEstate";
import PrivateEquity from "./pages/sectors/PrivateEquity";
import B2BLuxury from "./pages/sectors/B2BLuxury";
import WealthManagement from "./pages/sectors/WealthManagement";
import HighTicketEcommerce from "./pages/sectors/HighTicketEcommerce";
import Maritime from "./pages/sectors/Maritime";
import ProfessionalServices from "./pages/sectors/ProfessionalServices";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />

        {/* Service sub-pages */}
        <Route path="/services/client-acquisition" element={<ClientAcquisition />} />
        <Route path="/services/ai-receptionist" element={<AIReceptionist />} />
        <Route path="/services/revenue-operations" element={<RevenueOperations />} />
        <Route path="/services/intelligence-research" element={<IntelligenceResearch />} />
        <Route path="/services/sector-workflows" element={<SectorWorkflows />} />
        <Route path="/services/brand-outreach" element={<BrandOutreach />} />
        <Route path="/services/dealflow-investor" element={<DealflowInvestors />} />
        <Route path="/services/channel-partnership" element={<ChannelPartnership />} />

        {/* Sector sub-pages */}
        <Route path="/sectors/luxury-rugs-home-textiles" element={<LuxuryRugs />} />
        <Route path="/sectors/premium-real-estate" element={<PremiumRealEstate />} />
        <Route path="/sectors/private-equity-family-offices" element={<PrivateEquity />} />
        <Route path="/sectors/b2b-luxury-brands" element={<B2BLuxury />} />
        <Route path="/sectors/wealth-management" element={<WealthManagement />} />
        <Route path="/sectors/high-ticket-ecommerce" element={<HighTicketEcommerce />} />
        <Route path="/sectors/maritime-logistics" element={<Maritime />} />
        <Route path="/sectors/professional-services" element={<ProfessionalServices />} />
      </Routes>
    </BrowserRouter>
  );
}
