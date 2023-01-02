import { Injectable } from '@angular/core';
import axios from 'axios';
import http from '../../domain/http';

@Injectable()
class AxiosHttp implements http {
	async get<T>(url: string): Promise<T> {
		return (await axios.get(url)).data;
	}
	async post<T>(url: string, body: any): Promise<T> {
		return (await axios.post(url, body)).data;
	}
	async put<T>(url: string, body: any): Promise<T> {
		return (await axios.put(url, body)).data;
	}
	async delete<T>(url: string): Promise<T> {
		return (await axios.delete(url)).data;
	}
}

export default AxiosHttp;
