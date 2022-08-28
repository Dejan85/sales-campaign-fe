import { Table } from 'components/frontend/table'
import { Container } from 'components/ui/styles/container'
import Link from 'next/link'
import { campaignsT } from 'queries/campaigns/types'
import { NoDataMessage } from '../no-data-message'
import { Link as LinkComponent } from 'components/ui/styles/link'

interface CampaignsPageLayoutI {
	campaigns: campaignsT
}

export const CampaignsPageLayout: React.FC<CampaignsPageLayoutI> = ({ campaigns }): JSX.Element => {
	const columns = [
		'Id',
		'Name',
		'Expire date',
		'Activity',
		'Slug',
		'AirSmart price',
		'AirSmart discount',
		'Air iOn white',
		'Air iOn white discount',
		'Air iOn black',
		'Air iOn black discount'
	]

	return (
		<Container theme="flexColumn">
			<Container theme="linkWrapperSecondary">
				<Link href="/dashboard/campaigns/create">
					<LinkComponent theme="primary">Create new campaign</LinkComponent>
				</Link>
			</Container>

			{campaigns ? (
				<Table columns={columns} campaigns={campaigns} />
			) : (
				<NoDataMessage message="There are no campaigns, you have to create them." />
			)}
		</Container>
	)
}
