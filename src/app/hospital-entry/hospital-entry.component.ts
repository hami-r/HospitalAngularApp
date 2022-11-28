import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-entry',
  templateUrl: './hospital-entry.component.html',
  styleUrls: ['./hospital-entry.component.css']
})
export class HospitalEntryComponent {

  name = ""
  patientId = ""
  address = ""
  contactNo = ""
  dateOfAppointment = ""
  patientImage = ""
  doctorName = ""

  readValues = () => {
    let data:any = {
      "name":this.name,
      "patientId":this.patientId,
      "address":this.address,
      "contactNo":this.contactNo,
      "dateOfAppointment":this.dateOfAppointment,
      "patientImage":this.patientImage,
      "docotrName":this.doctorName
    }

    console.log(data);
    
  }
}
