import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.sass'
})
export class UpdateFormComponent implements OnInit {
  
  selectedId: string = ""
  students: Student[] = []
  student: Student = new Student()

  constructor(public service: StudentService) { }

  ngOnInit(): void {
    this.students = this.service.getAll()
  }

  load(): void {
    const s = this.service.getById(this.selectedId)!
    this.student = new Student(s.id, s.name, s.email)
  }

  update(): void {
    this.service.updateEmail(this.student.id, this.student.email)
  }
}
