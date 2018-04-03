import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-favorites-add-configm-dialog',
    templateUrl: './favorites-add-configm-dialog.component.html',
    styleUrls: ['./favorites-add-configm-dialog.component.css']
})
export class FavoritesAddConfigmDialogComponent implements OnInit {

    addToFavoritesForm = new FormGroup({
        name: new FormControl('', []),
    });


    constructor(public dialogRef: MatDialogRef<FavoritesAddConfigmDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: FavoriteAddData,
                private formBuilder: FormBuilder,) {
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.data.confirmed = false;
    }

    onOkClick(): void {
        this.data.confirmed = true;
    }

}

export class FavoriteAddData {
    public name: string;
    public confirmed: boolean;
}
