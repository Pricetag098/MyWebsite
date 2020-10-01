import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../assignments.service'
import { Assignment } from '../assignment'
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  
  assignments: Assignment[] 
  

  constructor(private aService: AssignmentsService ) { }

  ngOnInit(): void {
    this.assignments = this.aService.getAssignment()
  }
  
}
