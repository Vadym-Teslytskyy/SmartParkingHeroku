import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-parking-list-filter-price-range-field',
    templateUrl: './price-range-field.component.html',
    styleUrls: ['./price-range-field.component.css']
})
export class PriceRangeFieldComponent implements OnInit {

    @ViewChild('minInput') minInput: HTMLInputElement;

    @ViewChild('maxInput') maxInput: HTMLInputElement;

    private readonly minControl: FormControl = new FormControl();

    private readonly maxControl: FormControl = new FormControl();

    private readonly valueChangesSubject = new Subject<PriceRange>();

    public readonly valueChanges = this.valueChangesSubject.asObservable();

    private internalValue: PriceRange;

    constructor() {
    }

    public get value(): PriceRange {
        return this.internalValue;
    }

    ngOnInit(): void {
        this.valueChanges.subscribe(value => this.internalValue = value);
        this.minControl.valueChanges.subscribe(min => {
            if (this.validateMin(min)) {
                this.valueChangesSubject.next(new PriceRange(min, this.maxControl.value));
            }
        });
        this.maxControl.valueChanges.subscribe(max => {
            if (this.validateMax(max)) {
                this.valueChangesSubject.next(new PriceRange(this.minControl.value, max));
            }
        });
        this.minControl.setValue(0);
        this.maxControl.setValue(undefined);
        this.minControl.markAsTouched();
        this.maxControl.markAsTouched();
    }

    private validateMin(min: number | null): boolean {
        const max = this.maxControl.value;
        if (min) {
            if (min < 0) {
                this.minControl.setErrors({'lessThanZero': min});
                return false;
            } else if (max && min > max) {
                this.minControl.setErrors({'greaterThanMax': min});
                this.maxControl.setErrors(null);
                return false;
            }
        }
        return this.maxControl.errors === null;
    }

    private validateMax(max: number | null): boolean {
        const min = this.minControl.value;
        if (max) {
            if (max < 0) {
                this.maxControl.setErrors({'lessThanZero': max});
                return false;
            }
            if (min && max < min) {
                this.maxControl.setErrors({'lessThanMin': max});
                this.minControl.setErrors(null);
                return false;
            }
        }
        return this.minControl.errors === null;
    }
}

export class PriceRange {

    public readonly min: number;
    public readonly max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }
}
