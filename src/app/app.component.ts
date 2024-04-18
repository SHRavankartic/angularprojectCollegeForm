import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddbuttonDataComponent } from './addbutton-data/addbutton-data.component';
import { RegistrationService } from './services/registration.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'project1';

  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'number',
    'dob',
    'gender',
    'courses',
    'remarks',
    'action'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private var1: MatDialog, private regformservice: RegistrationService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getFormData();
  }

  openadddataform() {
    const dref = this.var1.open(AddbuttonDataComponent);
    dref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFormData();
        }
      }
    })
  }

  getFormData() {
    this.regformservice.getFormData().subscribe({
      next: (dataform) => {
        this.dataSource = new MatTableDataSource(dataform);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteRegistrationForm(id: string) {
    this.regformservice.deleteFormData(id).subscribe({
      next: (val) => {
        alert('Info deleted');
        this.getFormData();
      },
    })
  }

  editadddataform(data: any) {
    const dref = this.var1.open(AddbuttonDataComponent, {
      data,
    })
    dref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFormData();
        }
      }
    })
  }
}
