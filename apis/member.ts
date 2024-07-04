import { createSupabaseServerSideClient } from "@/lib/supabase/serverSideClient";

export const fetchMemberByGroupId = async (group_id: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("member")
    .select(`*, profile:user_id ( full_name, avatar_url )`)
    .eq("group_id", group_id)
    .is("deleted_at", null);

  return result;
};

export const createMember = async (group_id: string) => {
  const supabase = await createSupabaseServerSideClient();

  return result;
};
