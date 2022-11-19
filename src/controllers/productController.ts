import { Request, Response } from 'express';
import * as ProductService from '../services/productService';

export const registerProducts = async (req: Request, res: Response) => {
  if(req.body.name && req.body.price && req.body.inventory && req.body.description) {
    let {name, price, inventory, description} = req.body
    let newProduct = await ProductService.createdProduct(name, price, inventory, description)

    if(newProduct instanceof Error) {
      res.json({ error: newProduct.message });
      return;
    } else {
      res.status(201);
      res.json({ id: newProduct.id });
      return;
    }
  }
  res.json({ error: 'Dados não enviados.' });
};

export const productList = async (req: Request, res: Response) => {
  let products = await ProductService.listedProducts()
  res.json({ products })
};

export const listById = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id)
  let products = await ProductService.listedById(id)
  res.json({ products })
};

export const changeProducts = async (req: Request, res: Response) => {
  let id = parseInt( req.params.id )
  if(req.body.name && req.body.price && req.body.inventory && req.body.description) {
    let {name, price, inventory, description} = req.body
    let newProduct = await ProductService.alteredProducts(id, name, price, inventory, description)

    if(newProduct instanceof Error) {
      res.json({ error: newProduct.message });
      return;
    } else {
      res.json({ id: newProduct.id });
      return;
    }
  }
  res.json({ error: 'Dados não enviados.' });
};

export const deleteProduct = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id)
  await ProductService.deletedProduct(id)
  res.json({ user: true })
};

