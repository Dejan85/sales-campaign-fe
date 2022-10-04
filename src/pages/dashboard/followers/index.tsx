import { getFollowers } from 'api/methods'
import { FollowersPageLayout } from 'components/ui/layouts/followers-page-layout/FollowersPageLayout'
import { GetServerSideProps, NextPage } from 'next'
import { FollowerI } from 'queries/followers/types'
import { FollowersQueryKeys, useCampaignsQuery } from 'queries/followers/useFollowersQuery'
import { dehydrate, QueryClient } from 'react-query'

const Followers: NextPage = (): JSX.Element => {
	const { followers } = useCampaignsQuery()
	return <FollowersPageLayout followers={followers} />
}

export default Followers

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient: QueryClient = new QueryClient()
	await queryClient.prefetchQuery<FollowerI[]>(FollowersQueryKeys.followers, getFollowers)

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
		}
	}
}
