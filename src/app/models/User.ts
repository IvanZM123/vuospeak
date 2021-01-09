export class User {
     uid: string;
     name?: string | null;
     email: string | null;
     avatar?: string | null;

     constructor(user: User) {
          this.uid = user.uid;
          this.name = user.name;
          this.email = user.email;
          this.avatar = user.avatar;
     }
}