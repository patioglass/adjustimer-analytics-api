import { Request, Response } from 'express';

const BAD_REQUEST_STATUS_CODE: number = 400

class HttpErrorException extends Error {
    statusCode?: number
    message: string

    constructor(statusCode: number, message: string) {
        super(message)
        this.statusCode = statusCode || 500
        this.message = message
    }
}

export const BadRequestException = (message = '400 bad reqeust'): HttpErrorException => {
    return new HttpErrorException(BAD_REQUEST_STATUS_CODE, message)
}

export default function errorHandler(
    error: HttpErrorException,
    reqeust: Request,
    response: Response
): void {
    response.status(error.statusCode || 500).send(error.message)
}