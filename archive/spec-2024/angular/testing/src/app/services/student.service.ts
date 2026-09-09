import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = []

  constructor() {
    this.seed()
  }

  private seed(): void {
    this.students.push(new Student("1", "John Doe", "john.doe@gmail.com"))
    this.students.push(new Student("2", "Jane Smith", "jane.smith@gmail.com"))
    this.students.push(new Student("3", "Alice Johnson", "alice.johnson@gmail.com"))
    this.students.push(new Student("4", "Bob Brown", "bob.brown@gmail.com"))
    this.students.push(new Student("5", "Carlos Garcia", "carlos.garcia@gmail.com"))
  }

  getAll(): Student[] {
    return [...this.students]
  }

  getById(id: string): Student | undefined {
    return this.students.find(s => s.id === id)
  }

  updateEmail(id: string, newEmail: string): void { 
    if (!this.isValidEmail(newEmail)) throw new Error("Invalid email")
    const stud = this.getById(id)
    if (!stud) throw new Error("Student not found")
    stud.email = newEmail
  }

  isValidEmail(email: string): boolean {
    return /.+@.+\..+/.test(email)
  }
}
