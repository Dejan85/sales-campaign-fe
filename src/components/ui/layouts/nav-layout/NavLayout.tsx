import { Nav } from 'components/ui/styles/nav'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export enum NavEnum {
	campaigns = 'campaigns',
	orders = 'orders',
	followers = 'followers'
}

export const NavLayout: NextPage = (): JSX.Element => {
	const { route } = useRouter()

	return (
		<Nav theme="primary">
			<Link href="/dashboard/campaigns">
				<Paragraph
					style={{
						background: route.search(NavEnum.campaigns) !== -1 ? 'var(--secondary-color)' : 'var(--primary-color)'
					}}
					theme="nav"
				>
					{NavEnum.campaigns}
				</Paragraph>
			</Link>

			<Link href="/dashboard/orders">
				<Paragraph
					style={{
						background: route.search(NavEnum.orders) !== -1 ? 'var(--secondary-color)' : 'var(--primary-color)'
					}}
					theme="nav"
				>
					{NavEnum.orders}
				</Paragraph>
			</Link>

			<Link href="/dashboard/followers">
				<Paragraph
					style={{
						background: route.search(NavEnum.followers) !== -1 ? 'var(--secondary-color)' : 'var(--primary-color)'
					}}
					theme="nav"
				>
					{NavEnum.followers}
				</Paragraph>
			</Link>
		</Nav>
	)
}
