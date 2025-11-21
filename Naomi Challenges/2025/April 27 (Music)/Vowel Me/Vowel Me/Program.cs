namespace Vowel_Me
{
    internal class Program
    {

        static string ReplaceVowels(string original)
        {
            return original.Replace("A", "Ä")
                 .Replace("E", "Ë")
                .Replace("O", "Ö")
                .Replace("U", "Ü")
                .Replace("Y", "Ÿ")
                .Replace("a", "ä")
                .Replace("e", "ë")
                .Replace("i", "ï")
                .Replace("o", "ö")
                .Replace("u", "ü")
                .Replace("y", "ÿ");

        }

        static void Main(string[] args)
        {
            Console.WriteLine(ReplaceVowels("Live and Learn"));
        }
    }
}
