import { Request } from 'express'

interface TypedRequestBody<T> extends Request {
    body: T
}

export { TypedRequestBody }