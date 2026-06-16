export default function PageWrapper({ children }) {
  return (
    <div className="w-full py-16">
      {children}
    </div>
  );
}