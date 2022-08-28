import { CampaignsI } from 'queries/campaigns/types'
import { OrdersI } from 'queries/orders/types'

export const useTableUtils = (columns: string[], data: CampaignsI[] | OrdersI[]) => {
	const columnNumber = columns.length

	data?.forEach((object: any) => {
		for (const key in object) {
			if (key === 'id') {
				columns.push(object[key])
			} else {
				columns.push(`${object[key]}`)
			}
		}
	})

	return {
		tableData: columns,
		columnNumber
	}
}
