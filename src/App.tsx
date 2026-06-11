import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setLenis, scrollToTop } from "./lib/lenis";
import "./index.css";
import Nav from "./components/Nav";
import AetherLauncher from "./components/aether/AetherLauncher";
import { AuthProvider } from "./lib/useAuth";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Routes that render their own full-screen app chrome (no public site chrome).
const APP_ROUTES = ["/login", "/signup", "/verify", "/dashboard", "/admin", "/settings", "/member", "/chat"];

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
const Account             = lazy(() => import("./pages/member/Account"));
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

// Buttery inertia scrolling on public marketing pages. Disabled on app routes
// (chat/dashboard have their own inner scroll) and under prefers-reduced-motion.
// The live instance is shared via src/lib/lenis.ts so pages can scroll through it.
function SmoothScroll() {
  const { pathname } = useLocation();
  const isApp = APP_ROUTES.some((p) => pathname.startsWith(p));
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || isApp) return;
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    setLenis(lenis);
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, [isApp]);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);
  return null;
}

// Thin reading-progress bar pinned to the top of the viewport (public pages only).
function ScrollProgress() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  if (APP_ROUTES.some((p) => pathname.startsWith(p))) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none"
    >
      <div className="w-full h-full" style={{ background: "linear-gradient(90deg, #6c6cff, #a78bfa)" }} />
    </motion.div>
  );
}

// Minimal branded fallback shown only while a lazy route chunk loads (SPA nav).
// The app background is already #0A0A0B, so this just adds a subtle pulse.
function PageLoader() {
  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center bg-[#0A0A0B]" aria-hidden="true">
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ background: "#8b7dff" }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// Gentle opacity-only cross-fade on navigation. Opacity (unlike transform) does
// not create a containing block, so page-level position:fixed elements stay put.
function RouteFade({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      id="main-content"
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.26, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SmoothScroll />
      <ScrollToTop />
      <ScrollProgress />
      <Nav />
      <Suspense fallback={<PageLoader />}>
        <RouteFade>
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
          <Route path="/cassian" element={<Aether />} />
          {/* old names → Cassian */}
          <Route path="/aether" element={<Navigate to="/cassian" replace />} />
          <Route path="/prose" element={<Navigate to="/cassian" replace />} />

          {/* Member platform (private, noindex) */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Account /></ProtectedRoute>} />
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
        </RouteFade>
      </Suspense>
      <AetherLauncher />
      </MotionConfig>
      </AuthProvider>
    </BrowserRouter>
  );
}
