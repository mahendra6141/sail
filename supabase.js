
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://bejhhnjpqqtnoninfphh.supabase.co";

const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlamhobmpwcXF0bm9uaW5mcGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MTM1ODksImV4cCI6MjA5NDI4OTU4OX0.NOn00gvP1sLMsjIVECb4hnzLNjPZDeR3iNxfpTKMGi4";

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export default supabase;
