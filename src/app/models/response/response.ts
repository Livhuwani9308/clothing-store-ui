export interface IResponse<T> {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: T;
}