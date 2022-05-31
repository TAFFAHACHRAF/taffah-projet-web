const { client } = require("../../../prisma/client");

class GetAllCategoriesUseCase {
  async execute() {
    const categories = await client.categorie.findMany({
      include: {
        _count: {
          select: { Articles: true },
        },
      },
    });
    return categories;
  }
}
module.exports = { GetAllCategoriesUseCase };
