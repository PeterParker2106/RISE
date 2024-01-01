// csv-loader.service.ts
import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvLoaderService {

  constructor() { }

  public loadCSV(fileUrl: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      Papa.parse(fileUrl, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }
}
