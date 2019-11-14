import {ModuleWithProviders, NgModule} from '@angular/core';
import {ImgLoaderComponent} from './components/img-loader';
import {IonicModule} from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {ImageLoader} from './providers/image-loader';
import {ImageLoaderConfig} from './providers/image-loader-config';
import {File} from '@ionic-native/file/ngx';

@NgModule({
  declarations: [
    ImgLoaderComponent,
  ],
  imports: [
    IonicModule,
    HttpClientModule,
  ],
  exports: [
    ImgLoaderComponent,
  ],
})
export class IonicImageLoader {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: this,
      providers: [
        ImageLoaderConfig,
        ImageLoader,
        File,
      ],
    };
  }
}
