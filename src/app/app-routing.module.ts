import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = []

@NgModule({
	declarations: [],
	imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
