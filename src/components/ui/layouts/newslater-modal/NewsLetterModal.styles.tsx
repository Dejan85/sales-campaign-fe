import styled from '@emotion/styled'

export const ModalContainer = styled.div`
	position: sticky;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	width: 100vw;
	height: 100vh;
	background: rgba(23, 22, 21, 0.5);
	top: 0;
	left: 0;
`
export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
	background-color: white;
	max-width: 400px;
	width: 100%;
	/* height: 150px; */
	padding: var(--pd-20);
	border-radius: 20px;
`
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
