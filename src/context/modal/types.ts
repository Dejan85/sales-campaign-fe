export interface PayloadI {
	deleteHandler?: (id: number) => Promise<void>
	message?: string
	id?: number | null
}

export interface InitialStateI extends PayloadI {
	toggleModal: boolean
}

export interface ActionI {
	type: string
	payload: PayloadI
}

export interface ModalActionReturnI {
	state: InitialStateI
	toggleModalAction: ({ deleteHandler, id, message }: PayloadI) => void
}
