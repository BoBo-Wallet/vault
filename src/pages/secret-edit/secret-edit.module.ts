import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { SecretEditPage } from './secret-edit'
import { ComponentsModule } from '../../components/components.module'
import { MaterialIconsModule } from 'ionic2-material-icons'
import { SecretEditPopoverComponent } from './secret-edit-popover/secret-edit-popover.component'

@NgModule({
  declarations: [
    SecretEditPage,
    SecretEditPopoverComponent
  ],
  imports: [
    ComponentsModule,
    MaterialIconsModule,
    IonicPageModule.forChild(SecretEditPage)
  ],
  entryComponents: [
    SecretEditPage,
    SecretEditPopoverComponent
  ]
})
export class SecretEditPageModule {}
