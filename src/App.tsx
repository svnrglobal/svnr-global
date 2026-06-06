import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import "./index.css";
import Nav from "./components/Nav";
import AetherLauncher from "./components/aether/AetherLauncher";
import { AuthProvider } from "./lib/useAuth";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Lazy-load all pages for code splitting
const Home                = lazy(() => import("./pages/Home"));
const About               = lazy(() => import("./pages/About"));
const Services            = lazy(() => import("./pages/Services"));
const Sectors             = lazy(() => import("./pages/Sectors"));
const Contact             = lazy(() => import("./pages/Contact"));
const Blog                = lazy(() => import("./pages/Blog"));
const BlogArticle         = lazy(() => import("./pages/BlogArticle"));
const Compare             = lazy(() => import("./pages/Compare"));
const Engagement          = lazy(() => import("./pages/Engagement"));
const CaseStudies         = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail     = lazy(() => import("./pages/CaseStudyDetail"));
const Founder             = lazy(() => import("./pages/Founder"));
const Aether              = lazy(() => import("./pages/Aether"));
const Signup              = lazy(() => import("./pages/auth/Signup"));
const Login               = lazy(() => import("./pages/auth/Login"));
const Verify              = lazy(() => import("./pages/auth/Verify"));
const Dashboard           = lazy(() => import("./pages/member/Dashboard"));
const Chat                = lazy(() => import("./pages/member/Chat"));
const Admin               = lazy(() => import("./pages/admin/Admin"));
const Members             = lazy(() => import("./pages/admin/Members"));

// Service pages
const ClientAcquisition   = lazy(() => import("./pages/services/ClientAcquisition"));
const AIReceptionist      = lazy(() => import("./pages/services/AIReceptionist"));
const RevenueOperations   = lazy(() => import("./pages/services/RevenueOperations"));
const IntelligenceResearch = lazy(() => import("./pages/services/IntelligenceResearch"));
const SectorWorkflows     = lazy(() => import("./pages/services/SectorWorkflows"));
const BrandOutreach       = lazy(() => import("./pages/services/BrandOutreach"));
const DealflowInvestors   = lazy(() => import("./pages/services/DealflowInvestors"));
const ChannelPartnership  = lazy(() => import("./pages/services/ChannelPartnership"));

// Sector pages
const LuxuryRugs          = lazy(() => import("./pages/sectors/LuxuryRugs"));
const PremiumRealEstate   = lazy(() => import("./pages/sectors/PremiumRealEstate"));
const PrivateEquity       = lazy(() => import("./pages/sectors/PrivateEquity"));
const B2BLuxury           = lazy(() => import("./pages/sectors/B2BLuxury"));
const WealthManagement    = lazy(() => import("./pages/sectors/WealthManagement"));
const HighTicketEcommerce = lazy(() => import("./pages/sectors/HighTicketEcommerce"));
const Maritime            = lazy(() => import("./pages/sectors/Maritime"));
const ProfessionalServices = lazy(() => import("./pages/sectors/ProfessionalServices"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <ScrollToTop />
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/aether" element={<Aether />} />
          {/* old PROSE links → Aether */}
          <Route path="/prose" element={<Navigate to="/aether" replace />} />

          {/* Member platform (private, noindex) */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute admin><Admin /></ProtectedRoute>} />
          <Route path="/admin/members" element={<ProtectedRoute admin><Members /></ProtectedRoute>} />

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
      </Suspense>
      <AetherLauncher />
      </AuthProvider>
    </BrowserRouter>
  );
}
