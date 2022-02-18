import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-balance-transfer-detail',
  templateUrl: './balance-transfer-detail.component.html',
  styleUrls: ['./balance-transfer-detail.component.scss']
})
export class BalanceTransferDetailComponent implements OnInit {

  currentUserId:number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.currentUserId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.currentUserId);
  }

}
