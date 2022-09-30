import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('videoHistory')
export class VideoHistory {
    @PrimaryGeneratedColumn()
    private video_history_id: number | undefined
    @Column('varchar', { name: 'video_title' })
    private video_title: string
    @Column('int', { name: 'video_service_type' })
    private video_service_type: number
    @Column('varchar', { name: 'video_url' })
    private video_url: string
    @Column('varchar', { name: 'user_id' })
    private user_id: string
    @Column('datetime', {  name: 'create_date'})
    private create_date: Date | undefined

    constructor(title: string, videoServiceType: number, url: string, userId: string, createDate: Date) {
        this.video_title = title
        this.video_service_type = videoServiceType
        this.video_url = url
        this.user_id = userId
        this.create_date = createDate
    }

    get videoTitle(): string {
        return this.video_title
    }

    get videoServiceType(): number {
        return this.video_service_type
    }

    get videoUrl(): string {
        return this.video_url
    }

    get userId(): string {
        return this.user_id
    }
}