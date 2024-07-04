import { createSupabaseServerSideClient } from "@/lib/supabase/serverSideClient";

export const getPraySheetById = async (pray_sheet_id: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray_sheet")
    .select("*")
    .eq("id", pray_sheet_id)
    .is("deleted_at", null);

  return result;
};

export const fetchPraySheetByGroupId = async (
  group_id: string,
  start_at: string,
  end_at: string
) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray_sheet")
    .select("*")
    .eq("group_id", group_id)
    .is("deleted_at", null)
    .gte("created_at", start_at)
    .lte("created_at", end_at);

  return result;
};

export const createPraySheet = async (group_id: string, content: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray_sheet")
    .insert([{ group_id, content }])
    .select();

  return result;
};
