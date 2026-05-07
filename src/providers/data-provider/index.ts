import { dataProvider } from "@refinedev/supabase";
import { supabase } from "@/lib/supabase";

export { dataProvider };
export const dataProviderInstance = dataProvider(supabase);
