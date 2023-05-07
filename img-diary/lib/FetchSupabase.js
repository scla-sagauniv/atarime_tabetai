import supabase, { Database } from "./supabase";

export const TABLE_NAME = "img-diary";

export const fetchDatabase = async () => {
  try {
    const { data } = await supabase.from(TABLE_NAME).select("*").order("createdAt");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addSupabaseData = async ( user_id, imgUrl, Text ) => {
  try {
    await supabase.from(TABLE_NAME).insert({ user_id, imgUrl, Text });
  } catch (error) {
    console.error(error);
  }
};