import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppNavbarFooterComponent} from './app-navbar-footer.component';

describe('AppNavbarFooterComponent', () => {
    let component: AppNavbarFooterComponent;
    let fixture: ComponentFixture<AppNavbarFooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppNavbarFooterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppNavbarFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
