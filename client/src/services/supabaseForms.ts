import { supabase } from '../supabaseClient';

export const insertFormData = async (table: string, formData: any) => {
  const { data, error } = await supabase
    .from(table)
    .insert([formData])
    .select();

  if (error) {
    console.error(`Error inserting into ${table}:`, error);
    throw error;
  }

  return data;
};

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 is 'no rows returned'
    console.error('Error fetching profile:', error);
    throw error;
  }

  return data;
};

export const updateProfile = async (userId: string, updates: any) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select();

  if (error) {
    console.error('Error updating profile:', error);
    throw error;
  }

  return data;
};
