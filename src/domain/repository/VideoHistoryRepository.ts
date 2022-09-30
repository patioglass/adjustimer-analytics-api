import { VideoHistory } from "../model/VideoHistory";

export abstract class VideoHistoryRepository {
    abstract findAll(): Promise<VideoHistory[]>
    abstract save(videoHistory: VideoHistory): Promise<VideoHistory>
}