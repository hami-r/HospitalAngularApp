import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {
  patientId = ""

  searchPatient = () => {
    let data:any = {
      "patientId":this.patientId
    }
    console.log(data);
    
  }
}
