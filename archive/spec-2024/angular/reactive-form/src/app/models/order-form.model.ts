import { FormControl, FormGroup } from "@angular/forms"

export type OrderFormGroup = FormGroup<{
    customerName: FormControl<string>
    email: FormControl<string>
    zip: FormControl<string>
    productId: FormControl<string>
}>