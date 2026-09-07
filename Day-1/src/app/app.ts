import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Day-1');
  features = [
    { id: 101, name: 'AI Code Optimizer', tier: 'premium', active: true },
    { id: 102, name: 'Automated DB Backups', tier: 'standard', active: true },
    { id: 103, name: 'Real-time Signal Sync', tier: 'premium', active: false },
    { id: 104, name: 'Enterprise Multi-tenant Gate', tier: 'enterprise', active: true }
  ]
}
