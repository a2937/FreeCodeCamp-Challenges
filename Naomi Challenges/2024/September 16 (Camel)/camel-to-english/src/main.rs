fn main() {
    println!("{}", camel_to_english("naomiCarrigan"));
}

fn camel_to_english(input: &str) -> String
{
  let mut english : String = "".to_owned(); 
  let char_vec: Vec<char> = input.chars().collect();
  for (index,letter) in char_vec.iter().enumerate(){
    if letter.is_uppercase()
    {
      english += " ";
      english += &letter.to_string(); 
  }
   else 
   {
      if index == 0
      {
        english += &letter.to_uppercase().to_string();
      }
      else 
      {
        english += &letter.to_string(); 
      }
   }
  }
  return english; 
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_naomi() {
        assert_eq!(camel_to_english("naomiCarrigan"), "Naomi Carrigan");
    }

    #[test]
    fn test_rain() {
        assert_eq!(camel_to_english("rainGrace"), "Rain Grace");
    }

        #[test]
    fn test_fruit() {
        assert_eq!(camel_to_english("fruitPursuits"), "Fruit Pursuits");
    }

      #[test]
    fn test_free() {
        assert_eq!(camel_to_english("freeCodeCamp"), "Free Code Camp");
    }

    #[test]
    fn test_long() {
        assert_eq!(camel_to_english("thisIsAReallyLongName"), "This Is A Really Long Name");
    }

       #[test]
    fn test_person() {
        assert_eq!(camel_to_english("aPerson"), "A Person");
    }

}