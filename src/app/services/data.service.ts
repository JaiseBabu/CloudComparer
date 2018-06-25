import { Injectable } from '@angular/core';
import { Http, ResponseContentType  } from '@angular/http';
import 'rxjs/add/operator/map';
import * as XLSX from 'xlsx';

declare let alasql

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected');
  }

  getCloudComparer(){
	  console.log(" get Cloud Comparer called ");

/*    alasql('SELECT RECORDSET * FROM XLSX("datasource/CloudComparer.xlsx",{headers:true})',[],function(res){
        console.log(" >>>>>>>>>>>>>>>>>> "+JSON.stringify(res));
    });*/

/* alasql.options.modifier = 'RECORDSET';
    alasql('SELECT * FROM XLSX("datasource/CloudComparer.xlsx",{headers:true})',[],function(res){
        console.log(">>>>>>>"+JSON.stringify(res.columns));
    });
*/

       	  return  alasql.promise(['SELECT * FROM XLSX("datasource/CloudComparer.xlsx", {headers:true, sheetid:"Summary"})', 'SELECT * FROM XLSX("datasource/CloudComparer.xlsx", {headers:true, sheetid:"Services"})', 'SELECT * FROM XLSX("datasource/CloudComparer.xlsx", {headers:true, sheetid:"ServiceDetails"}) WHERE Service LIKE "%&%" '])
  }

  getImageConfig(){
	return this.http.get('config/imgConfig.json')
      .map(res => res.json());  

  }

}
