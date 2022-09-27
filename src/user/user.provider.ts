import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import * as bcrypt from "bcrypt";
@Injectable()
export class userProvider {
    users : User[] = [];
    async signup(name: string, email: string, password: string) : Promise<string> {
        const userId = Math.random().toString();
        password = await bcrypt.hash(password, 10);
        this.users.push(new User(userId, name, email, password));
        return ""
    }
}
