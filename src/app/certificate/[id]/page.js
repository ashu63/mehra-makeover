import { CertificateDisplay } from '@/app/components/Certificate';
import { getCertificateData } from '@/lib/db'
import { notFound } from 'next/navigation'

export default async function CertificatePage({ params }) {
  const certificateData = await getCertificateData(params.id);
  
  if (!certificateData) {
    notFound();
  }
  
  return (
    <div suppressHydrationWarning>
      <CertificateDisplay {...certificateData} />
    </div>
  );
}
