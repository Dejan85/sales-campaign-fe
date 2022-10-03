import { CampaignsI } from 'queries/campaigns/types'
import { OrdersI } from 'queries/orders/types'

export const useTableUtils = (columns: string[], data: CampaignsI[] | OrdersI[]) => {
	const columnNumber = columns.length

	data?.forEach((object: any) => {
		for (const key in object) {
			switch (key) {
				case '_id':
					columns.push(object[key])
					break
				case 'expireDate':
					const date = new Date(object[key])
					columns.push(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)
					break
				case 'name':
					columns.push(`${object[key]}`)
					break
				case 'activity':
					columns.push(`${object[key]}`)
					break
				case 'slug':
					columns.push(`${object[key]}`)
					break
				case 'email':
					columns.push(`${object[key]}`)
					break
				case 'quantity':
					columns.push(`${object[key]}`)
					break
				case 'phone':
					columns.push(`${object[key]}`)
					break
				default:
					break;
			}
		}
	})

	return {
		tableData: columns,
		columnNumber
	}
}
