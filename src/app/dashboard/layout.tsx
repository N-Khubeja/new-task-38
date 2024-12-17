
export default function dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h1>dash layout</h1>
        {children}
    </div>
  );
}
