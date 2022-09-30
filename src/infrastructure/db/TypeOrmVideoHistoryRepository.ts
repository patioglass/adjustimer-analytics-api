import { VideoHistory } from "../../domain/model/VideoHistory";
import { VideoHistoryRepository } from "../../domain/repository/VideoHistoryRepository";
import { TypeOrmConnection } from "./TypeOrmConnection";

export class TypeOrmVideoHistoryRepository implements VideoHistoryRepository {
    constructor(
        private typeOrmConnection: TypeOrmConnection
    ) {
    }

    async findAll(): Promise<VideoHistory[]> {
        const typeorm = this.typeOrmConnection.dataSource.getRepository(VideoHistory)
        const histories = await typeorm.find()
        return histories
    }

    async save(videoHistory: VideoHistory): Promise<VideoHistory> {
        const typeorm = this.typeOrmConnection.dataSource.getRepository(VideoHistory)
        const newHistory = await typeorm.save(videoHistory)
        return newHistory
    }
}

export default TypeOrmVideoHistoryRepository;