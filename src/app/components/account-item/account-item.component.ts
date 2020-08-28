import { Component, Input } from '@angular/core'
import { AirGapWallet } from '@bobo-wallet/coin-lib'

@Component({
  selector: 'airgap-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss']
})
export class AccountItemComponent {
  @Input()
  public wallet: AirGapWallet
}
