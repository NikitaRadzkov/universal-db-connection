import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Photo } from './photo';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, photo => photo.author) // note: we will create author property in the Photo class below
  photos: Photo[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
