import { VideoHistory } from '../../../domain/model/VideoHistory'
import { BaseResponse } from './BaseResponse'

interface VideoHistoryResponse {
    videoTitle: string
    videoServiceType: number
    videoUrl: string
    userId: string
}

export type CreateVideoHistoryResponse = BaseResponse<VideoHistoryResponse>

export class VideoHistorySerializer {
    public videoHistories(videoHistory: VideoHistory[]): CreateVideoHistoryResponse {
        return {
            code: 200,
            data: videoHistory
        }
    }

    public videoHistory(videoHistory: VideoHistory): CreateVideoHistoryResponse {
        return {
            code: 200,
            data: videoHistory
        }
    }

    public error(error: Error): CreateVideoHistoryResponse {
        return {
            code: 500,
            message: error.message
        }
    }
}