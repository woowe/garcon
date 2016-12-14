export interface ITable {
  type: string,
  attributes: any
}


export interface IFloor {
  tables: ITable[]
}
