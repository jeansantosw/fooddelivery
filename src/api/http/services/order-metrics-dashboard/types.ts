export interface IGetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export interface IGetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export interface IGetMonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export interface IGetMonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}
