import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import { Button } from "@mui/material";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className="min-h-[80vh] grid justify-items-center items-center">
        <h2>
          Hey <span className="font-bold">{session?.user!.name}</span>, Welcome
          to Expensible
        </h2>
        <div className="ml-15">
          <Link href="/setupsteps">
            <Button variant="contained">Get Started</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
