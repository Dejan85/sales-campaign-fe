import { Layout } from 'components/ui/layouts/layout'
import { globalStyles } from 'components/ui/styles/global-style/GlobalStyle'
import { NavProvider } from 'context/dashboard/nav/navContext'
import type { AppProps } from 'next/app'
import { useRef } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const App = ({ Component, pageProps }: AppProps) => {
	const queryClient = useRef(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					notifyOnChangeProps: 'tracked',
					staleTime: 60000
				}
			}
		})
	)

	return (
		<QueryClientProvider client={queryClient.current}>
			<Hydrate state={pageProps.dehydratedState}>
				<NavProvider>
					<Layout>
						{globalStyles}
						<Component {...pageProps} />
					</Layout>
				</NavProvider>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	)
}

export default App
