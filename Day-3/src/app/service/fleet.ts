import { Injectable, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { delay, Observable, of } from 'rxjs';

export interface EnterpriseFeature {
  id: number;
  name: String;
  tier: 'premium' | 'standard' | 'enterprise';
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Fleet {
  private mockCloudDatabase: WritableSignal<EnterpriseFeature[]> = signal<EnterpriseFeature[]>([
    { id: 101, name: 'AI Code Optimizer', tier: 'premium', active: true },
    { id: 102, name: 'Automated DB Backups', tier: 'standard', active: true },
    { id: 103, name: 'Real-time Signal Sync', tier: 'premium', active: false },
    { id: 104, name: 'Enterprise Multi-tenant Gate', tier: 'enterprise', active: true }
  ]);

  public getFleetDataStreams(): Observable<EnterpriseFeature[]> {
    let value = toObservable(this.mockCloudDatabase)
    console.log("servce", value)
    return value;
  }

  // fleetState = signal<EnterpriseFeature[]>(this.mockCloudDatabase)

  handleStatusMutation(targetId: number): void {
  console.log('⚙️ Step C: Service method executing for ID:', targetId);
  
  // 1. Trigger the signal update pipeline
  return this.mockCloudDatabase.update(currentFleet => {
    
    // 2. Perform the strict mapping conversion
    const updated = currentFleet.map(module => {
      // Force both ID parameters to Number types to avoid strict structural type mismatches
      if (module.id === Number(targetId)) {
        return { ...module, active: !module.active };
      }
      return {...module};
    });

    // 3. CRUCIAL: This print statement and return must execute perfectly
    console.log('📋 Step D: Raw array mapping result successfully generated:', updated);
    return [...updated]; // This sends the modified state back to the signal master pool
  });
}

}
