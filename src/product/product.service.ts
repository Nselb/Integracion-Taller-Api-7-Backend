import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const createdProduct = this.productRepository.create(createProductDto);
    return await this.productRepository.save(createdProduct);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productRepository.preload({
      id,
      ...updateProductDto,
    });
    return await this.productRepository.save(updatedProduct);
  }

  async purchase(id: number) {
    const product = await this.findOne(id);
    if (product) {
      if (product.quantity === 0) {
        throw new BadRequestException('Product out of stock');
      }
    }
    const updatedProduct = await this.productRepository.preload({
      id,
      quantity: --product.quantity,
    });
    return await this.productRepository.save(updatedProduct);
  }

  async remove(id: number) {
    const productToDelete = await this.findOne(id);
    return await this.productRepository.remove(productToDelete);
  }
}
