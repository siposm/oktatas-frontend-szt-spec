import { TestBed } from "@angular/core/testing"
import { StudentService } from "./student.service"
import { Student } from "../models/student"

describe("StudentService", () => {
  let service: StudentService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(StudentService);    
    // seedelt tömb felülírása fake adatokkal
    (service as any).students = [
      new Student("f1", "Fake User", "fake@user.com"),
      new Student("f2", "Fake John", "fake@testcom"),
      new Student("f3", "Fake Jane", "faketest.com"),
      new Student("f4", "Fake Hamil", "hamil@test.com")
    ]
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })

  it("should return student by id", () => {
    const student = service.getById("f1")
    expect(student).toBeDefined()
    expect(student?.name).toBe("Fake User")
    expect(student?.email).toBe("fake@user.com")
  })

  it("should validate email format for true", () => {
    const student = service.getById("f1")
    const result = service.isValidEmail(student?.email!)
    expect(result).toBeTrue()
  })

  it("should validate email format for false", () => {
    const student1 = service.getById("f2")
    const student2 = service.getById("f3")
    expect(service.isValidEmail(student1?.email!)).toBeFalse()
    expect(service.isValidEmail(student2?.email!)).toBeFalse()
  })

  it("should update email if valid", () => {
    // ARRANGE
    const id = "f1"

    // ACT
    service.updateEmail(id, "alice.new@gmail.com")
    const stud = service.getById(id)

    // ASSERT
    expect(stud?.email).toBe("alice.new@gmail.com")
  })

  it("should throw error if email is invalid", () => {
    expect(() => service.updateEmail("f3", "invalid-email")).toThrowError("Invalid email")
  })
})
