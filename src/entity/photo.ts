import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { Author } from './author';
import { Album } from './album';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @ManyToOne(() => Author, author => author.photos)
  author: Author;

  @ManyToMany(() => Album, album => album.photos)
  albums: Album[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
