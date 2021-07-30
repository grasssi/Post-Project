import { Pipe, PipeTransform } from '@angular/core';
import { PostService } from '../services/post.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  item: any
  articlebyid: any
  constructor(private ArticleService: PostService) { }
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;
    args = args.toLowerCase()
    return value.filter((item: any) => {
      return item?.titre?.toLowerCase().includes(args) ||
        item?.description?.toLowerCase().includes(args) ||
        item?.categories?.toLowerCase().includes(args) ||
        item?.date == args;
    });
  }
}
