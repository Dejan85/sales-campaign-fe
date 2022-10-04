import { deleteFollower } from 'api/methods'
import { Table } from 'components/frontend/table'
import { Container } from 'components/ui/styles/container'
import { FollowerI } from 'queries/followers/types'
import { FollowersQueryKeys } from 'queries/followers/useFollowersQuery'
import React from 'react'
import { useQueryClient } from 'react-query'
import { NoDataMessage } from '../no-data-message'

interface PropsI {
	followers?: FollowerI[]
}

export const FollowersPageLayout: React.FC<PropsI> = ({ followers }): JSX.Element => {
	const queryClient = useQueryClient()
	const columns = ['id', 'Email']

	const deleteHandler = async (id: string) => {
		try {
			await deleteFollower(id)
			queryClient.refetchQueries(FollowersQueryKeys.followers)
		} catch (error) {
			console.log('test error for delete order', error)
		}
	}

	console.log('test followers', followers)

	return (
		<Container theme="flexColumn">
			{followers?.length ? (
				<Table columns={columns} campaigns={followers} deleteHandler={deleteHandler} />
			) : (
				<NoDataMessage message="There are no orders!" />
			)}
		</Container>
	)
}
