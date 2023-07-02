import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/shared/interfaces/skill.i';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() public skill: Skill = { name: '', image: ''};
}

