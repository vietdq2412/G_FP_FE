import {Component, Inject, OnInit} from '@angular/core';
import {Skill} from "../../entity/skill";
import {SkillService} from "../../services/skill.service";
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppUserService} from "../../services/app-user.service";
import {AppUser} from "../../entity/appUser";

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  skills: Skill[] = [];
  selectedSkillId: any;
  selectedSkill: Skill = new Skill();
  appUser: AppUser = new AppUser();

  constructor(
    private skillService: SkillService,
    private appUserService: AppUserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddSkillComponent>
  ) {
  }

  ngOnInit(): void {
    this.appUser = this.data.appUser;
    this.skillService.getSKills().subscribe(data => {
      this.skills = data;
    });
  }

  addSkill(form: NgForm) {
    this.selectedSkillId = form.value.selectedSkill;
    this.appUserService.addSkill(this.appUser.id, this.selectedSkillId).subscribe(data => {
      this.dialogRef.close(true);
    })
  }
}
