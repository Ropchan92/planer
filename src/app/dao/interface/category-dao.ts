import {CommonDAO} from './CommonDAO';
import {Category} from '../../model/category';
import {Observable} from 'rxjs';

export interface CategoryDao extends CommonDAO<Category>{
  search(tile:string): Observable<Category[]>;

}
