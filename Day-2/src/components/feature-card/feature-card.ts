import { Component, input, output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


// Define a strict contract for our enterprise domain data shape
export interface EnterpriseFeature {
  id: number;
  name: string;
  tier: 'standard' | 'premium' | 'enterprise';
  active: boolean;
}

@Component({
  selector: 'app-feature-card',
  imports: [UpperCasePipe],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCard {

  // Modern Signal-based Required Input
  featureData = input.required<EnterpriseFeature>();

  // Modern Lightweight Output Pipeline (Completely decoupled from RxJS EventEmitter)
  toggleStatus = output<number>();

  executeToggle() {
    // Emit the unique identifier back up to the parent component
    this.toggleStatus.emit(this.featureData().id);
  }


}
