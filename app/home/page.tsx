import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

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
