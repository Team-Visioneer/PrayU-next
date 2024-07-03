import { createSupabaseServerSideClient } from "@/lib/supabase/serverSideClient";

export const getGroupById = async (group_id: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("group")
    .select("*")
    .eq("id", group_id)
    .is("deleted_at", null);
  return result.data;
};

export const fetchGroupByUserId = async (userId: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("group")
    .select("*")
    .eq("user_id", userId)
    .is("deleted_at", null);
  return result.data;
};

export const createGroup = async (name: string, intro: string = "") => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("group")
    .insert([{ name, intro }])
    .select();
  return result.data;
};
