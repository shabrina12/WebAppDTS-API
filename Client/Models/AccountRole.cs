namespace Client.Models
{
    public class AccountRole
    {
        public int Id { get; set; }
        public string AccountNIK { get; set; } = null!;
        public int RoleId { get; set; }
    }
}
