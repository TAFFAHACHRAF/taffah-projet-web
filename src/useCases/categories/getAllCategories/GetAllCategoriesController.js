const { GetAllCategoriesUseCase } = require("./GetAllCategoriesUseCase");

class GetAllCategoriesController {
  async handle(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { skip, take } = req.query;
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase();
    
    const skipping = skip && parseInt(skip) > 0 ? parseInt(skip) : 0;
    const taking = take && parseInt(take) > 0 ? parseInt(take) : 0;

    var categories = await getAllCategoriesUseCase.execute();

    if (skipping)
      categories = categories.slice(skipping, skipping + categories.length);
    if (taking) categories = categories.slice(0, taking);

    res.json({ categories });
  }
}
module.exports = { GetAllCategoriesController };
