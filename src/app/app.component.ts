import { Component } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
   invoiceForm: FormGroup;
   rowsArray: FormArray;
  minToDistance = 0;
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.rowsArray = this._fb.array([this.initRows()]);
    this.invoiceForm = this._fb.group({
      Rows: this.rowsArray
    });
  }

  validFromDistance(event, index): boolean {
   if ((event.target.value > this.minToDistance) || (this.minToDistance == 0)) {
    return true;
   } else {
    this.rowsArray.at(index).patchValue('')

  }
  }

  get formArr() {
    console.log(this.invoiceForm.value );
    return this.invoiceForm.get("Rows") as FormArray;

    // if(this.invoiceForm.value) {
    //   const newArr= this.invoiceForm.value.Rows
    //   for (const val of newArr) {
    //     if(val.todistance<val.fromdistance){
    //       alert('todistance should be greater than from distance')
    //     }else{

    //     }
    //   }

    // }
  }

  initRows() {

        return this._fb.group({
          fromdistance: [""],
          todistance:[""],
          price:[""],
        });

  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
}
