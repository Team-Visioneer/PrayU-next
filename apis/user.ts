import { createSupabaseServerSideClient } from "@/lib/supabase/serverSideClient";

export const getUser = async ({ serverComponent = false }) => {
  const supabase = await createSupabaseServerSideClient(serverComponent);
  const result = await supabase.auth.getUser();
  return result?.data?.user;
};
