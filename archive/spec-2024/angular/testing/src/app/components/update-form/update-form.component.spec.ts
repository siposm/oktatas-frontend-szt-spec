import { ComponentFixture, TestBed } from "@angular/core/testing"
import { UpdateFormComponent } from "./update-form.component"
import { StudentService } from "../../services/student.service"
import { Student } from "../../models/student"
import { FormsModule } from "@angular/forms"
import { By } from "@angular/platform-browser"

describe("UpdateFormComponent", () => {
  let component: UpdateFormComponent
  let fixture: ComponentFixture<UpdateFormComponent>
  let serviceSpy: jasmine.SpyObj<StudentService>

  beforeEach(async () => {
    serviceSpy = jasmine.createSpyObj<StudentService>("StudentService", [
      "getAll", "getById"
    ])

    await TestBed.configureTestingModule({
      declarations: [UpdateFormComponent],
      imports: [FormsModule],
      providers: [{ provide: StudentService, useValue: serviceSpy }]
    }).compileComponents()

    // Alap fake adatok a listához
    serviceSpy.getAll.and.returnValue([
      new Student("1", "Test User", "test@test.com"),
      new Student("2", "Demo User", "demo@test.com"),
    ])

    fixture = TestBed.createComponent(UpdateFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges() // ngOnInit -> getAll()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should load students on init and render options", () => {
    expect(serviceSpy.getAll).toHaveBeenCalledTimes(1)
    // Az első option a placeholder, utána jönnek a diákok
    const options = fixture.debugElement.queryAll(By.css("select option"))
    // 1 (placeholder) + 2 (diák)
    expect(options.length).toBe(3)
    expect(options[1].nativeElement.textContent).toContain("Test User")
    expect(options[2].nativeElement.textContent).toContain("Demo User")
  })

  it("should load selected student via load() and show details", async () => {
    const picked = new Student("2", "Demo User", "demo@test.com");
    serviceSpy.getById.and.returnValue(picked);

    component.selectedId = "2";
    component.load();
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    expect(serviceSpy.getById).toHaveBeenCalledWith("2");

    // nem ugyanaz a referencia, de az adatok egyeznek
    expect(component.student).not.toBe(picked);
    expect(component.student).toEqual(jasmine.objectContaining({
      id: "2",
      name: "Demo User",
      email: "demo@test.com"
    }));

    const inputs = fixture.debugElement.queryAll(By.css("div input"));
    expect(inputs.length).toBe(3);

    const [idInput, nameInput, emailInput] =
      inputs.map(i => i.nativeElement as HTMLInputElement);

    expect(idInput.value).toBe("2");
    expect(nameInput.value).toBe("Demo User");
    expect(emailInput.value).toBe("demo@test.com");
  });

})
