import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor() { }

  public async getData(url:string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch ( error ) {
      console.error(error);
      throw error;
    }
  }

  public async postData(url: string, data: any, headers?: any) {
    console.log("data from api client func",data);
    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
