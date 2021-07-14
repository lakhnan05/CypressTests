export default class Loginmodal {
	static login(username, password) {
		cy.get('#loginusername')
			.click()
			.type(username)
		cy.wait(555)
		cy.get('#loginpassword')
			.click()
			.type(password)
		this.clickOnLogInbutton()
	}

	static clickOnLogInbutton() {
		cy.get("button[onclick='logIn()']").click()
	}

	static clickOnClosebutton() {
		cy.get("#logInModal .modal-footer button[data-dismiss='modal']").click()
	}
}
