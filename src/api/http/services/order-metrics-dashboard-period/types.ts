export type TGetDailyRevenuePeriodResponse = {
  date: string
  receipt: number
}[]


export interface IGetDailyRevenuePeriodParams  {
  from?: Date
  to?: Date
}