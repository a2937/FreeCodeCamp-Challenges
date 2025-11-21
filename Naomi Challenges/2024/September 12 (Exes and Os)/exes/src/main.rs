
fn cost_safe(crowd : &str) -> bool
{
  let chars: Vec<char> = crowd.chars().collect();
  let mut x_count = 0; 
  let mut o_count = 0; 
  for c in chars {
    let proper_letter = c.to_lowercase().to_string();  
    if proper_letter == "x"
    {
      x_count += 1;
    }
    else if proper_letter == "o"
    {
      o_count += 1; 
    }
  }
  return o_count == x_count; 
}
  
fn main() {
    println!("Is protection safe and cost effective? {}", cost_safe("ooom")); 
}