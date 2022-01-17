import { Injectable } from '@angular/core';


export class Profile {
    constructor(
        public id: string,
        public username: string,
        public name: string,
        public email: string,
        public contactNumber: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class ProfileAdapter{
    constructor(){

    }

    adapt(user: any): Profile {
        return new Profile(
            user.id,
            user.username,
            user.name,
            user.email,
            user.contactNumber,
        )
    }
}