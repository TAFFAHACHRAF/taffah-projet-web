const { client } = require("../../../prisma/client");

class CreateCategorieUseCase {
  async execute(nom) {
    const categorieAlreadyExists = await client.categorie.findFirst({
      where: {
        nom,
      },
    });
    if (categorieAlreadyExists) throw new Error("Categorie Already Exists");

    const createCategorie = await client.categorie.create({
      data: {
        nom,
      },
    });

    return createCategorie;
  }
}

module.exports = { CreateCategorieUseCase };
