namespace App.Core.Models
{
    public interface IAuditableEntity
    {
        DateTime CreatedOn { get; set; }
        DateTime ModifiedOn { get; set; }
    }
} 