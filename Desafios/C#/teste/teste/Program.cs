using System;
using System.Collections.Generic;
using System.Linq;

class MinhaClasse {
    public static void Main (string[] args) {

        string joia = "";
        List<string> joias = new List<string>();
    
        do
        {
            joia = Console.ReadLine();

            if (!string.IsNullOrWhiteSpace(joia))
            {
                joias.Add(joia);
                
            } else {
                break;
            }
      
        } while (true);
    
        IEnumerable<string> distinctJoias = joias.Distinct();

        if (joias.Count() < 107)
        {
            Console.WriteLine(distinctJoias.Count());
        }

    }
}