import { Component, computed, effect, inject, signal } from '@angular/core';
import { Fleet } from './service/fleet';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeatureCardComponent } from './component/feature-card/feature-card';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FeatureCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Day-3');
  private fleetService = inject(Fleet);

  featureStream = toSignal(this.fleetService.getFleetDataStreams())

  private myTrackerEffect = effect(() => {
    console.log('📢 Signal state actively changed inside effect tracking framework:', this.featureStream());
  });



  activePremiumCount = computed(() => {
    return this.featureStream()?.filter(
      item => item.active && (item.tier === 'premium' || item.tier === 'enterprise')
    ).length;
  });

  handleStatus(targetId: number) {
    console.log(targetId)
    this.fleetService.handleStatusMutation(targetId)
  }

}
