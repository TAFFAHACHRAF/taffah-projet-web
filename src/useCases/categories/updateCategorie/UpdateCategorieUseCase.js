const { client } = require("../../../prisma/client");

class UpdateCategorieUseCase {
  async execute({ categorie }) {
    const updatedCategorie = await client.categorie.update({
      where: {
        id: categorie.id,
      },
      data: {
        nom: categorie.nom,
      },
    });
    return updatedCategorie;
  }
}
module.exports = { UpdateCategorieUseCase };
