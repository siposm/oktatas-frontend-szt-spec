import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OrderFormComponent } from "./order-form.component";
import { Product } from "../../models/product";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "../../product.service";

class ProductServiceStub {
  getProducts(): Product[] {
    return [
      { id: "p1", name: "Termék A" },
      { id: "p2", name: "Termék B" },
    ]
  }
}


describe("OrderFormComponent", () => {
  let fixture: ComponentFixture<OrderFormComponent>
  let component: OrderFormComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [OrderFormComponent],
      providers: [{ provide: ProductService, useClass: ProductServiceStub }],
    }).compileComponents()

    fixture = TestBed.createComponent(OrderFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  function setInputValue(selector: string, value: string) {
    const input: HTMLInputElement = fixture.nativeElement.querySelector(selector)
    input.value = value
    input.dispatchEvent(new Event("input"))
    input.dispatchEvent(new Event("blur"))
    fixture.detectChanges()
  }

  function selectOption(selector: string, value: string) {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector(selector)
    select.value = value
    select.dispatchEvent(new Event("change"))
    select.dispatchEvent(new Event("blur"))
    fixture.detectChanges()
  }

  it("létrejön a komponens", () => {
    expect(component).toBeTruthy()
  })

  it("kezdetben a form érvénytelen és a gomb tiltott", () => {
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]')
    expect(component.form.invalid).toBeTrue()
    expect(btn.disabled).toBeTrue()
  })

  it("required validációk: üres mezőknél is-invalid osztály csak touched/blur után jelenik meg", () => {
    const nameInput: HTMLInputElement = fixture.nativeElement.querySelector("#customerName")
    expect(nameInput.classList.contains("is-invalid")).toBeFalse()

    // blur-öljünk rá, hogy touched legyen
    nameInput.dispatchEvent(new Event("blur"))
    fixture.detectChanges()

    expect(component.form.controls.customerName.touched).toBeTrue()
    expect(nameInput.classList.contains("is-invalid")).toBeTrue()
  })

  it("email validáció: rossz -> jó értékre váltva frissül az állapot", () => {
    setInputValue("#email", "nem-email")
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector("#email")
    expect(emailInput.classList.contains("is-invalid")).toBeTrue()
    expect(component.form.controls.email.hasError("email")).toBeTrue()

    setInputValue("#email", "user@example.com")
    expect(emailInput.classList.contains("is-invalid")).toBeFalse()
    expect(component.form.controls.email.valid).toBeTrue()
  })

  it("irányítószám: csak 4 számjegy fogadható el", () => {
    setInputValue("#zip", "12")
    const zipInput: HTMLInputElement = fixture.nativeElement.querySelector("#zip")
    expect(component.form.controls.zip.hasError("pattern")).toBeTrue()
    expect(zipInput.classList.contains("is-invalid")).toBeTrue()

    setInputValue("#zip", "1234")
    expect(component.form.controls.zip.valid).toBeTrue()
    expect(zipInput.classList.contains("is-invalid")).toBeFalse()
  })

  it("termék kiválasztása kötelező", () => {
    const selectEl: HTMLSelectElement = fixture.nativeElement.querySelector("#productId")
    // kezdetben üres, required hibás
    selectEl.dispatchEvent(new Event("blur"))
    fixture.detectChanges()
    expect(component.form.controls.productId.invalid).toBeTrue()
    expect(selectEl.classList.contains("is-invalid")).toBeTrue()

    // válasszunk érvényes opciót
    selectOption("#productId", "p1")
    expect(component.form.controls.productId.valid).toBeTrue()
    expect(selectEl.classList.contains("is-invalid")).toBeFalse()
  })

  it("valid adatoknál a submit gomb engedélyezett és a submit lefut", () => {
    // töltsük ki helyesen
    setInputValue("#customerName", "Kovács Anna")
    setInputValue("#email", "anna@example.com")
    setInputValue("#zip", "1234")
    selectOption("#productId", "p2")

    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]')
    expect(component.form.valid).toBeTrue()
    expect(btn.disabled).toBeFalse()

    // ha a submit console.log-ol, ellenőrizzük
    const logSpy = spyOn(console, "log")
    btn.click() // (ngSubmit)
    fixture.detectChanges()

    expect(logSpy).toHaveBeenCalled() // ha nincs log a submitban, ezt a sort kommenteld ki
  })

  it("invalid form submit esetén megjelöli a mezőket touched-ként", () => {
    // minden üres, kattintsunk submitre
    
    // így is lehetne kattintani, de így azt utánozzuk mintha egérrel kattintanánk
    // ha nem kattintható a gomb, akkor nem is lehet rákattintani kódból sem így
    // const btn = fixture.debugElement.query(By.css("button[type="submit"]"))
    // btn.nativeElement.click()
    
    component.submit()
    fixture.detectChanges()

    expect(component.form.controls.customerName.touched).toBeTrue()
    expect(component.form.controls.email.touched).toBeTrue()
    expect(component.form.controls.zip.touched).toBeTrue()
    expect(component.form.controls.productId.touched).toBeTrue()
  })
})
