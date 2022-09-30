export type BaseResponse<T> =
    | {
        code: 200
        data: T
    }
    | {
        code: 400 | 500
        message?: string
    }