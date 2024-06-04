import HomeComponent from "@/components/main/home-component";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen mb-10">
      <HomeComponent />
    </main>
  );
}
