export class User {
  public id: number;

  public nom: string;

  public prenom: string;

  public email: string;

  public password: string;

  public civilite: number;

  public cgu: boolean;

  public constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
