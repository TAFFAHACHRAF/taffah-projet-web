const { client } = require("../../../prisma/client");

class GetCategorieUseCase {
  async execute(id) {
    const categorie = await client.categorie.findFirst({
      where: {
        id,
      },
      include: {
        Articles: {
          include: {
            article: true,
          },
        },
      },
    });
    return categorie;
  }
}
module.exports = { GetCategorieUseCase };
