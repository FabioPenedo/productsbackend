import { ProductData } from '../models/Products';

export const createdProduct = async (name: string, price: number, inventory: number, description: string) => {
  const hasProduct = await ProductData.findOne({where: { name }});
  if(!hasProduct) {
    const newProduct = await ProductData.create({name, price, inventory, description});
    return newProduct
  } else {
    return new Error('Produto ja existe!');
  }
};

export const listedProducts =  async () => {
  return ProductData.findAll();
};

export const alteredProducts = async (id: number, name: string, price: number, inventory: number, description: string) => {
  const hasProduct = await ProductData.findAll({where: { id }}) 
  if(hasProduct.length > 0) {
    let product = hasProduct[0]
      product.name = name
      product.price = price
      product.inventory = inventory
      product.description = description
      return await product.save()
  } else {
    return new Error('Produto não existe!')
  }
};

export const deletedProduct = async (id: number) => {
  return await ProductData.destroy({where: { id }});   
};