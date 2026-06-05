import { Navigate } from "react-router-dom";
import { useAuth } from "../../lib/useAuth";

export default function ProtectedRoute({
  children,
  admin = false,
}: {
  children: React.ReactNode;
  admin?: boolean;
}) {
  const { session, profile, loading } = useAuth();

  if (loading) return <div className="min-h-screen bg-[#0A0A0B]" />;
  if (!session) return <Navigate to="/login" replace />;
  if (admin && !profile?.is_admin) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}
