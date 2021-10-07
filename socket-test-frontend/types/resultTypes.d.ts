export enum StatusEnum {
  SUCCESS = "success",
  FAILED = "failed",
}

export interface GenerateCodeData {
  status: StatusEnum.SUCCESS | StatusEnum.FAILED;
  code?: string;
}
