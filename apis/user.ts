import { createSupabaseServerSideClient } from "@/lib/supabase/serverSideClient";

export const getUser = async ({ serverComponent = false }) => {
  const supabase = await createSupabaseServerSideClient(serverComponent);
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};
