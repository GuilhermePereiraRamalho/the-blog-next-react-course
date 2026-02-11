export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1>Here comes the About layout</h1>
    {children}
    </>
  );
}
