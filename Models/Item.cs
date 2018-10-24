using System.Collections.Generic;

namespace leagueapp.Models
{
  public class Item
  {
    public string name { get; set; }
    public string description { get; set; }
    public string img { get; set; }
    public int cost { get; set; }
    public int Id { get; set; }
    public List<Stat> Stats { get; set; }
  }
}