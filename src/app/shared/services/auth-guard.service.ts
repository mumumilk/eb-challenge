import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { CategoryService } from '../../categories/shared/category.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private categoryService: CategoryService, public router: Router) { }

    canActivate(): boolean {
        if (!this.categoryService.category) {
            this.router.navigate(['categories']);
            return false;
        }

        return true;
    }
}
