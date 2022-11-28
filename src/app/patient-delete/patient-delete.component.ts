import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
  
  patientId = ""

  deletePatient = () => {
    let data:any = {
      "patientId":this.patientId
    }
    console.log(data);
    
  }
}
