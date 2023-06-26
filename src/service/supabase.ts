import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types/supabase";

export const supabase = createClient<Database>(
    "https://cxrnirytqajphvriyoia.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4cm5pcnl0cWFqcGh2cml5b2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MDQ0NTYsImV4cCI6MjAwMDM4MDQ1Nn0.n7MoDl5o9dPJNOf8w4fNLraXsTdVb1cHvkKPPa21aqE")