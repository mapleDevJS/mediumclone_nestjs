import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// create table with name 'tags'
@Entity({ name: 'tags' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
