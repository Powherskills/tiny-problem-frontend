import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
    const supabase = await createClient();
    const {
          data: { user },
    } = await supabase.auth.getUser();

  return (
        <main className="p-8">
              <h1 className="text-2xl font-semibold">
                      Welcome to Tiny Problem Production System
              </h1>h1>
          {user ? (
                  <p className="mt-2 text-sm text-gray-600">
                            Logged in as: {user.email}
                  </p>p>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">
                            You are not logged in.
                  </p>p>
              )}
        </main>main>
      );
}</main>
