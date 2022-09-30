import { VideoHistory } from "../model/VideoHistory";

export abstract class VideoHistoryRepository {
    abstract save(videoHistory: VideoHistory): Promise<VideoHistory>
}