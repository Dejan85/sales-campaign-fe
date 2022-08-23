import axios, { AxiosRequestConfig } from 'axios/index'
import { CreateFormI } from 'components/frontend/form/dashboard/create-form/types'
import { IncomingHttpHeaders } from 'http2'

const axiosClient: any = axios.create()

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST

axiosClient.defaults.headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': true
}

//All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000
axiosClient.defaults.withCredentials = true

interface GetI {
	route: string
	params?: object
	headers?: IncomingHttpHeaders
	needsAuth?: boolean
}

interface PutI {
	route: string
	data: object
	headers: IncomingHttpHeaders
	config: object
}

interface PatchI {
	route: string
	data: object
	headers: IncomingHttpHeaders
	config: object
}

interface PostI {
	route: string
	data?: CreateFormI
	headers?: IncomingHttpHeaders
	config?: any
	needsAuth?: boolean
	resetJwtToken?: string
}

interface DeleteI {
	route: string
	params: object
	headers: IncomingHttpHeaders
	data: object
}

export class FetchWrapper {
	static async get({ route, params = {}, headers = {}, needsAuth = false }: GetI) {
		if (needsAuth) {
			headers['jwt'] = `${localStorage.authToken}`
		}

		try {
			const res = await axiosClient.get(route, {
				params: params,
				headers: {
					...headers
				}
			})

			return res.data.data
		} catch (err) {
			console.log('test err', err)
		}
	}

	static put({ route, data = {}, headers = {}, config = {} }: PutI) {
		let finalConfig = {
			...config,
			headers: {
				...headers,
				// Authorization: `Bearer ${localStorage.authToken}`
				jwt: `${localStorage.authToken}`
			}
		}

		return axiosClient.put(route, data, finalConfig)
	}

	static patch({ route, data = {}, headers = {}, config = {} }: PatchI) {
		let finalConfig = {
			...config,
			headers: {
				...headers,
				Authorization: `Bearer ${localStorage.authToken}`
			}
		}

		return axiosClient.patch(route, data, finalConfig)
	}

	static post({ route, data, headers = {}, config = {}, needsAuth = false, resetJwtToken }: PostI) {
		config = {
			...config,
			headers: {
				...headers
			}
		}
		if (needsAuth) {
			config = {
				...config,
				headers: {
					...headers,
					jwt: resetJwtToken ? `${resetJwtToken}` : `${localStorage.authToken}`
				}
			}
		}
		return axiosClient.post(route, data, config)
	}

	static delete({ route, params = {}, headers = {}, data = {} }: DeleteI) {
		return axiosClient.delete(route, {
			params: params,
			data: data,

			headers: {
				...headers,
				jwt: `${localStorage.authToken}`
			}
		})
	}
}
