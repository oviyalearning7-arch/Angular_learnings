import { Component, computed, signal } from '@angular/core';
import { EnterpriseFeature, FeatureCard } from '../components/feature-card/feature-card';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FeatureCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   features = signal<EnterpriseFeature[]>([
    { id: 101, name: 'AI Code Optimizer', tier: 'premium', active: true },
    { id: 102, name: 'Automated DB Backups', tier: 'standard', active: true },
    { id: 103, name: 'Real-time Signal Sync', tier: 'premium', active: false },
    { id: 104, name: 'Enterprise Multi-tenant Gate', tier: 'enterprise', active: true }
  ]);

  // 2. Memoized Derived State tracking total premium or enterprise active nodes
  activePremiumCount = computed(() => {
    return this.features().filter(
      item => item.active && (item.tier === 'premium' || item.tier === 'enterprise')
    ).length;
  });

  // 3. State Mutation Handler using the high-performance update pattern
  handleStatusMutation(targetId: number) {
    this.features.update(currentFleet => 
      currentFleet.map(feature => 
        feature.id === targetId ? { ...feature, active: !feature.active } : feature
      )
    );
  }
}
