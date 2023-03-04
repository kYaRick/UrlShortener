namespace UrlShort.Models;
public class UrlManagement
{
    public int Id { get; set; }
    public string RootUrl { get; set; } = default!;
    public string RedirUrl { get; set; } = default!;
}
