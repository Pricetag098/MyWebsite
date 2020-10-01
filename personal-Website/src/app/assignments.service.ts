import { Injectable } from '@angular/core';
import { Assignment } from './assignment';
import { Assignments } from './assignmentsList';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor() { }

  public getAssignment(): Assignment[]{
    
    return Assignments.sort((a,b) => (+(a.dueDate.split("/",2)[1]) - +(b.dueDate.split("/",2)[1]))) 
  }
}
