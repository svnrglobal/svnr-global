import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  to?: string; // omit on the current page
}

// Visible breadcrumb trail. The matching BreadcrumbList JSON-LD already ships
// through SEO.tsx; this is the on-page affordance.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items || items.length === 0) return null;
  return (
    <nav aria-label="breadcrumb" className="mb-8">
      <ol className="flex items-center flex-wrap gap-2 text-[11px]">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span className="text-white/20">/</span>}
            {c.to ? (
              <Link to={c.to} className="text-white/35 hover:text-white/70 transition-colors">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white/55">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
