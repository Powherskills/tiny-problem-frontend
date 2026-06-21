import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export default async function HomePage() {
  noStore();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">
        Welcome to Tiny Problem Production System
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Logged in as: {user.email}
      </p>
    </main>
  );
}
