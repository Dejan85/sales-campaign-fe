import { Layout } from 'components/ui/layouts/layout'
import { globalStyles } from 'components/ui/styles/global-style/GlobalStyle'
import { ModalProvider } from 'context/modal/modalContext'
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
				<ModalProvider>
					<Layout>
						{globalStyles}
						<Component {...pageProps} />
					</Layout>
				</ModalProvider>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	)
}

export default App
