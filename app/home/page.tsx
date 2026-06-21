import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    redirect("/sign-in");
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">
        Welcome to Tiny Problem Production System
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        {user ? (
          <span>Logged in as: {user.email}</span>
        ) : (
          <span>You are not logged in.</span>
        )}
      </p>
    </main>
  );
}
