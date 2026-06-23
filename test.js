require("dotenv").config();

const supabase = require("./config/supabase");

async function test() {
  const { data, error } = await supabase
    .from("patients")
    .select("*");

  console.log(data);
  console.log(error);
}

test();