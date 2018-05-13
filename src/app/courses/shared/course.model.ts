import { Category } from '../../categories/shared/category.model';
import { Lecture } from '../../lectures/shared/lecture.model';

export class Course {
    constructor(
        public course_id?: string,
        public title?: string,
        public description?: string,
        public logo_url?: string,
        public category?: Category,
        public lectures?: Array<Lecture>
    ) {}

}
