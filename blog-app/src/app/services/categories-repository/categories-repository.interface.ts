import { Observable } from "rxjs";
import { CategoryResponseGetDto } from "../../dto/category/category.response.get.dto";
import { Category } from "../../types/Category";

export interface ICategoriesRepository {
    getCategories(): Observable<Category[]>
    addCategory(name: string): Observable<Category>
    mapCategory(data: CategoryResponseGetDto): Category
}