export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/svnr-logo.svg"
      alt="SVNR Global"
      className={className}
      style={{ display: "block" }}
    />
  );
}
