import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectConnection() private readonly connection: Connection) {}

    async one(){
        return this.connection.query('SELECT * FROM student ORDER BY std_name ASC');
    }
    async two(){
        return this.connection.query('SELECT std_id,std_name FROM student');
    }
    async three(){
        return this.connection.query('SELECT std_id,std_name,province FROM student WHERE province = "ขอนแก่น" ');
    }
    async four(){
        return this.connection.query('SELECT course.course_id,title,credit FROM course JOIN register ON register.course_id = course.course_id WHERE std_id = "5001100348" ');
    }
    async five(){
        return this.connection.query('SELECT register.std_id,SUM(course.credit) FROM register JOIN course ON register.course_id = course.course_id GROUP BY register.std_id');
    } 
    async six(){
        return this.connection.query('SELECT register.course_id,COUNT(*) AS Std_sum FROM register GROUP BY register.course_id')
    } 
    async seven(){
       return this.connection.query('SELECT student.std_name FROM student JOIN register ON student.std_id = register.std_id WHERE course_id = "322236"');
    }                                 
}
