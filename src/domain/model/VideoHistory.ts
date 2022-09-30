import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('videoHistory')
export class VideoHistory {
    @PrimaryGeneratedColumn()
    private _videoHistoryId: number | undefined
    @Column('varchar', { name: 'video_title' })
    private _videoTitle: string
    @Column('int', { name: 'video_service_type' })
    private _videoServiceType: number
    @Column('varchar', { name: 'video_url' })
    private _videoUrl: string
    @Column('varchar', { name: 'video_url_unique' })
    private _videoUrlUnique: string
    @Column('varchar', { name: 'user_id' })
    private _userId: string
    @Column('date', {  name: 'create_date'})
    private _createDate: Date | undefined

    constructor(title: string, videoServiceType: number, url: string, urlUnique: string, userId: string, createDate: Date) {
        this._videoTitle = title
        this._videoServiceType = videoServiceType
        this._videoUrl = url
        this._videoUrlUnique = urlUnique
        this._userId = userId
        this._createDate = createDate
    }

    get videoTitle(): string {
        return this._videoTitle
    }

    get videoServiceType(): number {
        return this._videoServiceType
    }

    get videoUrl(): string {
        return this._videoUrl
    }

    get videoUrlUnique(): string {
        return this.videoUrlUnique
    }

    get userId(): string {
        return this._userId
    }
}