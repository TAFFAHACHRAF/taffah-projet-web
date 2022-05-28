const { client } = require("../../../prisma/client");

class DeleteCategorieUseCase {
  async execute(categorieId) {
    await client.categoriesOnArticles.deleteMany({
      where: {
        categorieId: categorieId,
      },
    });
    await client.categorie.delete({
      where: {
        id: categorieId,
      },
    });
  }
}
module.exports = { DeleteCategorieUseCase };
