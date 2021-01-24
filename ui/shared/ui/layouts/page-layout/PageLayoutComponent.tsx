export const siteTitle = 'Next.js Sample Website';

export default function PageLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <main>{ children }</main>
  );
}
