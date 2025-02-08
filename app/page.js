import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-4xl">Time Zoner</h1>
      <Link href={"/run"}>
        <Button>
          <p>Calculate Time Zone</p>
          <Clock></Clock>
        </Button>
      </Link>
    </div>
  );
}