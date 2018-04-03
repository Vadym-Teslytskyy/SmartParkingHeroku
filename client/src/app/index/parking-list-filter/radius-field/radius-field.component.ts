import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSlider} from '@angular/material';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-parking-list-filter-radius-field',
    templateUrl: './radius-field.component.html',
    styleUrls: ['./radius-field.component.css']
})
export class RadiusFieldComponent implements OnInit {

    @ViewChild('slider')
    private slider: MatSlider;

    private readonly valueChangesSubject = new Subject<number>();

    public readonly valueChanges = this.valueChangesSubject.asObservable();

    constructor(private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.slider.value = 5;
        this.refreshComponentView();
    }

    public get value(): number {
        return this.slider.value;
    }

    private refreshComponentView(): void {
        this.changeDetector.detectChanges();
        setTimeout(() => this.changeDetector.detectChanges(), 1);
    }

    public get max(): number {
        return this.slider.max;
    }

    public onChange(): void {
        this.valueChangesSubject.next(this.slider.value);
    }

}
