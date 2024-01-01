import { CsvLoaderService } from './../../csv-loader.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from './CSVModel';
import { SharedDataService } from '../../ShareData.service';


@Component({
  selector: 'app-product_list',
  templateUrl: './product_list.component.html',
  styleUrls: ['./product_list.component.css']
})
export class Product_listComponent implements OnInit {
  public csvData: any[] = [];
  public productCount: number = 0;

  constructor(
    private csvLoaderService: CsvLoaderService,
    private sharedDataService: SharedDataService
    ) { }

  ngOnInit() {
    this.loadCsvData();
  }

  loadCsvData() {
    const csvUrl = 'assets/product.csv';
    this.csvLoaderService.loadCSV(csvUrl)
      .then(data => {
      console.log('CSV Data:', data); // Check the parsed data
      this.countProduct(data)
      this.csvData = data
      }
    )
      .catch(error => console.error(error));
      console.log('hello world');

  }
  countProduct(data: any[]) {
    console.log(data.filter(row => row['prodgroup3']).length);
    this.productCount = data.filter(row => row['prodgroup3']).length;
    console.log('hello world');
    console.log('Product Count:', this.productCount);
    this.sharedDataService.updateProductCount(this.productCount);
    console.log('Product Count:', this.productCount);
  }

  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.module = curruntRecord[0].trim();
        csvRecord.product_code = curruntRecord[1].trim();
        csvRecord.prodgroup3 = curruntRecord[2].trim();
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }
}



