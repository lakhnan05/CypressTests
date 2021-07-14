export default class ContactModal {
	static inputEmail(email) {
		cy.get('#recipient-email').type(email)
	}

	static inputName(name) {
		cy.get('#recipient-name').type(name)
	}

	static inputMessage(message) {
		cy.get('#message-text').type(message)
	}

	static clickOnClose() {
		cy.get("#exampleModal .modal-footer button[data-dismiss='modal']").click()
	}

	static clickOnSendMessage() {
		cy.get("button[onclick='send()']").click()
	}
}
