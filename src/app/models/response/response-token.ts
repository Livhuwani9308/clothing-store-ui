export interface IResponseToken<T> {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: T;
    token: string | null;
};