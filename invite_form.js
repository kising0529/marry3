export function validateInviteForm({ groom, bride, date, time, venue, address, message, phone, template_id }) {
  if (!groom || !bride || !date || !time || !venue || !address || !message || !phone || !template_id) {
    return { valid: false, error: '모든 필수 정보를 입력하세요.' };
  }
  return { valid: true };
}

export async function saveInvite(supabase, inviteData) {
  const { groom, bride, date, time, venue, address, message, phone, account, music, photo_url, template_id } = inviteData;
  const { valid, error } = validateInviteForm({ groom, bride, date, time, venue, address, message, phone, template_id });
  if (!valid) return { success: false, error };
  const { data, error: dbError } = await supabase.from('invites').insert([{
    template_id, groom, bride, date, time, venue, address, message, phone, account, music, photo_url
  }]);
  if (dbError) return { success: false, error: dbError.message };
  return { success: true, id: data[0]?.id };
} 