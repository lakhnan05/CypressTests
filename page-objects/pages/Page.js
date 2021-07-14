import { url } from '../../config'
export default class Page {
	static open() {
		cy.visit(url)
	}
}
