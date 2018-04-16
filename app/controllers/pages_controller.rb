class PagesController < ApplicationController
  def index
    @categories = Openfoodfacts::Category.all(locale: 'fr').first(10).pluck(:name)
    @category_name = Openfoodfacts::Category.all(locale: 'fr').first.name

    @products_from_category = Openfoodfacts::Product.search(@category_name, locale: 'fr', page_size: 1).first(10)

    code = @products_from_category.first._id
    @product = Openfoodfacts::Product.get(code, locale: 'fr')
    @product_name = @product.product_name
    @product_nutriments = @product.nutriments

    #@additives = Openfoodfacts::Additive.all(locale: 'fr').first(10).pluck(:name)

    #@palm = Openfoodfacts::IngredientThatMayBeFromPalmOil.all(locale: 'fr').first(10).pluck(:name)
  end
end
