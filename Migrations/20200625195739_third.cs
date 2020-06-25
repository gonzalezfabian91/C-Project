using Microsoft.EntityFrameworkCore.Migrations;

namespace Casino.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Balance",
                table: "Users",
                nullable: false,
                oldClrType: typeof(double));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Balance",
                table: "Users",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
