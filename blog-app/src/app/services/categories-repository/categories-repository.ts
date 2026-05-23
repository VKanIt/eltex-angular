import { HttpClient } from "@angular/common/http";
import { Category } from "../../types/Category";
import { ICategoriesRepository } from "./categories-repository.interface";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DestroyRef, inject, Injectable } from "@angular/core";
import { CategoryResponseGetDto } from "../../dto/category/category.response.get.dto";
import { map, Observable } from "rxjs";

@Injectable()
export class CategoriesRepository implements ICategoriesRepository {
    //-----INJECTS-----\\
    private destroyRef = inject(DestroyRef);
    private httpClient = inject(HttpClient);

    //-----METHODS-----\\
    public getCategories(): Observable<Category[]> {
        return this.httpClient.get<CategoryResponseGetDto[]>('/api/categories')
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                map((resp: CategoryResponseGetDto[]) => {
                    return resp.map((item) => this.mapCategory(item));
                })
            );
    }

    public addCategory(name: string): Observable<Category> {
        return this.httpClient.post<CategoryResponseGetDto>('/api/categories', {
            name: name
        })
        .pipe(
            takeUntilDestroyed(this.destroyRef),
            map((resp: any) => {
                if (resp.status !== undefined) {
                    return resp.message;
                }
                
                return this.mapCategory(resp);
            })
        );
    }

    public mapCategory(data: CategoryResponseGetDto): Category {
        return {
            id: data.id,
            name: data.name,
        }
    } 
}