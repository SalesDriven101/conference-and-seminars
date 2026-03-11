import { supabase } from "../supabaseClient";

export async function insertFormData(table, formData) {

    const { data, error } = await supabase
        .from(table)
        .insert([formData]);

    if (error) {
        console.error(error);
        throw error;
    }

    return data;
}