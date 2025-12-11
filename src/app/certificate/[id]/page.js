import { CertificateDisplay } from '@/app/components/Certificate';
import { getCertificateData } from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function CertificatePage({ params }) {
  const { id } = await params;
  const certificateData = await getCertificateData(id);

  if (!certificateData) {
    notFound();
  }

  return (
    <div suppressHydrationWarning>
      <CertificateDisplay {...certificateData} />
    </div>
  );
}
