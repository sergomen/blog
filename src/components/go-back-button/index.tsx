'use client';

import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 text-center"
    >
      ← Go Back
    </button>
  );
}
