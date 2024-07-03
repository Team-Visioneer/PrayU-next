import { createSupabaseServerSideClient } from "@/lib/supabase/serverSideClient";

export const getPraySheetById = async (pray_sheet_id: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray_sheet")
    .select("*")
    .eq("id", pray_sheet_id)
    .is("deleted_at", null);
  return result.data;
};

export const fetchPraySheetByGroupId = async (group_id: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray_sheet")
    .select("*")
    .eq("group_id", group_id)
    .is("deleted_at", null);
  return result.data;
};

export const createPraySheet = async (group_id: string, content: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray_sheet")
    .insert([{ group_id, content }])
    .select();
  return result.data;
};
