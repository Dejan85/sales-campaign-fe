import { CampaignsI } from 'queries/campaigns/types'
import { OrdersI } from 'queries/orders/types'

export const useTableUtils = (limitObjectKey: string, data: CampaignsI[] | OrdersI[]) => {
	const columns: string[] = []
	data?.forEach(item => Object.keys(item).forEach(key => columns.push(key)))
	const tableData = columns.splice(0, [...new Set(columns)].indexOf(limitObjectKey) + 1)
	const columnNumber = tableData.length // limiter for table columns in header
	data?.forEach((object: any) => {
		for (const key in object) {
			const tableDataObjectKey = tableData[tableData.indexOf(key)]
			if (tableDataObjectKey) {
				tableData.push(object[tableDataObjectKey])
			}
		}
	})

	return {
		tableData,
		columnNumber
	}
}
