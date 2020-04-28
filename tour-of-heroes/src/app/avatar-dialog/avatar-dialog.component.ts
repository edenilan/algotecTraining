import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DialogData {
  picUrl: string;
}

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.css']
})
export class AvatarDialogComponent implements OnInit {

  private jsonPath = '../../assets/hero-images.json';

  constructor(public dialogRef: MatDialogRef<AvatarDialogComponent>,
              private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
      return this.http.get(this.jsonPath);
  }


}