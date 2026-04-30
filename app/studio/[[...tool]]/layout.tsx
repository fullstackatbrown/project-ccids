export const metadata = {
  title: "CCIDS Content Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ margin: 0, height: "100vh" }}>{children}</div>;
}
