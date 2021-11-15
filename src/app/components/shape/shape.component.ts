import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit, OnDestroy {
  facts: string[] = [];
  constructor(private matchService: MatchService) { }

  ngOnDestroy(): void {
    console.log('sonon dentro on destroy');
  }

  async ngOnInit() {
    console.log('Ciao sono dentro Shape');
    const {data} = await this.matchService.getMatches();
    console.log('obj:', data);
    this.facts = data.map(item => item.fact);
  }

}
