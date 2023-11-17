import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

async function getVersion() {
  const supabase = await createClient("https://lqdlzjvnpaybefftxuhh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxZGx6anZucGF5YmVmZnR4dWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDQ5NDEsImV4cCI6MjAxNTc4MDk0MX0.avrMCaZPw0iHfgZqTA2nKwBLrmcx45TcV4X00W2rre0");
  const { data, error } = await supabase.from('versions').select('*').order('id', { ascending: false }).limit(1);
  var result = "";
  if(data.length == 1)
    result = data[0].major + "." + data[0].minor + "." + data[0].release;
  return new Response(result, {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
}

Deno.serve(async (req) => {
  return getVersion();
})