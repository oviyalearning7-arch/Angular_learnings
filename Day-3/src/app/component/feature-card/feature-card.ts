import { UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { EnterpriseFeature } from '../../service/fleet';



@Component({
  selector: 'app-feature-card',
  imports: [UpperCasePipe], // Completely standalone out-of-the-box
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss'
})
export class FeatureCardComponent {
  // Modern Signal-based Required Input
  featureData = input.required<EnterpriseFeature>();
  
  // Modern Lightweight Output Pipeline (Completely decoupled from RxJS EventEmitter)
  toggleStatus = output<number>();

  executeToggle() {
    console.log("Hit toggle")
    // Emit the unique identifier back up to the parent component
    this.toggleStatus.emit(this.featureData().id);
  }
}

