class Skill {
  id?: number;
  name?: string;
  comment?: string;

  constructor(id?: number, name?: string, comment?: string) {
    this.id = id;
    this.name = name;
    this.comment = comment;
  }
}

export {Skill}
