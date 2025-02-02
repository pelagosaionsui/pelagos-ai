import Image from 'next/image';

export function Logo() {
  return (
    <div className="fixed top-2 left-2 z-50">
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 drop-shadow-[0_4px_8px_rgba(108,92,231,0.8)]">
        <Image
          src="/pelagos-logo.jpeg"
          alt="Pelagos AI"
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
