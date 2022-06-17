// item.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'event' })
export class Event extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  notes: string;

  @Column({ type: 'varchar', length: 300 })
  rawText: string;

  @Column({ type: 'varchar', length: 300 })
  category: string;

  @Column({ type: 'varchar', length: 300 })
  link: string;

  @Column({ type: 'timestamptz' })
  createDateTime: Date;
}
