import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class BrandRepository {
	async brands() {
		try {
			const { data } = await axios.get('http://localhost:3000/api/brands')
			return data
		} catch(error) {
			return []
		}
	}
}