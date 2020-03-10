import { useState } from 'react';

export const useLocalStorage = (key, value) => {
	try {
		let item = window.localStorage.getItem(key);
		if (item) {
			return item;
		} else {
			let element = window.localStorage.setItem(key, value);
			return element
		}
	} catch (e) {
		console.log(e.message)
	}

}