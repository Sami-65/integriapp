using CRUD.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD
{
    public class BaseDBcontext: DbContext
    {
        public DbSet<Productos> Productos { get; set; }
        public DbSet<Almacen> Almacen { get; set; }
        public DbSet<Empleados> Empleados { get; set; }

        public BaseDBcontext(DbContextOptions<BaseDBcontext> options) : base(options)
        {

        }
    }
}
