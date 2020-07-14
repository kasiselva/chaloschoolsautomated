import { Component, OnInit,ViewChild,ChangeDetectorRef  } from '@angular/core';
import { CommonService } from '../services/common.sevice';
import { FieldMaster } from '../model/index';
import { AlertService } from '../services/alert.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-field-master',
  templateUrl: './field-master.component.html',
  styleUrls: ['./field-master.component.scss']
})
export class FieldMasterComponent implements OnInit {
  fieldmasterlist = [];
  controlsdatalist = [];
  fieldmaster = new FieldMaster();
  ismodelShow = true;
  popupHeader = "";
  
  displayedColumns: string[] = ['id','fieldid', 'fieldname', 'type','symbol'];
  
    
 dataSource = new MatTableDataSource();
 @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

 setDataSourceAttributes() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  constructor(private commonService: CommonService,private alertService: AlertService,private cdr: ChangeDetectorRef) { 
    let color: string = "";
  }

  ngOnInit() {
    this.fetchData();
  } 

  fetchData = function() {
    let arraylist = [];
    let count  = 49;
    let increment = 5;
    let dividor = count/5;

    for (let i = 1; i < count; i++) {
      if(i%5==0)
      {
        arraylist.push(increment);
        increment = increment + 5;
      }
      };
   console.dir(arraylist);
    this.getFieldMaster();
    this.getControls();
  }

  getFieldMaster = function() {
    this.commonService.getFieldMasterList().subscribe(res => {
      if(res!=null && res!= undefined && res.length>0)
        this.fieldmasterlist = res;
        this.dataSource = new MatTableDataSource(this.fieldmasterlist);
        setTimeout(() => this.dataSource.sort = this.sort);
        setTimeout(() => this.dataSource.paginator = this.paginator);
    }); 
  }

  getControls = function() {
    this.commonService.getControlsDataList().subscribe(res => {
      if(res!=null && res!= undefined && res.length>0)
        this.controlsdatalist = res;
    });
  }
  addfieldmaster = function() {
    this.popupHeader =  "ADD FIELD MASTER";
    this.clearData();
    this.ismodelShow=false;
  }
  editfieldmaster = function(item) {
    this.popupHeader =  "EDIT FIELD MASTER";
    this.ismodelShow=false;
    this.fieldmaster = item;
  }

  clearData = function() {
    this.fieldmaster = {};
  }
  
  savefieldmaster = function() {
    if(this.fieldmaster.id)
    {
      this.commonService.updateFieldMaster(this.fieldmaster).subscribe(res => {
        this.alertService.success("Successfully Updated");
        this.ismodelShow=true;
        this.getFieldMaster();
      return;
      });
    }
    else{
      this.commonService.addFieldMaster(this.fieldmaster).subscribe(res => {
        this.alertService.success("Successfully Saved");
        this.ismodelShow=true;
        this.getFieldMaster();
      });
    }
  }

  deletemaster = function(id) {
    if(confirm("Are you sure want to delete?")) {
      this.commonService.deleteFieldMaster(id).toPromise()
      .then(() => {
      this.getFieldMaster();
      })
    }
  }
}
export interface PeriodicElement {
  id: number;
  fieldid: string;
  fieldname: string;
  type: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fieldid: 'Hydrogen', fieldname: "LastName", type: 'H'},
  {id: 2, fieldid: 'Helium', fieldname: "FirstName", type: 'He'},
  {id: 3, fieldid: 'Lithium', fieldname: "Sex", type: 'Li'},
  {id: 4, fieldid: 'Beryllium', fieldname: "FirstName", type: 'Be'},
  {id: 5, fieldid: 'Boron', fieldname: "FirstName", type: 'B'},
  {id: 6, fieldid: 'Carbon', fieldname: "FirstName", type: 'C'},
  {id: 7, fieldid: 'Nitrogen', fieldname: "FirstName", type: 'N'},
  {id: 8, fieldid: 'Oxygen', fieldname: "FirstName", type: 'O'},
  {id: 9, fieldid: 'Fluorine', fieldname: "FirstName", type: 'F'},
  {id: 10, fieldid: 'Neon', fieldname: "FirstName", type: 'Ne'},
  {id: 11, fieldid: 'Sodium', fieldname: "FirstName", type: 'Na'},
  {id: 12, fieldid: 'Magnesium', fieldname: "FirstName", type: 'Mg'},
  {id: 13, fieldid: 'Aluminum', fieldname: "FirstName", type: 'Al'},
  {id: 14, fieldid: 'Silicon', fieldname: "FirstName", type: 'Si'},
  {id: 15, fieldid: 'Phosphorus', fieldname: "FirstName", type: 'P'},
  {id: 16, fieldid: 'Sulfur', fieldname: "FirstName", type: 'S'},
  {id: 17, fieldid: 'Chlorine', fieldname: "FirstName", type: 'Cl'},
  {id: 18, fieldid: 'Argon', fieldname: "FirstName", type: 'Ar'},
  {id: 19, fieldid: 'Potassium', fieldname: "FirstName", type: 'K'},
  {id: 20, fieldid: 'Calcium', fieldname: "FirstName", type: 'Ca'},
];