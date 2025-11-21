
fn cost_safe(crowd : &str) -> bool
{
  let chars: Vec<char> = crowd.chars().collect();
  let mut x_count = 0; 
  let mut o_count = 0; 
  let mut rain_count = 0; 
  let mut sad_count = 0; 
  let mut kat_count = 0;

  let mut unhandled_xs; 
  let mut active_guards; 


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
    else if proper_letter == "r"
    {
      rain_count += 1; 
    }
    else if proper_letter == "s"
    {
      sad_count += 1; 
    }
    else if proper_letter == "k"
    {
      kat_count += 1; 
    }
  }

  if rain_count > 1 || kat_count > 1 || sad_count > 1
  {
    return false; 
  }

  unhandled_xs = x_count; 
  unhandled_xs -= o_count; 
  active_guards = o_count; 

  if rain_count == 1
  {
    unhandled_xs -= 3;
    if x_count - 3 <= 0
    {
      active_guards -= 3
    }
  }

  if sad_count == 1 
  {
    unhandled_xs -= 5;
    active_guards = active_guards - (x_count - 5);
    if x_count - 5 <= 0
    {
      active_guards -= 5
    }
  }

  // Guard per ex , exs handled by guards with help , handled by lovers
  return o_count == x_count || (unhandled_xs <= 0 && active_guards >= 1 && o_count >= 1 && x_count >= 1) || 
  (unhandled_xs <= 0 && active_guards <= 0 && o_count == 0); 
}
  
fn main() {
    println!("Is protection safe and cost effective? {}", cost_safe("xxxxor")); 
}

#[cfg(test)]
mod tests
{
   use super::*;

    #[test]
    fn test_one_guard_one_ex() {
        assert_eq!(cost_safe("xo"), true);
    }

     #[test]
    fn test_two_guard_two_ex() {
        assert_eq!(cost_safe("xxoo"), true);
    }

    #[test]
    fn test_three_x() {
        assert_eq!(cost_safe("xxxm"), false);
    }

    #[test]
    fn test_two_o() {
        assert_eq!(cost_safe("Oo"), false);
    }

      #[test]
    fn test_three_o() {
        assert_eq!(cost_safe("ooom"), false);
    }

    #[test]
   fn no_guard_no_x() {
        assert_eq!(cost_safe("abcdef"), true);
  }

  #[test]
   fn rain_one_x() {
        assert_eq!(cost_safe("xr"), true);
  }

  #[test]
  fn rain_two_x() {
        assert_eq!(cost_safe("xxr"), true);
  }


  #[test]
   fn rain_three_x() {
        assert_eq!(cost_safe("xxxr"), true);
  }
  #[test]
  fn rain_four_x() {
        assert_eq!(cost_safe("xxxxr"), false);
  }

  #[test]
  fn rain_one_guard()
  {
    assert_eq!(cost_safe("or"), false);
  }

    #[test]
  fn rain_one_guard_four_x()
  {
    assert_eq!(cost_safe("xxxxor"), true);
  }

  #[test]
  fn double_rain()
  {
     assert_eq!(cost_safe("xxxRr"), false);
  }

    #[test]
  fn rain_crowd()
  {
     assert_eq!(cost_safe("abcdefR"), true);
  }

  #[test]
  fn kat_x_o()
  {
     assert_eq!(cost_safe("xkxo"), false);
  }

    #[test]
  fn sad_three_x()
  {
     assert_eq!(cost_safe("xxxs"), true);
  }

  #[test]
  fn sad_six_x()
  {
     assert_eq!(cost_safe("xxxxxsx"), false);
  }

  
 #[test]
  fn rain_sad_six_x()
  {
     assert_eq!(cost_safe("xrxxsxxxxx"), true);
  }

   #[test]
  fn rain_sad_six_x_kat()
  {
     assert_eq!(cost_safe("xrxxsxxxxxk"), true);
  }

     #[test]
  fn rain_sad_six_x_kat_guard()
  {
     assert_eq!(cost_safe("xrxxsxxxxxko"), false);
  }

  #[test]
  fn rain_double_kat()
  {
     assert_eq!(cost_safe("abrcdekkf"), false);
  }

}