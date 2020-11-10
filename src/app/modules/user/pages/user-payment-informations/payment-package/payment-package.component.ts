import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountProfile, TitleEnum } from 'src/app/core/models/entities/profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-package',
  templateUrl: './payment-package.component.html',
  styleUrls: ['./payment-package.component.scss']
})
export class PaymentPackageComponent implements OnInit {
    @Input() selectedPackage: any;
  
    constructor(private route: ActivatedRoute) {}

    public allPackages = [
        {
            name: 'BEST VALUE',
            routeLink: 'best',
            virtualCredits: 2500000,
            percentGain: 233,
            cost: 499.99
        },
        {
            name: 'BETTER VALUE',
            routeLink: 'better',
            virtualCredits: 900000,
            percentGain: 200,
            cost: 199.99
        },
        {
            name: 'MOST POPULAR',
            routeLink: 'popular',
            virtualCredits: 125000,
            percentGain: 66,
            cost: 49.99
        },
        {
            name: 'VALUE PACK',
            routeLink: 'default',
            virtualCredits: 50000,
            percentGain: 33,
            cost: 24.99
        }
    ];

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const packageName = params.get('packname');
        this.selectedPackage = this.allPackages.find(packageItem => packageItem.routeLink === packageName);
      });
    }
}