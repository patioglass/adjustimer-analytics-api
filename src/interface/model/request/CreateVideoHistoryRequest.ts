import { TypedRequestBody } from "./BaseRequest"

interface Params {
    video_title: string
    video_service_type: number
    video_url: string
    user_id: string
}

export type CreateVideoHistoryRequestBody = TypedRequestBody<Params>

export class CreateVideoHistoryRequest {
    private _videoTitle: string
    /**
     * @description サイト種別
     * 0:Amazon Prime Video
     * 1:Tver
     * 2:Youtube
     * 3:dアニメストア
     * 4:Netflix
     * 5:ニコニコ動画
     * 6:Twitch
     */
    private _videoServiceType: number
    private _videoUrl: string
    private _userId: string

    constructor(params: Params) {
        this._videoTitle = params.video_title
        this._videoServiceType = params.video_service_type
        this._videoUrl = params.video_url
        this._userId = params.user_id
    }

    public validate(): boolean {
        if (!this._videoTitle) {
            return false;
        }
        if (this._videoServiceType > 6 || this._videoServiceType < 0) {
            return false;
        }
        if (!this._videoUrl || !this._videoUrl.match(/^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/)) {
            return false;
        }
        return true
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

    get userId(): string {
        return this._userId
    }
}