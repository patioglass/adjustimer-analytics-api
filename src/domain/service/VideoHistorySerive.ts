import { VideoHistory } from '../model/VideoHistory'
import { VideoHistoryRepository } from '../repository/VideoHistoryRepository'

export class VideoHistorySerive {

    constructor(
        private videoHistoryRepository: VideoHistoryRepository
    ) {}

    createVideoHistory(videoHistory: VideoHistory): Promise<VideoHistory> {
        return this.videoHistoryRepository.save(videoHistory)
    }
}