import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Link href="/" className="mb-8">
        <Image src="/logo.svg" alt="Logo" width={120} height={32} priority />
      </Link>
      {children}
    </div>
  );
}
