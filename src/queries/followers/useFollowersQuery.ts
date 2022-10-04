import { getFollowers } from 'api/methods'
import { useQuery, UseQueryResult } from 'react-query'
import { FollowerI, FollowersQueryReturnI } from './types'

export enum FollowersQueryKeys {
    followers = 'followers',
}

// get all campaigns
export const useCampaignsQuery = (): FollowersQueryReturnI => {
    const { data }: UseQueryResult<FollowerI[]> = useQuery(FollowersQueryKeys.followers, getFollowers)
    return { followers: data }
}

