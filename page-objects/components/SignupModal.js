export default class SignupModal {
	static signUp(username, password) {
		cy.get('#sign-username')
			.click()
			.type(username)
		cy.wait(555)
		cy.get('#sign-password')
			.click()
			.type(password)
		this.clickOnSignUpbutton()
	}

	static enterSignUpUsername(username) {
		cy.get('#sign-username').type(username)
	}

	static enterSignUpPassword(password) {
		cy.get('#sign-password').type(password)
	}

	static clickOnSignUpbutton() {
		cy.get("button[onclick='register()']").click()
	}

	static clickOnClosebutton() {
		cy.get("#signInModal .modal-footer button[data-dismiss='modal']").click()
	}
}
