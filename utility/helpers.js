export function randomUserId() {
	var text = ''
	var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	for (var i = 0; i < 10; i++)
		text += letters.charAt(Math.floor(Math.random() * letters.length))

	return text
}

export function randomPassword() {
	var text = ''
	var letters = '0123456789'

	for (var i = 0; i < 10; i++)
		text += letters.charAt(Math.floor(Math.random() * letters.length))

	return text
}
