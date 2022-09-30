import { TypeOrmVideoHistoryRepository } from "../../infrastructure/db/TypeOrmVideoHistoryRepository"
import { VideoHistoryRepository } from "../../domain/repository/VideoHistoryRepository"
import { VideoHistorySerive } from '../../domain/service/VideoHistorySerive';
import { CreateVideoHistoryRequest, CreateVideoHistoryRequestBody } from '../model/request/CreateVideoHistoryRequest';
import { CreateVideoHistoryResponse, VideoHistorySerializer } from '../model/response/VideoHistoryResponse'
import { VideoHistory } from "../../domain/model/VideoHistory";
import { TypeOrmConnection } from "../../infrastructure/db/TypeOrmConnection";
import { BadRequestException } from "../../exception/HttpErrorException";

class VideoHistoryController {
    private videoHistoryRepository: VideoHistoryRepository
    private videoHistorySerializer: VideoHistorySerializer

    constructor(typeOrmConnection: TypeOrmConnection) {
        this.videoHistoryRepository = new TypeOrmVideoHistoryRepository(typeOrmConnection)
        this.videoHistorySerializer = new VideoHistorySerializer()
    }

    public async createVideoHistory(
        req: CreateVideoHistoryRequestBody,
    ): Promise<CreateVideoHistoryResponse> {
        try {
            const reqBody = new CreateVideoHistoryRequest(req.body)
            if (reqBody.validate()) {
                const videoHistoryService = new VideoHistorySerive(this.videoHistoryRepository)
                const newVideoHistory = new VideoHistory(
                    reqBody.videoTitle,
                    reqBody.videoServiceType,
                    reqBody.videoUrl,
                    reqBody.videoUrlUnique,
                    reqBody.userId,
                    new Date()
                )
                const result = await videoHistoryService.createVideoHistory(newVideoHistory)
                return this.videoHistorySerializer.videoHistory(result)
            } else {
                throw BadRequestException()
            }

        } catch (error: any) {
            return this.videoHistorySerializer.error(error)
        }
    }
}

export { VideoHistoryController };