import { getCampaignsBySlug } from 'api/methods'
import { OrdersForm } from 'components/frontend/form/orders'
import { Container } from 'components/ui/styles/container'
import { GetServerSideProps, NextPage } from 'next'
import { CampaignsI } from 'queries/campaigns/types'
import { CampaignsQueryKeys } from 'queries/campaigns/useCampaignsQuery'
import React from 'react'
import { QueryClient } from 'react-query'

const Purchase: NextPage = (): JSX.Element => {
	return (
		<Container theme="secondary">
			<OrdersForm />
		</Container>
	)
}

export default Purchase
