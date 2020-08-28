import { Component, Input } from '@angular/core'
import { IAirGapTransaction } from '@bobo-wallet/coin-lib'

@Component({
  selector: 'airgap-from-to',
  templateUrl: './from-to.component.html',
  styleUrls: ['./from-to.component.scss']
})
export class FromToComponent {
  @Input()
  public transaction: IAirGapTransaction

  public displayRawData: boolean = false

  constructor() {}
}
