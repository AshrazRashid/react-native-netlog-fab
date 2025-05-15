import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  // No methods needed for network logging
}

export default TurboModuleRegistry.getEnforcing<Spec>('NetlogFab');
