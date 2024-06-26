import { IsInt, IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;
    @IsInt()
    quantity: number;
}
