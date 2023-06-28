import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateGastosCategoriaTable1687912420375
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "gastos_categorias",
        columns: [
          {
            name: "id_gastos",
            type: "int",
            isNullable: false,
          },
          {
            name: "id_categorias",
            type: "int",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.addColumn(
      "gastos_categorias",
      new TableColumn({
        name: "categoria_id",
        type: "int",
        isNullable: false,
      })
    );

    await queryRunner.addColumn(
      "gastos_categorias",
      new TableColumn({
        name: "categoria_id",
        type: "int",
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      "gastos_categorias",
      new TableForeignKey({
        columnNames: ["gasto_id"],
        referencedTableName: "gastos",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "gastos_categorias",
      new TableForeignKey({
        columnNames: ["categoria_id"],
        referencedTableName: "categorias",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("gastos_categorias", "gasto_id");
    await queryRunner.dropColumn("gastos_categorias", "gasto_id");
    await queryRunner.dropForeignKey("gastos_categorias", "categoria_id");
    await queryRunner.dropColumn("gastos_categorias", "categoria_id");
    await queryRunner.dropTable("gastos_categorias");
  }
}
