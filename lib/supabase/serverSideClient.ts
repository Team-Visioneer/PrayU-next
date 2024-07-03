import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "@/types/tableSchema";

export const createServerSideClient = async (serverComponent = false) => {
  const cookeiesStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookeiesStore.get(key)?.value,
        set: (key, value, options) => {
          if (serverComponent) return;
          cookeiesStore.set(key, value, options);
        },
        remove: (key, options) => {
          if (serverComponent) return;
          cookeiesStore.set(key, "", options);
        },
      },
    }
  );
};
