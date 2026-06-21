import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

async function UserInfo() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <p className="mt-2 text-sm text-gray-600">
      Logged in as: {user!.email}
    </p>
  );
}

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">
        Welcome to Tiny Problem Production System
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserInfo />
      </Suspense>
    </main>
  );
}
