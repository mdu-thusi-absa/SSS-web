import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-buttons-toggle',
  templateUrl: './buttons-toggle.component.html',
  styleUrls: ['./buttons-toggle.component.css']
})
export class ButtonsToggleComponent implements OnInit {
  @Input() title = 'menu';
  @Input() toggleValue = true;
  @Input() isNarrow = false;
  @Input() glyphiconClass = 'glyphicon-flag';
  @Input() matIcon = 'home';
  @Input() svgUrlPath = "'../assets/svg/Icon_Exclamation circle_SVG_Black.svg\'"
  @Input() placeholder = '';
  @Input() showMe = true;
  @Input() dataTarget: string;

  @Output() onToggle = new EventEmitter();

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  doToggle(event: any){
    this.toggleValue = event.target.checked;
    this.onToggle.emit(event.target.checked);
  }

}
