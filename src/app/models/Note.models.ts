export class Task {
     id: string | undefined;
     message: string;
     status: boolean;
     owner: string;
     created_at: number;
     updated_at: number;

     constructor(message: string, owner: string) {
          this.message = message;
          this.owner = owner;
          this.created_at = Date.now();
          this.updated_at = Date.now();
          this.status = false;
     }
}
