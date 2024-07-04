import { createSupabaseServerSideClient } from "@/lib/supabase/serverSideClient";

export const createPray = async (pray_sheet_id: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray")
    .insert([{ pray_sheet_id }])
    .select();

  return result;
};

export const fetchPray = async (pray_sheet_id: string) => {
  const supabase = await createSupabaseServerSideClient();
  const result = await supabase
    .from("pray")
    .select("*")
    .eq("pray_sheet_id", pray_sheet_id);

  return result;
};
