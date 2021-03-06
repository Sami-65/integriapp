// <auto-generated />
using CRUD;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CRUD.Migrations
{
    [DbContext(typeof(BaseDBcontext))]
    partial class BaseDBcontextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.8");

            modelBuilder.Entity("CRUD.Models.Almacen", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Direccion")
                        .HasColumnType("longtext");

                    b.Property<string>("Idencargado")
                        .HasColumnType("longtext");

                    b.Property<string>("Nombre")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Almacen");
                });

            modelBuilder.Entity("CRUD.Models.Empleados", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Nombre")
                        .HasColumnType("longtext");

                    b.Property<string>("puesto")
                        .HasColumnType("longtext");

                    b.Property<string>("salario")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Empleados");
                });

            modelBuilder.Entity("CRUD.Models.Productos", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Cantidad")
                        .HasColumnType("int");

                    b.Property<int>("Idalmacen")
                        .HasColumnType("int");

                    b.Property<string>("Nombre")
                        .HasColumnType("longtext");

                    b.Property<int>("Precio")
                        .HasColumnType("int");

                    b.Property<string>("Registro")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Productos");
                });
#pragma warning restore 612, 618
        }
    }
}
