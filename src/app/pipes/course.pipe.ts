import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'course'
})
export class CoursePipe implements PipeTransform {

  transform(Courses: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return Courses
    }
    if (searchTerm) {
      let array = [];
      Courses.filter(element => {
        element = element.toLocaleLowerCase()
        let termToSearch = searchTerm.toLocaleLowerCase();
        if (element.startsWith(termToSearch) || element.includes(termToSearch)) {
          array.push(element)
        }
      })
      return array
    }
  }
}
